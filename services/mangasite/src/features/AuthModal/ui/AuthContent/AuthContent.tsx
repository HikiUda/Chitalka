import { FC, useCallback, useState } from 'react';
import { useKeyBoardEvent } from '@packages/model/src/lib/hooks/useKeyBoardEvent';
import { Button } from '@packages/ui/src/shared/Button';
import { HStack, VStack } from '@packages/ui/src/shared/Stack';
import { Heading } from '@packages/ui/src/shared/Heading';
import { Input } from '@packages/ui/src/shared/Input';
import { useRegistrationQuery, useLoginQuery } from '@packages/model/src/api/auth';
import { LoginFromType, validateLoginForm } from '../../model/loginFromScheme';

interface AuthContentProps {
    className?: string;
}

const AuthContent: FC<AuthContentProps> = (props) => {
    const { className } = props;
    const [isLogin, setIsLogin] = useState(true);
    const [isError, setIsError] = useState(false);
    const [loginForm, setLoginFrom] = useState<LoginFromType>({ login: '', password: '' });

    const { login } = useLoginQuery();
    const { registration } = useRegistrationQuery();

    const handleAuth = useCallback(() => {
        if (validateLoginForm(loginForm)) {
            setIsError(true);
            return;
        }
        if (isLogin) {
            login(loginForm);
        } else {
            registration(loginForm);
        }
    }, [isLogin, login, loginForm, registration]);

    useKeyBoardEvent(handleAuth, 'Enter');

    const errors = isError ? validateLoginForm(loginForm)?.fieldErrors : undefined;
    return (
        <VStack max className={className}>
            <Heading HeadingTag="h2">{isLogin ? 'Вход' : 'Регестрация'}</Heading>
            <VStack max>
                <Input
                    value={loginForm.login}
                    onChange={(v) => setLoginFrom((prev) => ({ ...prev, login: v }))}
                    maxWidth
                    border="primaryBorder"
                    placeholder="Логин"
                />
                {errors?.login}
                <Input
                    value={loginForm.password}
                    onChange={(v) => setLoginFrom((prev) => ({ ...prev, password: v }))}
                    maxWidth
                    border="primaryBorder"
                    type="password"
                    placeholder="Пароль"
                />
                {errors?.password}
            </VStack>

            <HStack max justify="end">
                <Button theme="clear" noHover onPress={() => setIsLogin((prev) => !prev)}>
                    {isLogin ? 'Зарегестрироваться' : 'Войти'}
                </Button>
                <Button onPress={handleAuth} theme="fill">
                    {isLogin ? 'Войти' : 'Зарегестрироваться'}
                </Button>
            </HStack>
        </VStack>
    );
};
export default AuthContent;
