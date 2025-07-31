import { DialogTrigger } from '@radix-ui/react-dialog';
import { ReactNode } from 'react';
import { toast } from 'sonner';
import { StarIcon } from 'lucide-react';
import { Button, ButtonContext } from '@/shared/ui/kit/button';
import { useSession } from '@/shared/kernel/session';
import { cn } from '@/shared/lib/css';
import { createI18nModule } from '@/shared/kernel/i18n';

const { useI18n } = createI18nModule({
    notAuth: {
        ru: 'Сначала необходимо войти или зарегистрироваться',
        en: 'You need to log in or sign up first',
    },
    rate: {
        ru: 'Оценить',
        en: 'Rate',
    },
});

const RateButtonWrapper = ({
    children,
    isUserAuth,
}: {
    children: ReactNode;
    isUserAuth: boolean;
}) => {
    const t = useI18n();
    if (isUserAuth) return <DialogTrigger asChild>{children}</DialogTrigger>;
    //TODO auth button in toast
    return (
        <ButtonContext.Provider
            value={{
                onClick: () => toast.error(t('notAuth')),
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
    const t = useI18n();
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
                {!rate && t('rate')}
            </Button>
        </RateButtonWrapper>
    );
};
