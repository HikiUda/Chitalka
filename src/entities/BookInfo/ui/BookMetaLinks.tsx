import { Link } from 'react-router-dom';
import { BookMetaItem } from './BookMetaItem';
import { Button } from '@/shared/ui/kit/button';

export type LinksProps = {
    content: string;
    link: string;
};
export type BookMetaLinksProps = {
    className?: string;
    title: string;
    links: LinksProps | LinksProps[];
};

export const BookMetaLinks = (props: BookMetaLinksProps) => {
    const { title, links, className } = props;
    return (
        <BookMetaItem
            className={className}
            title={title}
            items={links}
            renderItems={(link, ind) => (
                <Button key={ind} variant="link" size="clear" asChild>
                    <Link to={link.link}>{link.content}</Link>
                </Button>
            )}
        />
    );
};
