import { FC } from 'react';
import { classNames } from '@packages/model/src/lib/classNames';
import { Pagination } from 'swiper/modules';
import { SwiperSlide, Swiper } from 'swiper/react';
import cls from './PaginationSlider.module.scss';

interface PaginationSliderProps {
    className?: string;
}

export const PaginationSlider: FC<PaginationSliderProps> = (props) => {
    const { className } = props;

    return (
        <Swiper
            className={classNames(cls.PaginationSlider, {}, [className])}
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            modules={[Pagination]}
            pagination
        >
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
        </Swiper>
    );
};
