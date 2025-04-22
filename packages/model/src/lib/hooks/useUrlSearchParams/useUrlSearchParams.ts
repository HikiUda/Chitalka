import { useSearchParams } from 'react-router-dom';

export function useUrlSearchParams() {
    const [searchParams, setSearchParams] = useSearchParams();

    const set = (param: string, value: string) => {
        searchParams.set(param, value);
        setSearchParams(searchParams);
    };
    const get = (param: string) => {
        return searchParams.get(param);
    };
    const getAll = () => {
        return Object.fromEntries(searchParams.entries());
    };
    const remove = (param: string) => {
        searchParams.delete(param);
    };
    return {
        setSearchParam: set,
        getSearchParam: get,
        getAllSearchParams: getAll,
        deleteSearchParam: remove,
    };
}
