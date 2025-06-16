import { ReactNode } from 'react';

export const Container = ({ children }: { children: ReactNode }) => {
    return <div className="max-w-305 mx-auto h-full">{children}</div>;
};
