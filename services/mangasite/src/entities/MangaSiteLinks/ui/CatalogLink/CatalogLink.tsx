import { memo } from 'react';
import { getMangaSiteRoute } from '@packages/model/src/config/router';
import CatalogSvg from '@packages/ui/src/assets/icon/common/catalog.svg';
import { LinkLayout, LinkLayoutCommonProps } from '../LinkLayout/LinkLayout';

export const CatalogLink = memo((props: LinkLayoutCommonProps) => {
    const { iconOnly, iconSize = 20 } = props;
    return (
        <LinkLayout
            to={getMangaSiteRoute.catalog()}
            text="Каталог"
            Svg={CatalogSvg}
            iconOnly={iconOnly}
            iconSize={iconSize}
        />
    );
});
