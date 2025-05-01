import { FC, ReactNode } from 'react';
import { classNames } from '@packages/model/src/lib/helpers/classNames';
import { ModalSidebar } from '@packages/ui/src/shared/ModalSidebar';
import { MangaIdType } from '@packages/model/src/entities/manga';
import { Button } from '@packages/ui/src/shared/Button';
import { Icon } from '@packages/ui/src/shared/Icon';
import ArrowSvg from '@packages/ui/src/assets/icon/common/arrow.svg';
import { getFlex } from '@packages/ui/src/shared/Stack';
import { MangaChaptersAsync } from '../MangaChapters/MangaChapters.async';
import cls from './MangaChaptersModal.module.scss';

interface MangaChaptersModalProps {
    className?: string;
    mangaId: MangaIdType;
    trigger: ReactNode;
}

export const MangaChaptersModal: FC<MangaChaptersModalProps> = (props) => {
    const { className, mangaId, trigger } = props;

    return (
        <ModalSidebar
            trigger={trigger}
            className={classNames(cls.MangaChaptersModal, {}, [className])}
        >
            <Button
                className={classNames(cls.btn, {}, [getFlex({ gap: '16' })])}
                theme="clear"
                noHover
                slot="close"
            >
                <Icon className={cls.rotate} Svg={ArrowSvg} width={25} height={20} /> Список Глав
            </Button>

            <MangaChaptersAsync mangaId={mangaId} />
        </ModalSidebar>
    );
};
