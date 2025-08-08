import { authHandlers } from '../handlers/authorization';
import { catalogHandler } from '../handlers/catalog';
import { lastUpdatedBooksHandler } from '../handlers/lastUpdatedBooks';
import { HadnlerOptions } from '../handlersSettings';

export const devHandlers = (options: HadnlerOptions = {}) => [
    ...authHandlers,
    ...catalogHandler(options),
    ...lastUpdatedBooksHandler(options),
];
