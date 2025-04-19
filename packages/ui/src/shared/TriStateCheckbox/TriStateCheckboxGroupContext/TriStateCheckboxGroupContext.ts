import { createContext, useContext } from 'react';

export type TriSwitchState = 'include' | 'exclude' | 'none';

export type IncludeExcludeType = (string | number)[];

interface TriStateCheckboxGroupContextProps {
    include: IncludeExcludeType;
    exclude: IncludeExcludeType;
    onCheck: (value: string | number, nextState: TriSwitchState) => void;
}

export const TriStateCheckboxGroupContext = createContext<TriStateCheckboxGroupContextProps | null>(
    null,
);

export function useTriStateCheckboxGroupContext() {
    const context = useContext(TriStateCheckboxGroupContext);
    return context;
}
