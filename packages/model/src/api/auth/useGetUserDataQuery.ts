import { useQuery } from '@tanstack/react-query';
import { $api } from '../base';
import { AuthUserType } from './types/authTypes';

export const useGetUserDataQuery = () => {
    const query = useQuery({
        queryKey: ['userData'],
        queryFn: async () => {
            try {
                const userData = await $api.get<AuthUserType>('/user');
                if (!userData) return null;
                return userData;
            } catch (e) {
                //console.log(e);
            }
        },
        initialData: null,
    });

    return query;
};
