import { FC, ReactNode } from 'react';
import { isMobile } from 'react-device-detect';
import { toast } from 'sonner';
import { StarIcon } from 'lucide-react';
import { useGetRate } from './useGetRate';
import { useSetRate } from './useSetRate';
import { useSession } from '@/shared/api/session';
import { MangaIdType } from '@/shared/kernel/manga';
import { cn } from '@/shared/lib/css';
import { Button, ButtonContext } from '@/shared/ui/kit/button';
import { Dialog, DialogContent, DialogTrigger } from '@/shared/ui/kit/dialog';

interface RateModalProps {
    className?: string;
    mangaId: MangaIdType;
}

const RateButtonWrapper = ({ children }: { children: ReactNode }) => {
    const { isUserAuth } = useSession();

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

export const RateModal: FC<RateModalProps> = (props) => {
    const { className, mangaId } = props;
    const { isUserAuth } = useSession();
    const { data, isLoading } = useGetRate(mangaId);
    const { getOptimisticRate } = useSetRate(mangaId);

    const currentRate = getOptimisticRate(data?.rate);

    return (
        <Dialog>
            <RateButtonWrapper>
                <Button
                    disabled={isUserAuth && isLoading}
                    className={cn(`${currentRate && 'text-md'} h-auto py-1 items-start`, className)}
                >
                    {!currentRate ? (
                        <>
                            <StarIcon className="stroke-primary-foreground" /> Оценить
                        </>
                    ) : (
                        <>
                            {currentRate}
                            <StarIcon className="stroke-primary-foreground fill-primary-foreground" />
                        </>
                    )}
                </Button>
            </RateButtonWrapper>
            <DialogContent className="max-w-130" verticalPosition={isMobile ? 'bottom' : 'center'}>
                lol
            </DialogContent>
        </Dialog>
    );
};
