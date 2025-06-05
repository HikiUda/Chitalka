import { FC } from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useLogin } from '../model/useLogin';
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

interface LoginFromProps {
    className?: string;
}

const loginSchema = z.object({
    login: z
        .string({ message: 'Логин обязателен' })
        .min(1, { message: 'Логин должен быть не менее 1 символа' }),
    password: z
        .string({ message: 'Пароль обязателен' })
        .min(8, { message: 'Пароль должен быть не менее 8 символов' }),
});

export const LoginFrom: FC<LoginFromProps> = (props) => {
    const { className } = props;

    const form = useForm({ resolver: zodResolver(loginSchema) });
    const { login, isPending } = useLogin();
    const onSubmit = form.handleSubmit(login);

    return (
        <Form {...form}>
            <form className={cn('flex flex-col gap-2', className)} onSubmit={onSubmit}>
                <FormField
                    control={form.control}
                    name="login"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Логин</FormLabel>
                            <FormControl>
                                <Input placeholder="noname" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Пароль</FormLabel>
                            <FormControl>
                                <Input type="password" placeholder="********" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button disabled={isPending} type="submit">
                    Войти
                </Button>
            </form>
        </Form>
    );
};
