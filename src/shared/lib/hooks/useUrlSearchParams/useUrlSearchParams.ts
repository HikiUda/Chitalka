import { useSearchParams } from 'react-router-dom';

export function useUrlSearchParams() {
    const [searchParams, setSearchParams] = useSearchParams();

    const setSearchParam = (param: string, value: string) => {
        searchParams.set(param, value);
        setSearchParams(searchParams);
    };

    const getSearchParam = (param: string) => {
        return searchParams.get(param);
    };

    const getAllSearchParams = () => {
        return Object.fromEntries(searchParams.entries());
    };

    const deleteSearchParam = (param: string) => {
        searchParams.delete(param);
    };

    return {
        setSearchParam,
        setSearchParams,
        getSearchParam,
        getAllSearchParams,
        deleteSearchParam,
    };
}
