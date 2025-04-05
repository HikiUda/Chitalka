import { memo, ReactNode } from 'react';
import { classNames } from '@packages/model/src/lib/classNames';

import { HStack, VStack } from '@packages/ui/src/shared/Stack';
import { Avatar } from '@packages/ui/src/shared/Avatar';
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
