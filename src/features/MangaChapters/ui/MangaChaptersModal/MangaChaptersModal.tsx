import { FC, ReactNode } from 'react';
import { MangaChaptersAsync } from '../MangaChapters/MangaChapters.async';
import cls from './MangaChaptersModal.module.scss';
import { classNames } from '@/shared/lib/helpers/classNames';
import { ModalSidebar } from '@/shared/deprecate-ui/ModalSidebar';
import { MangaIdType } from '@/shared/kernel/manga';
import { Button } from '@/shared/deprecate-ui/Button';
import { Icon } from '@/shared/deprecate-ui/Icon';
import ArrowSvg from '@/shared/assets/icon/common/arrow.svg?react';
import { getFlex } from '@/shared/deprecate-ui/Stack';

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
