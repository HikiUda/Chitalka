import { Suspense, useState } from 'react';
import { useI18n } from '../model/i18n';
import { lazyNamed } from '@/shared/lib/helpers/lazyNamed';
import { Button } from '@/shared/ui/kit/button';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/shared/ui/kit/dialog';
import { Heading } from '@/shared/ui/kit/heading';
import { Loader } from '@/shared/ui/kit/loader';

const LoginForm = lazyNamed(() => import('./LoginFrom'), 'LoginFrom');
const RegistrationForm = lazyNamed(() => import('./RegistrationForm'), 'RegistrationForm');

type AuthModalProps = {
    className?: string;
};

export const AuthModal = (props: AuthModalProps) => {
    const { className } = props;
    const [isLogin, setIsLogin] = useState(true);
    const t = useI18n();
    return (
        <Dialog>
            <DialogTrigger asChild className={className}>
                <Button variant="ghost" className="text-md hover:bg-primary/50">
                    {t('login')}
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle asChild>
                        <Heading variant="h2">{isLogin ? t('signIn') : t('signUpHeader')}</Heading>
                    </DialogTitle>
                </DialogHeader>
                <Suspense fallback={<Loader className="mx-auto mt-2" variant="flower" />}>
                    {isLogin ? <LoginForm /> : <RegistrationForm />}
                    <Button onClick={() => setIsLogin((prev) => !prev)} variant="ghost">
                        {isLogin ? t('noAccount') : t('hasAccount')}
                    </Button>
                </Suspense>
            </DialogContent>
        </Dialog>
    );
};
