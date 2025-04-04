import { FC, useCallback, useEffect, useState } from 'react';
import { classNames } from '@packages/model/src/lib/helpers/classNames';
import { Button } from '@packages/ui/src/shared/Button';
import { HStack, VStack } from '@packages/ui/src/shared/Stack';
import { Heading } from '@packages/ui/src/shared/Heading';
import { Input } from '@packages/ui/src/shared/Input';
import { useRegistrationQuery, useLoginQuery } from '@packages/model/src/api/auth';
import cls from './AuthContent.module.scss';

interface AuthContentProps {
    className?: string;
}

const AuthContent: FC<AuthContentProps> = (props) => {
    const { className } = props;
    const [authType, setAuthType] = useState<'login' | 'registration'>('login');
    // TODO throw zustand
    const [userLogin, setUserLogin] = useState('');
    const [password, setPassword] = useState('');

    const { login } = useLoginQuery();
    const { registration } = useRegistrationQuery();

    const handleAuth = useCallback(() => {
        //TODO Validation
        if (authType === 'login') {
            login({ login: userLogin, password });
        } else {
            registration({ login: userLogin, password });
        }
    }, [authType, login, password, registration, userLogin]);

    const handleAuthEnter = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === 'Enter') {
                handleAuth();
            }
        },
        [handleAuth],
    );

    useEffect(() => {
        document.addEventListener('keydown', handleAuthEnter);
        return () => {
            document.removeEventListener('keydown', handleAuthEnter);
        };
    }, [handleAuthEnter]);

    return (
        <VStack max className={classNames(cls.AuthContent, {}, [className])}>
            <Heading HeadingTag="h2">{authType ? 'Вход' : 'Регестрация'}</Heading>
            <VStack max>
                <Input
                    value={userLogin}
                    onChange={setUserLogin}
                    maxWidth
                    border="primaryBorder"
                    placeholder="Логин"
                />
                <Input
                    value={password}
                    onChange={setPassword}
                    maxWidth
                    border="primaryBorder"
                    type="password"
                    placeholder="Пароль"
                />
            </VStack>
            <HStack max justify="end">
                <Button
                    theme="clear"
                    noHover
                    onPress={() =>
                        setAuthType((prev) => (prev === 'login' ? 'registration' : 'login'))
                    }
                >
                    {authType === 'login' ? 'Зарегестрироваться' : 'Войти'}
                </Button>
                <Button onPress={handleAuth} theme="fill">
                    {authType === 'login' ? 'Войти' : 'Зарегестрироваться'}
                </Button>
            </HStack>
        </VStack>
    );
};
export default AuthContent;
