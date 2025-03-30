import { FC, ReactNode, useEffect, useState } from 'react';
import { Dialog, Modal, ModalOverlay, ButtonContext } from 'react-aria-components';

import {
    animate,
    AnimatePresence,
    motion,
    useMotionTemplate,
    useMotionValue,
    useTransform,
} from 'framer-motion';
import { useLocation } from 'react-router-dom';
import cls from './Drawer.module.scss';

interface DrawerProps {
    children: ReactNode;
    trigger?: ReactNode;
}

const MotionModal = motion.create(Modal);
const MotionModalOverlay = motion.create(ModalOverlay);

const inertiaTransition = {
    type: 'inertia' as const,
    bounceStiffness: 300,
    bounceDamping: 40,
    timeConstant: 300,
};

const staticTransition = {
    duration: 0.5,
    ease: [0.32, 0.72, 0, 1],
};
const SHEET_MARGIN = 34;

export const Drawer: FC<DrawerProps> = (props) => {
    const { children, trigger } = props;
    const [isOpen, setOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setOpen(false);
    }, [location.pathname]);
    const h = window.innerHeight - SHEET_MARGIN;
    const y = useMotionValue(h);
    const bgOpacity = useTransform(y, [0, h], [0.4, 0]);
    const bg = useMotionTemplate`rgba(0, 0, 0, ${bgOpacity})`;
    return (
        <ButtonContext.Provider value={{ onPress: () => setOpen(true) }}>
            {trigger}
            <AnimatePresence>
                {isOpen && (
                    <MotionModalOverlay
                        isOpen
                        onOpenChange={setOpen}
                        isDismissable
                        className={cls.overlay}
                        style={{ backgroundColor: bg }}
                    >
                        <MotionModal
                            className={cls.modal}
                            initial={{ y: h }}
                            animate={{ y: 0 }}
                            exit={{ y: h }}
                            transition={staticTransition}
                            style={{
                                y,
                                top: SHEET_MARGIN,
                                paddingBottom: window.screen.height,
                            }}
                            drag="y"
                            dragConstraints={{ top: 0 }}
                            onDragEnd={(e, { offset, velocity }) => {
                                if (offset.y > window.innerHeight * 0.75 || velocity.y > 10) {
                                    setOpen(false);
                                } else {
                                    animate(y, 0, { ...inertiaTransition, min: 0, max: 0 });
                                }
                            }}
                        >
                            <Dialog aria-label="drawer">
                                <motion.div
                                    className={cls.sheetHand}
                                    whileTap={{ opacity: 0.7, scale: 0.9 }}
                                />
                                {children}
                            </Dialog>
                        </MotionModal>
                    </MotionModalOverlay>
                )}
            </AnimatePresence>
        </ButtonContext.Provider>
    );
};
