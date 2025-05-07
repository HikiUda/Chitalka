import { FC, ReactNode } from 'react';
import { classNames } from '@/shared/lib/helpers/classNames';
import { Pagination } from 'swiper/modules';
import { SwiperSlide, Swiper } from 'swiper/react';
import { PaginationOptions } from 'swiper/types';
import cls from './PaginationSlider.module.scss';

interface PaginationSliderProps {
    className?: string;
    slides?: ReactNode[];
}

export const PaginationSlider: FC<PaginationSliderProps> = (props) => {
    const { className, slides } = props;

    const pagination: PaginationOptions = {
        clickable: true,
        dynamicBullets: true,
    };

    return (
        <Swiper
            className={classNames(cls.PaginationSlider, {}, [className])}
            slidesPerView={1}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={pagination}
        >
            {slides?.map((slide, ind) => <SwiperSlide key={ind}>{slide}</SwiperSlide>)}
        </Swiper>
    );
};
