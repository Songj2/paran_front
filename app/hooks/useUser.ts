import { useQuery, useMutation, useQueryClient } from 'react-query';
import { useDispatch } from 'react-redux';
import { findUserDetail, modifyPassword } from '@/app/service/user/user.service';
import { UserModel } from '@/app/model/user/user.model';
import { AppDispatch } from "@/lib/store"; // AppDispatch 임포트

export const useUser = (nickname: string) => {
    const queryClient = useQueryClient();
    const dispatch: AppDispatch = useDispatch();

    const { data: user, isLoading, error } = useQuery<UserModel, Error>(
        ['user', nickname],
        () => findUserDetail(nickname, dispatch), // nickname으로 유저를 찾는 API
        {
            staleTime: 5 * 60 * 1000,
            onError: (error: Error) => {
                console.error('Error fetching user:', error.message);
            },
        }
    );

    const updateUserPassword = useMutation(
        (newPassword: string) => modifyPassword(nickname, newPassword, dispatch),
        {
            onSuccess: () => {
                queryClient.invalidateQueries(['user', nickname]);
            },
            onError: (error: Error) => {
                console.error('Error updating password:', error.message);
            },
        }
    );

    return {
        user,
        isLoading,
        error,
        updateUserPassword: updateUserPassword.mutate,
    };
};