import { memo } from 'react';
import { LinkLayout, LinkLayoutCommonProps } from '../LinkLayout/LinkLayout';
import { getRoute } from '@/shared/kernel/router';
import CollectionSvg from '@/shared/assets/icon/common/collection.svg?react';

export const CollectionLink = memo((props: LinkLayoutCommonProps) => {
    const { iconOnly, iconSize = 20 } = props;

    return (
        <LinkLayout
            to={getRoute.COLLECTIONS()}
            text="Коллекции"
            Svg={CollectionSvg}
            iconOnly={iconOnly}
            iconSize={iconSize}
        />
    );
});
