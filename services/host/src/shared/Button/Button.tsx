import { FC } from 'react';

interface ButtonProps {
    className?: string;
}

export const Button: FC<ButtonProps> = (props) => {
    const { className } = props;

    return <button className={'button' + className}>Test</button>;
};
