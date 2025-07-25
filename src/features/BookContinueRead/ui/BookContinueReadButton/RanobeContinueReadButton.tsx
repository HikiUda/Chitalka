import { useRanobeGetContinueRead } from '../../model/useRanobeGetContinueRead';
import { BookContinueReadButton } from './BookContinueReadButton';
import { BookId } from '@/shared/kernel/book/book';

type RanobeContinueReadButtonProps = {
    className?: string;
    ranobeId: BookId;
};

export const RanobeContinueReadButton = (props: RanobeContinueReadButtonProps) => {
    const { className, ranobeId } = props;
    const data = useRanobeGetContinueRead(ranobeId);

    return <BookContinueReadButton className={className} {...data} />;
};
