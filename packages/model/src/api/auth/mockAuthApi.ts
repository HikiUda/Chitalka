import { delay, http, HttpResponse } from 'msw';
import { UserDataType } from './types/user';
import { AuthUserType } from './types/authTypes';

export const mockUserData: UserDataType = {
    id: 1,
    name: 'wendsew',
    avatar: null,
    jsonSettings: {},
};

export const mockAuthUser: AuthUserType = {
    user: {
        id: 1,
        login: 'login',
        name: 'wendsew',
    },
    tokens: {
        access: 'access',
        refresh: 'refresh',
    },
};

export const mockLogin = http.post('*/auth/login', async () => {
    await delay(1000);
    return HttpResponse.json(mockAuthUser);
});
export const mockLogout = http.delete('*/auth/logout', async () => {
    await delay(1000);
    return new HttpResponse(null, { status: 200 });
});
export const mockRegistration = http.post('*/auth/registration', async () => {
    await delay(1000);
    return HttpResponse.json(mockAuthUser);
});
export const mockGetUserData = http.get('*/user', () => {
    return HttpResponse.json(mockUserData);
});

export const mockAuthApi = [mockLogin, mockLogout, mockRegistration, mockGetUserData];
