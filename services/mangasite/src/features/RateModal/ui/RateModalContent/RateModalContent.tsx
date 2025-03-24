import { FC } from 'react';
import { classNames } from '@packages/model/src/lib/classNames';
import cls from './RateModalContent.module.scss';

interface RateModalContentProps {
    className?: string;
}

const RateModalContent: FC<RateModalContentProps> = (props) => {
    const { className } = props;

    return <div className={classNames(cls.RateModalContent, {}, [className])}>fffff</div>;
};
export default RateModalContent;
