/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useContext } from 'react';

export type TriSwitchState = 'include' | 'exclude' | 'none';

interface TriStateCheckboxGroupContextProps {
    include: any[];
    exclude: any[];
    onCheck: (value: any, nextState: TriSwitchState) => void;
}

export const TriStateCheckboxGroupContext = createContext<TriStateCheckboxGroupContextProps | null>(
    null,
);

export function useTriStateCheckboxGroupContext() {
    const context = useContext(TriStateCheckboxGroupContext);
    return context;
}
