export const mockUserData: UserData = {
    id: 1,
    name: 'wendsew',
    avatar: null,
    jsonSettings: {},
};

import { http, HttpResponse } from 'msw';
import { UserData } from './types/user';
export const mockLogin = http.post('*/auth/login', () => {
    return new HttpResponse(null, { status: 200 });
});
export const mockLogout = http.delete('*/auth/logout', () => {
    return new HttpResponse(null, { status: 200 });
});
export const mockRegistration = http.post('*/auth/registration', () => {
    return new HttpResponse(null, { status: 200 });
});
export const mockGetUserData = http.get('*/user', () => {
    return HttpResponse.json(mockUserData);
});

export const mockAuthApi = [mockLogin, mockLogout, mockRegistration, mockGetUserData];
