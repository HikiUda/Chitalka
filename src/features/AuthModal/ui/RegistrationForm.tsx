import { FC } from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRegistration } from '../model/useRegistration';
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

interface RegistrationFormProps {
    className?: string;
}

const registrationSchema = z
    .object({
        login: z
            .string({ message: 'Логин обязателен' })
            .min(1, { message: 'Логин должен быть не менее 1 символа' }),
        password: z
            .string({ message: 'Пароль обязателен' })
            .min(8, { message: 'Пароль должен быть не менее 8 символов' }),
        confirmPassword: z.string().optional(),
    })
    .refine(({ password, confirmPassword }) => password === confirmPassword, {
        path: ['confirmPassword'],
        message: 'Пароли не совпадают',
    });

export const RegistrationForm: FC<RegistrationFormProps> = (props) => {
    const { className } = props;

    const form = useForm({ resolver: zodResolver(registrationSchema) });
    const { login, isPending } = useRegistration();
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
                <FormField
                    control={form.control}
                    name="confirmPassword"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Подтвердите пароль</FormLabel>
                            <FormControl>
                                <Input type="password" placeholder="********" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button disabled={isPending} type="submit">
                    Зарегестрироваться
                </Button>
            </form>
        </Form>
    );
};
