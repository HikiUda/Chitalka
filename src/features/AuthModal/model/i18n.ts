import { createI18nModule } from '@/shared/kernel/i18n';

export const { useI18n } = createI18nModule({
    login: { ru: 'Войти', en: 'Log in' },
    password: { ru: 'Пароль', en: 'Password' },
    confirmPassword: { ru: 'Подтвердите пароль', en: 'Confirm password' },
    signIn: { ru: 'Вход', en: 'Sign in' },
    signUpHeader: { ru: 'Регистрация', en: 'Sign up' },
    signUp: { ru: 'Зарегистрироваться', en: 'Sign up' },
    noAccount: { ru: 'Нет аккаунта?', en: "Don't have an account?" },
    hasAccount: { ru: 'Есть аккаунт?', en: 'Already have an account?' },
    error: {
        loginRequired: { ru: 'Логин обязателен', en: 'Login is required' },
        loginTooShort: {
            ru: 'Логин должен быть не менее 1 символа',
            en: 'Login must be at least 1 character',
        },
        passwordRequired: { ru: 'Пароль обязателен', en: 'Password is required' },
        passwordTooShort: {
            ru: 'Пароль должен быть не менее 8 символов',
            en: 'Password must be at least 8 characters',
        },
        passwordsDontMatch: { ru: 'Пароли не совпадают', en: 'Passwords do not match' },
    },
});
