import { memo, ReactNode } from 'react';
import { classNames } from '@/shared/lib/helpers/classNames';

import { HStack, VStack } from '@/shared/ui/Stack';
import { Avatar } from '@/shared/ui/Avatar';
import cls from './Comment.module.scss';

interface CommentProps {
    className?: string;
    features?: ReactNode;
}

export const Comment = memo((props: CommentProps) => {
    const { className, features } = props;

    return (
        <VStack className={classNames(cls.Comment, {}, [className])}>
            <HStack>
                <Avatar />
                <span>nick</span>
                <span>9 day ago</span>
            </HStack>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, officia quos
                libero minima ducimus, voluptates error tempore et laudantium, facere quod! Atque,
                sunt! Cupiditate, ipsa!
            </p>
            {features}
        </VStack>
    );
});
