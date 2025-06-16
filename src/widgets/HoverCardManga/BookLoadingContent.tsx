import { Skeleton } from '@/shared/ui/kit/skeleton';

export const BookLoadingContent = () => {
    return (
        <>
            <Skeleton className="h-10 mx-4 w-75" />
            <Skeleton className="h-6 mx-4 w-38" />
            <Skeleton className="h-18 w-full" />
            <div className="flex flex-col w-full px-4 gap-1">
                <Skeleton className="w-full h-4" />
                <Skeleton className="w-full h-4" />
                <Skeleton className="w-full h-4" />
                <Skeleton className="w-full h-4" />
            </div>
            <div className="mx-4 flex justify-start flex-wrap gap-2">
                <Skeleton className="h-8 w-15" />
                <Skeleton className="h-8 w-25" />
                <Skeleton className="h-8 w-15" />
                <Skeleton className="h-8 w-15" />
                <Skeleton className="h-8 w-20" />
                <Skeleton className="h-8 w-15" />
                <Skeleton className="h-8 w-20" />
                <Skeleton className="h-8 w-15" />
                <Skeleton className="h-8 w-20" />
                <Skeleton className="h-8 w-25" />
                <Skeleton className="h-8 w-15" />
            </div>
            <Skeleton className="h-10 w-50 mx-4" />
        </>
    );
};
