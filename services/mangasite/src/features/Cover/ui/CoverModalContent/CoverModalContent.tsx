import { memo } from 'react';
import { AppAdaptiveImage } from '@packages/ui/src/shared/AppAdaptiveImage';
import { PaginationSlider } from '@packages/ui/src/entities/Slider';
import cls from './CoverModalContent.module.scss';

const slides = Array(5).fill(<AppAdaptiveImage className={cls.slide} />);

const CoverModalContent = memo(() => {
    return <PaginationSlider slides={slides} />;
});

export default CoverModalContent;
