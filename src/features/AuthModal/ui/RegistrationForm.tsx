/* eslint-disable @typescript-eslint/no-explicit-any */
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRegistration } from '../model/useRegistration';
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

type RegistrationFormProps = {
    className?: string;
};

const registrationSchema = z
    .object({
        login: z
            .string({ message: 'error.loginRequired' })
            .min(1, { message: 'error.loginTooShort' }),
        password: z
            .string({ message: 'error.passwordRequired' })
            .min(8, { message: 'error.passwordTooShort' }),
        confirmPassword: z.string().optional(),
    })
    .refine(({ password, confirmPassword }) => password === confirmPassword, {
        path: ['confirmPassword'],
        message: 'error.passwordsDontMatch',
    });

export const RegistrationForm = (props: RegistrationFormProps) => {
    const { className } = props;
    const t = useI18n();

    const form = useForm({ resolver: zodResolver(registrationSchema) });
    const { registration, isPending, error } = useRegistration();
    const onSubmit = form.handleSubmit(registration);

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
                                <Input placeholder="noname" {...field} />
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
                <FormField
                    control={form.control}
                    name="confirmPassword"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>{t('confirmPassword')}</FormLabel>
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
                    {t('signUp')}
                </Button>
            </form>
        </Form>
    );
};
