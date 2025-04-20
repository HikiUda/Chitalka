import { createContext, useContext } from 'react';

export type TriSwitchState = 'include' | 'exclude' | 'none';

export type IncludeExcludeType = (string | number)[];
//TODO type
interface TriStateCheckboxGroupContextProps {
    include: IncludeExcludeType;
    exclude: IncludeExcludeType;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onCheck: (value: any, nextState: TriSwitchState) => void;
}

export const TriStateCheckboxGroupContext = createContext<TriStateCheckboxGroupContextProps | null>(
    null,
);

export function useTriStateCheckboxGroupContext() {
    const context = useContext(TriStateCheckboxGroupContext);
    return context;
}
