import { memo } from 'react';
import { getMangaSiteRoute } from '@/shared/config/router';
import CollectionSvg from '@/shared/assets/icon/common/collection.svg';
import { LinkLayout, LinkLayoutCommonProps } from '../LinkLayout/LinkLayout';

export const CollectionLink = memo((props: LinkLayoutCommonProps) => {
    const { iconOnly, iconSize = 20 } = props;

    return (
        <LinkLayout
            to={getMangaSiteRoute.collections()}
            text="Коллекции"
            Svg={CollectionSvg}
            iconOnly={iconOnly}
            iconSize={iconSize}
        />
    );
});
