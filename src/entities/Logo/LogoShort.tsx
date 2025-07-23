import { Link } from 'react-router-dom';
import { AppImage } from '../../shared/ui/AppImage';
import ChitalkaShort from '@/shared/ui/icon/ChitalkaShort.svg?react';
import Gid from '@/shared/assets/animation/Gid/logo/shake.gif';
import { cn } from '@/shared/lib/css';
import { getRoute } from '@/shared/kernel/router';

type LogoShortProps = {
    className?: string;
};

export const LogoShort = (props: LogoShortProps) => {
    const { className } = props;

    return (
        <Link to={getRoute.MAIN()} className={cn('relative', className)}>
            <ChitalkaShort className="fill-primary" width={40} height={45} />
            <AppImage
                className="absolute top-0 left-0"
                src={Gid}
                alt="1"
                width="38px"
                height="51px"
            />
        </Link>
    );
};
