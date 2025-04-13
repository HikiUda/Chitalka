import { FC, useCallback, useState } from 'react';
import { useKeyBoardEvent } from '@packages/model/src/lib/hooks/useKeyBoardEvent';
import { Button } from '@packages/ui/src/shared/Button';
import { getFlex, HStack, VStack } from '@packages/ui/src/shared/Stack';
import { Heading } from '@packages/ui/src/shared/Heading';
import { Input } from '@packages/ui/src/shared/Input';
import { useRegistrationQuery, useLoginQuery } from '@packages/model/src/api/auth';
import { Loader } from '@packages/ui/src/shared/Loader';
import { LoginFromType, validateLoginForm } from '../../model/loginFromScheme';

interface AuthContentProps {
    className?: string;
}
//TODO i18next error
const AuthContent: FC<AuthContentProps> = (props) => {
    const { className } = props;
    const [isLogin, setIsLogin] = useState(true);
    const [showError, setShowError] = useState(false);
    const [loginForm, setLoginFrom] = useState<LoginFromType>({ login: '', password: '' });

    const { login, isPending: loginPending, error: loginError } = useLoginQuery();
    const { registration, isPending: regPending, error: regError } = useRegistrationQuery();

    const handleAuth = useCallback(() => {
        if (validateLoginForm(loginForm)) {
            setShowError(true);
            return;
        }
        if (isLogin) {
            login(loginForm);
        } else {
            registration(loginForm);
        }
    }, [isLogin, login, loginForm, registration]);

    useKeyBoardEvent(handleAuth, 'Enter');

    const isSend = regPending || loginPending;

    const errors = showError ? validateLoginForm(loginForm)?.fieldErrors : undefined;
    return (
        <VStack max className={className}>
            <Heading HeadingTag="h2">{isLogin ? 'Вход' : 'Регестрация'}</Heading>
            <VStack max>
                <Input
                    disabled={isSend}
                    value={loginForm.login}
                    onChange={(v) => setLoginFrom((prev) => ({ ...prev, login: v }))}
                    maxWidth
                    border="primaryBorder"
                    placeholder="Логин"
                />
                {errors?.login}
                <Input
                    disabled={isSend}
                    value={loginForm.password}
                    onChange={(v) => setLoginFrom((prev) => ({ ...prev, password: v }))}
                    maxWidth
                    border="primaryBorder"
                    type="password"
                    placeholder="Пароль"
                />
                {errors?.password}
                {loginError?.message || regError?.message}
            </VStack>

            <HStack max justify="end">
                <Button
                    isDisabled={isSend}
                    theme="clear"
                    noHover
                    onPress={() => setIsLogin((prev) => !prev)}
                >
                    {isLogin ? 'Зарегестрироваться' : 'Войти'}
                </Button>
                <Button isDisabled={isSend} onPress={handleAuth} theme="fill" className={getFlex()}>
                    {isLogin ? 'Войти' : 'Зарегестрироваться'}
                    {isSend && <Loader width={22} />}
                </Button>
            </HStack>
        </VStack>
    );
};
export default AuthContent;
