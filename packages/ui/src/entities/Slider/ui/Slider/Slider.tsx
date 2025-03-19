import { FC, ReactNode, useCallback, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Keyboard } from 'swiper/modules';
import type { SwiperOptions } from 'swiper/types';
import { Swiper as SwiperRef } from 'swiper';
import { classNames } from '@packages/model/src/lib/classNames';
import sliderArrow from '@ui/assets/icon/common/sliderArrow.svg';
import { Icon } from '@ui/shared/Icon';
import { Button } from '@ui/shared/Button';
import cls from './Slider.module.scss';

interface SliderProps {
    className?: string;
    slides?: ReactNode[];
}

export const Slider: FC<SliderProps> = (props) => {
    const { className, slides = [] } = props;
    const [swiper, setSwiper] = useState<SwiperRef | null>(null);

    const swiperOptions: SwiperOptions = {
        spaceBetween: 20,
        modules: [FreeMode, Keyboard],
        freeMode: true,
        keyboard: true,
        slidesPerView: 'auto',
    };

    const slideNext = useCallback(() => {
        swiper?.slideTo(swiper?.activeIndex + 6);
    }, [swiper]);
    const slideNPrev = useCallback(() => {
        swiper?.slideTo(swiper?.activeIndex - 6);
    }, [swiper]);

    return (
        <div className={classNames(cls.sliderWrapper, {}, [className])}>
            <Swiper
                onSwiper={(swiper) => {
                    setSwiper(swiper);
                }}
                {...swiperOptions}
            >
                <SwiperSlide style={{ width: 1 }} key={'right-gap'} />
                {slides.map((slide, ind) => (
                    <SwiperSlide className={cls.slide} key={ind}>
                        {slide}
                    </SwiperSlide>
                ))}
                <SwiperSlide style={{ width: 1 }} key={'left-gap'} />
            </Swiper>

            {!swiper?.isLocked && (
                <Button className={cls.leftBtn} theme="clear" onPress={slideNPrev}>
                    <Icon Svg={sliderArrow} width={30} height={30} />
                </Button>
            )}

            {!swiper?.isLocked && (
                <Button className={cls.rightBtn} theme="clear" onPress={slideNext}>
                    <Icon Svg={sliderArrow} width={30} height={30} />
                </Button>
            )}
        </div>
    );
};
