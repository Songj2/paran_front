import { configureStore } from '@reduxjs/toolkit';
import userSlice from './features/users/user.slice';
import fileSlice from './features/file/file.slice';
import roomSlice from './features/room/room.slice';
import addressSlice from './features/room/address.slice';
import accountSlice from './features/room/account.slice';
import reviewSlice from './features/room/review.slice';
import groupSlice from './features/group/group.slice';
import bookingsSlice from './features/room/bookings.slice';
import errorSlice from './features/error.slice';
import bookSlice from './features/group/book.slice';
import commentSlice from './features/comment/comment.slice';
import chatSlice from './features/chat/chat.slice';
import authReducer from './features/room/account.slice'
import { useDispatch } from "react-redux";
import dataReducer from './features/data.slice';
import usersSlice from "@/lib/features/users/users.slice";


export const makeStore = () => {
  return configureStore({
    reducer: {
      user: userSlice,
      users: usersSlice,
      file: fileSlice,
      room: roomSlice,
      address: addressSlice,
      account: accountSlice,
      review: reviewSlice,
      group: groupSlice,
      bookings: bookingsSlice,
      error: errorSlice,
      comment: commentSlice,
      chat: chatSlice,
      book: bookSlice,
      auth: authReducer,
      data: dataReducer,
    },
  });
};

// 스토어 타입을 정의합니다.
export type AppStore = ReturnType<typeof makeStore>;
// RootState와 AppDispatch 타입을 추론합니다.
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
export const useAppDispatch: () => AppDispatch = useDispatch;