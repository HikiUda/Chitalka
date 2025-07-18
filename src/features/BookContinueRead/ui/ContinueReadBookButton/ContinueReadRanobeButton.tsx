import { useRanobeGetContinueRead } from '../../model/useRanobeGetContinueRead';
import { ContinueReadBookButton } from './ContinueReadBookButton';
import { BookId } from '@/shared/kernel/book/book';

type ContinueReadRanobeButtonProps = {
    className?: string;
    ranobeId: BookId;
};

export const ContinueReadRanobeButton = (props: ContinueReadRanobeButtonProps) => {
    const { className, ranobeId } = props;
    const data = useRanobeGetContinueRead(ranobeId);

    return <ContinueReadBookButton className={className} {...data} />;
};
