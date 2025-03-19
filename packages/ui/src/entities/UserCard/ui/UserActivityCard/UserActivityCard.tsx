import { memo } from 'react';
import { classNames } from '@packages/model/src/lib/classNames';
import { AppAdaptiveImage } from '@ui/shared/AppAdaptiveImage';
import { HStack } from '@ui/shared/Stack';
import { ProgressBar } from '@ui/shared/ProgressBar';
import cls from './UserActivityCard.module.scss';

interface UserActivityCardProps {
    className?: string;
}

export const UserActivityCard = memo((props: UserActivityCardProps) => {
    const { className } = props;

    return (
        <HStack className={classNames(cls.UserActivityCard, {}, [className])}>
            <AppAdaptiveImage className={cls.avatar} />
            <div className={cls.info}>
                <HStack justify="between" about="center" className={cls.title}>
                    <span>Git</span>
                    <span>#1</span>
                </HStack>
                <ProgressBar label="5 level" valueLabel="88/156" value={88} maxValue={156} />
            </div>
        </HStack>
    );
});
