import { Link } from 'react-router-dom';
import { PeopleRole } from '@/shared/kernel/book/people';
import { getRoute } from '@/shared/kernel/router';
import { cn } from '@/shared/lib/css';
import { AppAdaptiveImage } from '@/shared/ui/AppAdaptiveImage';
import { Heading } from '@/shared/ui/kit/heading';

type BookPeopleListProps = {
    className?: string;
    people: { id: number; name: string; avatar: string | null; role: PeopleRole[] }[];
};
export const BookPeopleList = (props: BookPeopleListProps) => {
    const { className, people } = props;

    return (
        <div className={cn('flex items-center gap-4 flex-wrap', className)}>
            {people.map((person) => (
                <Link
                    to={getRoute.PEOPLE_NAME(person.name)}
                    className="flex items-center gap-2 bg-card border rounded-lg p-2"
                    key={person.id}
                >
                    <AppAdaptiveImage className="w-9 h-9" img={person.avatar} />
                    <div className="flex flex-col gap-1 items-start">
                        <Heading variant="h5">{person.name}</Heading>
                        <span className="text-xs opacity-80">{person.role.join(' & ')}</span>
                    </div>
                </Link>
            ))}
        </div>
    );
};
