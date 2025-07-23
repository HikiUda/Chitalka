import { BasicInfoItem } from '../model/useBookBasicInfo/useBookBasicInfo';
import { BookMetaLinks } from './BookMetaLinks';
import { cn } from '@/shared/lib/css';

interface BookBasicInfoProps {
    className?: string;
    basicInfo: BasicInfoItem[];
}

export const BookBasicInfo = (props: BookBasicInfoProps) => {
    const { className, basicInfo } = props;
    return (
        <div className={cn('flex justify-around gap-2 p-2 bg-secondary', className)}>
            {basicInfo.map((info) => (
                <BookMetaLinks key={info.title} title={info.title} links={info.value} />
            ))}
        </div>
    );
};
