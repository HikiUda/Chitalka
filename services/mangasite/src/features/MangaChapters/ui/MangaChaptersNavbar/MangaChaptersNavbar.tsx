import { memo } from 'react';
import { classNames } from '@packages/model/src/lib/helpers/classNames';
import { getFlex, HStack } from '@packages/ui/src/shared/Stack';
import { Button } from '@packages/ui/src/shared/Button';
import SortArrowSvg from '@packages/ui/src/assets/icon/common/sortArrow.svg';
import { Icon } from '@packages/ui/src/shared/Icon';
import { Popover } from '@packages/ui/src/shared/Popover';
import { ToChapterLink } from '../ToChapterLink/ToChapterLink';
import cls from './MangaChaptersNavbar.module.scss';

interface MangaChaptersNavbarProps {
    className?: string;
    changeOrder?: () => void;
}

export const MangaChaptersNavbar = memo((props: MangaChaptersNavbarProps) => {
    const { className, changeOrder } = props;

    return (
        <HStack
            max
            justify="between"
            className={classNames(cls.MangaChaptersNavbar, {}, [className])}
        >
            <Button
                onPress={changeOrder}
                className={classNames(cls.orderBtn, {}, [getFlex()])}
                theme="outline"
            >
                <Icon Svg={SortArrowSvg} width={10} height={14} />
                сортировать
            </Button>

            <Popover className={cls.toChapterPopover} button={<Button>open</Button>}>
                <HStack>
                    <ToChapterLink chapter={1} />
                    <ToChapterLink chapter={50} />
                    <ToChapterLink chapter={90} />
                </HStack>
            </Popover>
        </HStack>
    );
});
