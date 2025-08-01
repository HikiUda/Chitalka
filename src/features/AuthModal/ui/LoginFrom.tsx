/* eslint-disable @typescript-eslint/no-explicit-any */
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useLogin } from '../model/useLogin';
import { useI18n } from '../model/i18n';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/shared/ui/kit/form';
import { Input } from '@/shared/ui/kit/input';
import { Button } from '@/shared/ui/kit/button';
import { cn } from '@/shared/lib/css';

type LoginFromProps = {
    className?: string;
};

const loginSchema = z.object({
    login: z.string({ message: 'error.loginRequired' }).min(1, { message: 'error.loginTooShort' }),
    password: z
        .string({ message: 'error.passwordRequired' })
        .min(8, { message: 'error.passwordTooShort' }),
});

export const LoginFrom = (props: LoginFromProps) => {
    const { className } = props;
    const t = useI18n();

    const form = useForm({ resolver: zodResolver(loginSchema) });
    const { login, isPending, error } = useLogin();
    const onSubmit = form.handleSubmit(login);

    return (
        <Form {...form}>
            <form className={cn('flex flex-col gap-2', className)} onSubmit={onSubmit}>
                <FormField
                    control={form.control}
                    name="login"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>{t('login')}</FormLabel>
                            <FormControl>
                                <Input placeholder="Username" {...field} />
                            </FormControl>
                            <FormMessage renderError={(error) => t(error as any)} />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>{t('password')}</FormLabel>
                            <FormControl>
                                <Input type="password" placeholder="********" {...field} />
                            </FormControl>
                            <FormMessage renderError={(error) => t(error as any)} />
                        </FormItem>
                    )}
                />
                {error && (
                    <span className="text-destructive text-sm">{t(error.message as any)}</span>
                )}
                <Button disabled={isPending} type="submit">
                    {t('signIn')}
                </Button>
            </form>
        </Form>
    );
};
