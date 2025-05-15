import { memo } from 'react';
import cls from './UserActivityCard.module.scss';
import { classNames } from '@/shared/lib/helpers/classNames';

import { HStack } from '@/shared/deprecate-ui/Stack';
import { AppAdaptiveImage } from '@/shared/deprecate-ui/AppAdaptiveImage';
import { ProgressBar } from '@/shared/deprecate-ui/ProgressBar';

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
