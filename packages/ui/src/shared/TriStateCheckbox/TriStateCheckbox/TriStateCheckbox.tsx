import { memo, useCallback, useState } from 'react';
import { classNames } from '@packages/model/src/lib/helpers/classNames';
import { getFlex } from '@ui/shared/Stack';
import {
    TriSwitchState,
    useTriStateCheckboxGroupContext,
} from '../TriStateCheckboxGroupContext/TriStateCheckboxGroupContext';
import cls from './TriStateCheckbox.module.scss';

interface TriStateCheckboxProps {
    className?: string;
    label?: string;
    value?: string | number;
    state?: TriSwitchState;
    defaultState?: TriSwitchState;
    onChange?: (newState: TriSwitchState) => void;
}

const getNextState = (current: TriSwitchState): TriSwitchState => {
    if (current === 'none') return 'include';
    if (current === 'include') return 'exclude';
    return 'none';
};

export const TriStateCheckbox = memo((props: TriStateCheckboxProps) => {
    const { className, onChange, value, label, state, defaultState } = props;
    const [internalState, setInternalState] = useState(defaultState || 'none');
    const context = useTriStateCheckboxGroupContext();

    const handleOnCheck = useCallback(
        (newState: TriSwitchState) => {
            if (value && context) {
                context.onCheck(value, newState);
            }
        },
        [context, value],
    );

    const handleClick = () => {
        if (state && onChange) {
            onChange(getNextState(state));
            handleOnCheck(getNextState(state));
        } else {
            setInternalState(getNextState(internalState));
            handleOnCheck(getNextState(internalState));
        }
    };

    return (
        <button
            onClick={handleClick}
            className={classNames(cls.TriStateCheckbox, {}, [
                className,
                getFlex(),
                cls[state || internalState],
            ])}
        >
            <div className={classNames(cls.checkbox, {}, [getFlex({ flexShrink: false })])}>
                <svg viewBox="0 0 18 18" aria-hidden="true">
                    {(state || internalState) === 'exclude' ? (
                        <rect x={1} y={7.5} width={15} height={3} />
                    ) : (
                        <polyline points="1 9 7 14 15 4" />
                    )}
                </svg>
            </div>
            <span>{label}</span>
        </button>
    );
});
