import { FC } from 'react';
import { BasicInfo } from '../model/useBookBasicInfo';
import { BookMetaLinks } from './BookMetaLinks';
import { cn } from '@/shared/lib/css';

interface BookBasicInfoProps {
    className?: string;
    basicInfo: BasicInfo[];
}

export const BookBasicInfo: FC<BookBasicInfoProps> = (props) => {
    const { className, basicInfo } = props;
    return (
        <div className={cn('flex justify-around gap-2 bg-muted p-2', className)}>
            {basicInfo.map((info) => (
                <BookMetaLinks
                    key={info.title}
                    title={info.title}
                    links={info.value}
                    className=""
                />
            ))}
        </div>
    );
};
