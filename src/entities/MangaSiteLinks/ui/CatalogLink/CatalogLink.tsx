import { memo } from 'react';
import { LinkLayout, LinkLayoutCommonProps } from '../LinkLayout/LinkLayout';
import { getRoute } from '@/shared/kernel/router';
import CatalogSvg from '@/shared/assets/icon/common/catalog.svg?react';

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
