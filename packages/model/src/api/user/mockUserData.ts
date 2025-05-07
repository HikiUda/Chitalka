import { http, HttpResponse } from 'msw';
import { UserDataType } from './user';

export const mockUserData: UserDataType = {
    id: 1,
    name: 'wendsew',
    avatar: null,
    jsonSettings: {},
};
export const mockGetUserData = http.get('*/user', () => {
    return HttpResponse.json(mockUserData);
});
