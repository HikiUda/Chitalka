import { DialogTrigger } from '@radix-ui/react-dialog';
import { ReactNode } from 'react';
import { toast } from 'sonner';
import { StarIcon } from 'lucide-react';
import { Button, ButtonContext } from '@/shared/ui/kit/button';
import { useSession } from '@/shared/kernel/session';
import { cn } from '@/shared/lib/css';

const RateButtonWrapper = ({
    children,
    isUserAuth,
}: {
    children: ReactNode;
    isUserAuth: boolean;
}) => {
    if (isUserAuth) return <DialogTrigger asChild>{children}</DialogTrigger>;
    //TODO auth button in toast
    return (
        <ButtonContext.Provider
            value={{
                onClick: () => toast.error('Сначала необходимо войти или зарегестрироваться'),
            }}
        >
            {children}
        </ButtonContext.Provider>
    );
};

type RateModalTriggerButtonProps = {
    className?: string;
    isLoading: boolean;
    rate: number | null | undefined;
};

export const RateModalTriggerButton = (props: RateModalTriggerButtonProps) => {
    const { className, isLoading, rate } = props;
    const { isUserAuth } = useSession();
    return (
        <RateButtonWrapper isUserAuth={isUserAuth}>
            <Button
                disabled={isUserAuth && isLoading}
                className={cn(`${rate && 'text-lg'} py-1`, className)}
            >
                {!!rate && rate}
                <StarIcon
                    className={cn('stroke-primary-foreground', {
                        'fill-primary-foreground pb-[0.5px]': rate,
                    })}
                />
                {!rate && 'Оценить'}
            </Button>
        </RateButtonWrapper>
    );
};
