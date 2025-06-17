import { FC, useState } from 'react';
import { lazyNamed } from '@/shared/lib/helpers/lazyNamed';
import { Button } from '@/shared/ui/kit/button';
import {
    Dialog,
    DialogBody,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/shared/ui/kit/dialog';
import { Heading } from '@/shared/ui/kit/heading';

const LoginForm = lazyNamed(() => import('./LoginFrom'), 'LoginFrom');
const RegistrationForm = lazyNamed(() => import('./RegistrationForm'), 'RegistrationForm');

interface AuthModalProps {
    className?: string;
}

export const AuthModal: FC<AuthModalProps> = (props) => {
    const { className } = props;
    const [isLogin, setIsLogin] = useState(true);
    return (
        <Dialog>
            <DialogTrigger asChild className={className}>
                <Button variant="ghost" className="text-md hover:bg-primary/50">
                    Войти
                </Button>
            </DialogTrigger>
            <DialogBody>
                <DialogHeader>
                    <DialogTitle asChild>
                        <Heading variant="h2">{isLogin ? 'Вход' : 'Регестрация'}</Heading>
                    </DialogTitle>
                </DialogHeader>
                {isLogin ? <LoginForm /> : <RegistrationForm />}
                <Button onClick={() => setIsLogin((prev) => !prev)} variant="ghost">
                    {isLogin ? 'Нет аккаунта?' : 'Есть аккаунт?'}
                </Button>
            </DialogBody>
        </Dialog>
    );
};
