import { Link } from 'react-router-dom';
import { isMobile } from 'react-device-detect';
import { getRoute } from '@/shared/kernel/router/routerConfig';
import Gid from '@/shared/assets/animation/Gid/logo/shake.gif';
import { cn } from '@/shared/lib/css';
import Chitalka from '@/shared/ui/icon/Chitalka.svg';
import ChitalkaMini from '@/shared/ui/icon/ChitalkaMini.svg';

interface LogoMangaSiteProps {
    className?: string;
}

export const LogoMangaSite = (props: LogoMangaSiteProps) => {
    const { className } = props;

    return (
        <Link to={getRoute.MAIN()} className={cn('relative', className)}>
            {isMobile ? (
                <ChitalkaMini className="fill-primary" width={40} height={45} />
            ) : (
                <Chitalka className="fill-primary" width={150} height={45} />
            )}
            <img className="absolute top-0 left-0" src={Gid} alt="1" width="38px" height="51px" />
        </Link>
    );
};
