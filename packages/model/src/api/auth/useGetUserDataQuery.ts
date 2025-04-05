import { useQuery } from '@tanstack/react-query';
import { $api } from '../baseApi/kyBase';
import { User } from './types/user';

export const useGetUserDataQuery = () => {
    const query = useQuery({
        queryKey: ['userData'],
        queryFn: async () => {
            try {
                const userData = await $api.get<User>('user').json();
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
