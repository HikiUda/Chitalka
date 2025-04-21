import { FC } from 'react';
import { classNames } from '@packages/model/src/lib/helpers/classNames';
import {
    UNSTABLE_Toast as AToast,
    UNSTABLE_ToastContent as ToastContent,
    UNSTABLE_ToastQueue as ToastQueue,
    UNSTABLE_ToastRegion as ToastRegion,
    Text,
} from 'react-aria-components';
import { flushSync } from 'react-dom';
import { Button } from '../Button';
import { Heading } from '../Heading';
import { getFlex } from '../Stack';
import { getStyleLineClamp, getStyleScrollbar } from '../StyleHooks';
import cls from './Toast.module.scss';

interface ToastProps {
    className?: string;
}
interface ToastContent {
    title?: string;
    description?: string;
    noButton?: boolean;
}

export const queue = new ToastQueue<ToastContent>({
    wrapUpdate(fn) {
        if ('startViewTransition' in document) {
            document.startViewTransition(() => {
                flushSync(fn);
            });
        } else {
            fn();
        }
    },
});

export const Toast: FC<ToastProps> = (props) => {
    const { className } = props;

    return (
        <ToastRegion
            queue={queue}
            className={classNames(cls.ToastRegion, {}, [
                className,
                getFlex({ direction: 'columnReverse', align: 'end' }),
                getStyleScrollbar(),
            ])}
        >
            {({ toast }) => (
                <AToast
                    style={{ viewTransitionName: toast.key }}
                    toast={toast}
                    className={classNames(cls.Toast, {}, [getFlex({ gap: '16' })])}
                >
                    <ToastContent className={cls.content}>
                        <Heading bold className={getStyleLineClamp({ lineClamp: '1' })}>
                            {toast.content.title}
                        </Heading>
                        <Text
                            className={getStyleLineClamp({
                                wordBreak: true,
                                huphens: true,
                                lineClamp: '4',
                            })}
                            slot="description"
                        >
                            {toast.content.description}
                        </Text>
                    </ToastContent>
                    {!toast.content.noButton && (
                        <Button theme="outline" className={cls.button} slot="close">
                            x
                        </Button>
                    )}
                </AToast>
            )}
        </ToastRegion>
    );
};
