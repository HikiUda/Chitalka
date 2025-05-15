import { FC, ReactNode } from 'react';
import { useQuery } from '@tanstack/react-query';
import { isMobile } from 'react-device-detect';
import { RateModalContent } from '../RateModalContent';
import cls from './RateModal.module.scss';
import { classNames } from '@/shared/lib/helpers/classNames';
import { Modal } from '@/shared/deprecate-ui/Modal';
import { MangaIdType } from '@/shared/kernel/manga';
import { UserDataApi } from '@/shared/api/deprecated/user';
import { ButtonContext } from '@/shared/deprecate-ui/Button';
import { ToastQueue } from '@/shared/deprecate-ui/Toast';

interface RateModalProps {
    className?: string;
    button?: ReactNode;
    mangaId: MangaIdType;
}

export const RateModal: FC<RateModalProps> = (props) => {
    const { className, button, mangaId } = props;

    const { data } = useQuery(UserDataApi.getUserDataQueryOptions());

    if (!data)
        return (
            <ButtonContext
                value={{
                    onPress: () =>
                        ToastQueue.add(
                            {
                                description: 'Вы не авторизованы!',
                            },
                            { timeout: 10000 },
                        ),
                }}
            >
                {button}
            </ButtonContext>
        );

    return (
        <Modal
            modalVerticalPosition={isMobile ? 'bottom' : 'center'}
            trigger={button}
            className={classNames(cls.RateModal, {}, [className])}
        >
            <RateModalContent mangaId={mangaId} />
        </Modal>
    );
};
