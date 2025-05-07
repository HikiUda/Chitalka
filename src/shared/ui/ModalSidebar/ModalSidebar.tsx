import { FC, ReactNode, useEffect, useState } from 'react';
import { classNames } from '@/shared/lib/helpers/classNames';
import { ButtonContext, Dialog, ModalOverlay, Modal as AModal } from 'react-aria-components';
import { useLocation } from 'react-router-dom';
import cls from './ModalSidebar.module.scss';

interface ModalSidebarProps {
    className?: string;
    children?: ReactNode;
    trigger?: ReactNode;
    defaultOpen?: boolean;
}

export const ModalSidebar: FC<ModalSidebarProps> = (props) => {
    const { className, children, defaultOpen, trigger } = props;
    const [isOpen, setIsOpen] = useState(defaultOpen);
    const location = useLocation();

    useEffect(() => {
        setIsOpen(false);
    }, [location.key]);

    useEffect(() => {
        if (defaultOpen) {
            setIsOpen(true);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <ButtonContext.Provider value={{ onPress: () => setIsOpen(true) }}>
            {trigger}
            <ModalOverlay
                isOpen={isOpen}
                onOpenChange={setIsOpen}
                isDismissable
                className={classNames(cls.overlay, {}, [])}
            >
                <AModal className={classNames(cls.modal, {}, [className])}>
                    <Dialog aria-label="modal" className={cls.dialog}>
                        {children}
                    </Dialog>
                </AModal>
            </ModalOverlay>
        </ButtonContext.Provider>
    );
};
