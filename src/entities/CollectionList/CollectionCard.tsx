import { Link } from 'react-router-dom';
import { EyeIcon, HeartIcon, BookIcon, BookmarkIcon } from 'lucide-react';
import { AppAdaptiveImage } from '@/shared/ui/AppAdaptiveImage';
import { Heading } from '@/shared/ui/kit/heading';
import { Badge } from '@/shared/ui/kit/badge';
import { cn } from '@/shared/lib/css';

interface CollectionCardProps {
    className?: string;
}

export const CollectionCard = (props: CollectionCardProps) => {
    const { className } = props;

    return (
        <Link
            to={'/'}
            className={cn(
                'grid grid-rows-2 justify-center min-w-[250px] min-h-[210px] px-[10px] pt-[10px] rounded-xl border shadow-sm bg-card',
                className,
            )}
        >
            <div className="flex flex-col justify-center items-center">
                <Heading weigth="semibold" className="line-clamp-2 text-center mb-2">
                    Tittle of collection
                </Heading>
                <div className="flex justify-center items-center flex-wrap gap-1">
                    <Badge variant="secondary">
                        <EyeIcon /> 1289
                    </Badge>
                    <Badge variant="secondary">
                        <HeartIcon /> 444
                    </Badge>
                    <Badge variant="secondary">
                        <BookIcon /> 56
                    </Badge>
                    <Badge variant="secondary">
                        <BookmarkIcon /> 33
                    </Badge>
                </div>
            </div>
            <div className="relative overflow-hidden">
                <AppAdaptiveImage className="absolute w-[90px] h-[120px] bottom-[-35px] left-[15px] rotate-[-15deg] z-5 border-4 border-card rounded-lg" />
                <AppAdaptiveImage className="absolute w-[90px] h-[120px] bottom-[-45px] left-[60px] z-6 border-4 border-card rounded-lg" />
                <AppAdaptiveImage className="absolute w-[90px] h-[120px] bottom-[-60px] left-[100px] rotate-[15deg] z-7 border-4 border-card rounded-lg" />
            </div>
        </Link>
    );
};
