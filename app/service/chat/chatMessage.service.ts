import api from "@/app/api/axios";
import requests from "@/app/api/requests";
import { ChatMessageModel } from "@/app/model/chat.model";

export const getMessageList = async ({ roomId, nickname, onMessage }: { roomId: string, nickname: string, onMessage: (message: ChatMessageModel) => void }): Promise<void> => {
    try {
        const eventSource = new EventSource(
            api+requests.fetchChats + `/message/${roomId}?nickname=${nickname}`);

        eventSource.onopen = () => {
            console.log('SSE 연결 성공:', eventSource);
        };

        // 과거 메시지를 수신 (past-message 이벤트)
        eventSource.addEventListener('past-message', (event: MessageEvent) => {
            try {
                const parsedData: ChatMessageModel = JSON.parse(event.data);
                console.log('과거 메시지:', parsedData);
                onMessage(parsedData);  // 상태 업데이트 콜백 호출
            } catch (error) {
                console.error('과거 메시지 파싱 오류:', error);
            }
        });

        // 실시간 메시지를 수신 (chat-message 이벤트)
        eventSource.addEventListener('chat-message', (event: MessageEvent) => {
            try {
                const parsedData: ChatMessageModel = JSON.parse(event.data);
                console.log('실시간 메시지:', parsedData);
                onMessage(parsedData);  // 상태 업데이트 콜백 호출
            } catch (error) {
                console.error('실시간 메시지 파싱 오류:', error);
            }
        });



        // 오류가 발생했을 때 처리
        eventSource.onerror = (error) => {
            console.error("SSE 연결 오류 발생:", error);
            eventSource.close();
        };

    } catch (error) {
        const errorMessage = (error as Error).message;
        console.error('SSE 메시지 구독 중 오류 발생:', errorMessage);
    }
};



export const insertMessage = async ({ nickname, roomId, message }: { nickname: string, roomId: string, message: string }): Promise<boolean> => {
    try {
        const response = await api.post<boolean>(requests.fetchChats+'/message', {
            message,
            roomId
          }, {
            headers: {
              'nickname': nickname
            }
        });
        return response.data;
    } catch (error) {
        console.error('채팅 메세지 보내는 중 오류 발생:', error);
        return false;
    }
}

export const unReadTotalMessageCount = async ({ nickname }: { nickname: string }): Promise<number> => {
    try {
        const response = await api.get<number>(requests.fetchChats + '/message/totalunread', {
            headers: {
                'nickname': nickname
            }
        })
        return response.data;
    } catch (error) {
        console.error('총 User가 읽지 않은 메세지 갯수 찾는 중 오류 발생:', error);
        return 0;
    }
}