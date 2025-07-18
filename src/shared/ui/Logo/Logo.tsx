import { Link } from 'react-router-dom';
import { AppImage } from '../AppImage';
import Chitalka from '../icon/Chitalka.svg?react';
import Gid from '@/shared/assets/animation/Gid/logo/shake.gif';
import { cn } from '@/shared/lib/css';
import { getRoute } from '@/shared/kernel/router';

interface LogoProps {
    className?: string;
}

export const Logo = (props: LogoProps) => {
    const { className } = props;

    return (
        <Link to={getRoute.MAIN()} className={cn('relative', className)}>
            <Chitalka className="fill-primary" width={150} height={45} />
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
