import { Link } from 'react-router-dom';
import { ScopeItems } from './ScopeItems';
import { Button } from '@/shared/ui/kit/button';

type LinksProps = {
    content: string;
    link: string;
};
export type ScopeLinksProps = {
    title?: string;
    links: LinksProps | LinksProps[];
};

export const ScopeLinks = (props: ScopeLinksProps) => {
    const { title, links } = props;
    return (
        <ScopeItems
            title={title}
            items={links}
            renderItems={(link) => (
                <Button variant="link" size="clear" asChild>
                    <Link to={link.link}>{link.content}</Link>
                </Button>
            )}
        />
    );
};
