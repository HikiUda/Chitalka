import { FC } from 'react';
import { Sidebar } from '../Sidebar/Sidebar';
import cls from './SidebarModal.module.scss';
import { classNames } from '@/shared/lib/helpers/classNames';
import { Modal } from '@/shared/ui/Modal';
import { Button } from '@/shared/ui/Button';
import { MangaType } from '@/shared/api/deprecated/individualManga';

interface SidebarModalProps {
    className?: string;
    manga: MangaType;
}

export const SidebarModal: FC<SidebarModalProps> = (props) => {
    const { className, manga } = props;

    return (
        <Modal
            trigger={
                <Button theme="fill" className={cls.btn}>
                    i
                </Button>
            }
            className={classNames(cls.SidebarModal, {}, [className])}
        >
            <Sidebar manga={manga} />
        </Modal>
    );
};
