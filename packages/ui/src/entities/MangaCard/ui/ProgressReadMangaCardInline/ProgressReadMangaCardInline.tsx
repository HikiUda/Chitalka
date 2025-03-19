import { memo } from 'react';
import { CardBlock } from '@ui/shared/CardBlock';
import { ProgressBar } from '@ui/shared/ProgressBar';
import { classNames } from '@packages/model/src/lib/classNames';
import { Button } from '@ui/shared/Button';
import CrossoutSvg from '@ui/assets/icon/common/crossout.svg';
import { Icon } from '@ui/shared/Icon/Icon';
import { MangaCardInline } from '../MangaCardInline/MangaCardInline';
import cls from './ProgressReadMangaCardInline.module.scss';

interface ProgressReadMangaCardInlineProps {
    className?: string;
}

export const ProgressReadMangaCardInline = memo((props: ProgressReadMangaCardInlineProps) => {
    const { className } = props;
    return (
        <CardBlock className={classNames(cls.ProgressReadMangaCardInline)} backgroundColor="bg">
            <MangaCardInline title="Title" to="/mangasite">
                <ProgressBar className={cls.bar} value={30} maxValue={45} valueLabel="30 of 45" />
            </MangaCardInline>
            <Button className={cls.deleteBtn} theme="fill" color="block" noHover>
                <Icon width={12} height={12} Svg={CrossoutSvg} />
            </Button>
        </CardBlock>
    );
});
