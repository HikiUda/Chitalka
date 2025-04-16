import { FC, ReactNode } from 'react';
import { classNames } from '@packages/model/src/lib/helpers/classNames';
import { Modal } from '@packages/ui/src/shared/Modal';
import { MangaIdType } from '@packages/model/src/entities/manga';
import { useQuery } from '@tanstack/react-query';
import { UserDataApi } from '@packages/model/src/api/auth';
import { ButtonContext } from '@packages/ui/src/shared/Button';
import { ToastQueue } from '@packages/ui/src/shared/Toast';
import { isMobile } from 'react-device-detect';
import { RateModalContent } from '../RateModalContent';
import cls from './RateModal.module.scss';

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
