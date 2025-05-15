import { memo } from 'react';
import { classNames } from '@/shared/lib/helpers/classNames';
import {
    ProgressBar as AProgressBar,
    ProgressBarProps as AProgressBarProps,
    Label,
} from 'react-aria-components';
import { HStack } from '../Stack';
import cls from './ProgressBar.module.scss';

interface ProgressBarProps extends AProgressBarProps {
    className?: string;
    label?: string;
    valueVisible?: boolean;
}

export const ProgressBar = memo((props: ProgressBarProps) => {
    const { className, label, valueVisible = true, ...otherProps } = props;

    return (
        <AProgressBar className={classNames('', {}, [className])} {...otherProps}>
            {({ percentage, valueText }) => (
                <>
                    <HStack justify="between" align="center">
                        <Label>{label}</Label>
                        {valueVisible && <span className={cls.value}>{valueText}</span>}
                    </HStack>
                    <div className={cls.bar}>
                        <div className={cls.fill} style={{ width: percentage + '%' }} />
                        <div className={cls.fillOpacity} />
                    </div>
                </>
            )}
        </AProgressBar>
    );
});
