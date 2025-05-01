import { FC } from 'react';
import { classNames } from '@packages/model/src/lib/helpers/classNames';
import { HStack } from '@packages/ui/src/shared/Stack';
import { Button } from '@packages/ui/src/shared/Button';
import { MangaIdType } from '@packages/model/src/entities/manga';
import ArrowSvg from '@packages/ui/src/assets/icon/common/sliderArrow.svg';
import { Icon } from '@packages/ui/src/shared/Icon';
import BurgerSvg from '@packages/ui/src/assets/icon/common/numberList.svg';
import { isMobile } from 'react-device-detect';
import { MangaChaptersModal } from '../MangaChaptersModal/MangaChaptersModal';
import cls from './ChaptersNavigation.module.scss';

interface ChaptersNavigationProps {
    className?: string;
    mangaId: MangaIdType;
}

export const ChaptersNavigation: FC<ChaptersNavigationProps> = (props) => {
    const { className, mangaId } = props;

    return (
        <HStack className={classNames(cls.ChaptersNavigation, {}, [className])}>
            <Button color="none" className={cls.rotate} theme="clear" noHover>
                <Icon Svg={ArrowSvg} size={40} />
            </Button>
            <MangaChaptersModal
                mangaId={mangaId}
                trigger={
                    <Button color="none" theme="clear" noHover>
                        {isMobile ? <Icon Svg={BurgerSvg} size={40} /> : `${1} том ${2} глава`}
                    </Button>
                }
            />
            <Button color="none" theme="clear" noHover>
                <Icon Svg={ArrowSvg} size={40} />
            </Button>
        </HStack>
    );
};
