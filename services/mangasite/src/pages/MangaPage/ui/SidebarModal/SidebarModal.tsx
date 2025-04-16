import { FC } from 'react';
import { classNames } from '@packages/model/src/lib/helpers/classNames';
import { Modal } from '@packages/ui/src/shared/Modal';
import { Button } from '@packages/ui/src/shared/Button';
import { Sidebar } from '../Sidebar/Sidebar';
import cls from './SidebarModal.module.scss';
import { MangaType } from '@/shared/api/individualManga';

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
