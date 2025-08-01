import { NavigateOptions, useSearchParams } from 'react-router-dom';

// export function getQueryParams(params: OptionalRecord<string, string>) {
//     const searchParams = new URLSearchParams(window.location.search);
//     Object.entries(params).forEach(([name, value]) => {
//         if (value !== undefined) {
//             searchParams.set(name, value);
//         }
//     });
//     return `?${searchParams.toString()}`;
// }

// export function addQueryParams(params: OptionalRecord<string, string>) {
//     window.history.pushState(null, '', getQueryParams(params));
// }

export function useUrlSearchParams() {
    const [searchParams, setSearchParams] = useSearchParams();

    const setSearchParam = (param: string, value: string, options?: NavigateOptions) => {
        searchParams.set(param, value);
        setSearchParams(searchParams, options);
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

    const setAnySearchParams = (params: Record<string, unknown>, options?: NavigateOptions) => {
        setSearchParams(
            Object.fromEntries(Object.entries(params).map(([key, value]) => [key, String(value)])),
            options,
        );
    };

    return {
        setSearchParam,
        setSearchParams,
        setAnySearchParams,
        getSearchParam,
        getAllSearchParams,
        deleteSearchParam,
    };
}
