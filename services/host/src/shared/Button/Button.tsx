import { FC } from 'react';

interface ButtonProps {
    classsName?: string;
}

export const Button: FC<ButtonProps> = (props) => {
    const { classsName } = props;

    return <button className={'button' + classsName}>Test</button>;
};
