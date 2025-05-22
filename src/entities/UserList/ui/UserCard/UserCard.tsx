import { memo } from 'react';

import { AppAdaptiveImage } from '@/shared/ui/AppAdaptiveImage';
import { cn } from '@/shared/lib/css';
import { Card } from '@/shared/ui/kit/card';
import { Progress } from '@/shared/ui/kit/progress';

interface UserCardProps {
    className?: string;
}

export const UserCard = memo((props: UserCardProps) => {
    const { className } = props;

    return (
        <Card
            className={cn(
                'min-w-[240px] min-h-[70px] px-2 py-1 flex-row justify-center items-center gap-2',
                className,
            )}
        >
            <AppAdaptiveImage className="w-[50px] h-[50px] shrink-0" />
            <div className="grow">
                <div className="flex justify-between items-center mb-1">
                    <span>Git</span>
                    <span>#1</span>
                </div>
                <div className="flex justify-between items-center">
                    <span>5 level</span>
                    <span>88/156</span>
                </div>
                <Progress value={(88 / 156) * 100} />
            </div>
        </Card>
    );
});
