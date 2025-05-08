import { memo } from 'react';
import { getRoute } from '@/shared/config/router';
import CatalogSvg from '@/shared/assets/icon/common/catalog.svg';
import { LinkLayout, LinkLayoutCommonProps } from '../LinkLayout/LinkLayout';

export const CatalogLink = memo((props: LinkLayoutCommonProps) => {
    const { iconOnly, iconSize = 20 } = props;
    return (
        <LinkLayout
            to={getRoute.catalog()}
            text="Каталог"
            Svg={CatalogSvg}
            iconOnly={iconOnly}
            iconSize={iconSize}
        />
    );
});
