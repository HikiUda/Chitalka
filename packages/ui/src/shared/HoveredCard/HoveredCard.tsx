import {
    Root,
    Trigger,
    Content,
    Portal,
    Arrow,
    HoverCardProps,
    HoverCardContentProps,
} from '@radix-ui/react-hover-card';
import { ReactNode } from 'react';
import { classNames } from '@packages/model/src/lib/helpers/classNames';
import cls from './HoveredCard.module.scss';

interface HoveredCardProps extends HoverCardProps {
    className?: string;
    children?: ReactNode;
    trigger?: ReactNode;
    contentProps?: HoverCardContentProps;
}

export const HoveredCard = (props: HoveredCardProps) => {
    const { className, children, trigger, contentProps, ...otherProps } = props;

    return (
        <Root {...otherProps}>
            <Trigger asChild>
                <div>{trigger}</div>
            </Trigger>
            <Portal>
                <Content
                    {...contentProps}
                    className={classNames(cls.HoverCardContent, {}, [className])}
                >
                    {children}
                    <Arrow className={cls.HoverCardArrow} />
                </Content>
            </Portal>
        </Root>
    );
};
