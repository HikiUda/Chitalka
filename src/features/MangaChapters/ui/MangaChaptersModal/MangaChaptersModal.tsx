import { FC, ReactNode } from 'react';
import { classNames } from '@/shared/lib/helpers/classNames';
import { ModalSidebar } from '@/shared/ui/ModalSidebar';
import { MangaIdType } from '@/shared/kernel/manga';
import { Button } from '@/shared/ui/Button';
import { Icon } from '@/shared/ui/Icon';
import ArrowSvg from '@/shared/assets/icon/common/arrow.svg';
import { getFlex } from '@/shared/ui/Stack';
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
