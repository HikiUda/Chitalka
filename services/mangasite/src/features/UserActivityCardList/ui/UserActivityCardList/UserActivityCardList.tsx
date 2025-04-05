import { FC } from 'react';
import { classNames } from '@packages/model/src/lib/helpers/classNames';
import { Heading } from '@packages/ui/src/shared/Heading';
import cls from './UserActivityCardList.module.scss';
import { UserActivityCard } from '@/entities/UserCard';

interface UserActivityCardListProps {
    className?: string;
}

export const UserActivityCardList: FC<UserActivityCardListProps> = (props) => {
    const { className } = props;

    return (
        <div className={classNames('', {}, [className])}>
            <Heading className={cls.title} HeadingTag="h2" color="primary">
                Топ активных пользователей
            </Heading>
            <div className={cls.cardList}>
                {Array(10)
                    .fill(0)
                    .map((user, ind) => (
                        <UserActivityCard key={ind} />
                    ))}
            </div>
        </div>
    );
};
