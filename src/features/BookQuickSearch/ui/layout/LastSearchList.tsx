import { ReactNode } from 'react';

type LastSearchListProps = {
    className?: string;
    items: string[];
    renderItem: (item: string) => ReactNode;
};

export const LastSearchList = (props: LastSearchListProps) => {
    const { className, items, renderItem } = props;

    if (!items.length) return null;

    return <div className={className}>{items.map(renderItem)}</div>;
};
