import { createDevValidator } from '@model/lib/zod/createDevValidator';
import { queryOptions } from '@tanstack/react-query';
import { $api } from '../baseApi/kyBase';
import type { UserDataType } from './types/user';

const validateUserData = createDevValidator(() =>
    import('./types/user').then((r) => r.UserDataScheme),
);

class UserData {
    async getUserData() {
        const userData = await $api.get('user').json();
        return await validateUserData(userData);
    }
    getUserDataQueryOptions() {
        return queryOptions<UserDataType>({
            queryKey: ['userData'],
            queryFn: () => this.getUserData(),
        });
    }
}

const UserDataApi = new UserData();
export { UserDataApi };
