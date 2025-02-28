import { FC } from 'react';
import { Button, Dialog, DialogTrigger, Modal, ModalOverlay } from 'react-aria-components';
import cls from './Drawer.module.scss';
interface DrawerProps {
    className?: string;
}

export const Drawer: FC<DrawerProps> = (props) => {
    const { className } = props;

    const btn = <Button>Sign up…</Button>;
    const btn2 = <Button slot="close">Submit</Button>;

    return (
        <DialogTrigger>
            {btn}
            <ModalOverlay isDismissable className={cls.overlay}>
                <Modal style={{ maxWidth: 400 }} className={cls.modal}>
                    <Dialog>{btn2}</Dialog>
                </Modal>
            </ModalOverlay>
        </DialogTrigger>
    );
};
