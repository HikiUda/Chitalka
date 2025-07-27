import { memo } from 'react';
import { useRanobeGetContinueRead } from '../../model/useRanobeGetContinueRead';
import { BookContinueReadButton } from './BookContinueReadButton';
import { BookId } from '@/shared/kernel/book/book';

type RanobeContinueReadButtonProps = {
    className?: string;
    ranobeId: BookId;
};

export const RanobeContinueReadButton = memo((props: RanobeContinueReadButtonProps) => {
    const { className, ranobeId } = props;
    const data = useRanobeGetContinueRead(ranobeId);

    return <BookContinueReadButton className={className} {...data} />;
});
RanobeContinueReadButton.displayName = 'RanobeContinueReadButton';
