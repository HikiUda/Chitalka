import { AppAdaptiveImage } from '@packages/ui/src/shared/AppAdaptiveImage';
import ImageSvg from '@packages/ui/src/assets/icon/common/image.svg';
import { Icon } from '@packages/ui/src/shared/Icon';
import { Button } from '@packages/ui/src/shared/Button';
import { Modal } from '@packages/ui/src/shared/Modal';
import { CoverModalContent } from '../CoverModalContent';
import cls from './Cover.module.scss';

interface CoverProps {
    className?: string;
    cover: string | null;
    mangaId: number;
}

export const Cover = (props: CoverProps) => {
    const { className, cover, mangaId } = props;
    const button = (
        <Button className={className} theme="clear" noHover>
            <AppAdaptiveImage img={cover} className={cls.Cover}>
                <div className={cls.moreCover}>
                    <Icon Svg={ImageSvg} width={20} height={20} />
                </div>
            </AppAdaptiveImage>
        </Button>
    );

    return (
        <Modal className={cls.modal} trigger={button}>
            <CoverModalContent mangaId={mangaId} />
        </Modal>
    );
};
