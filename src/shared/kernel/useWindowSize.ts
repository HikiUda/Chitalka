import { create } from 'zustand';
import { createZustandStoreSelectors } from '../lib/helpers/createZustandStoreSelectors';

/**
 * Тип состояния размеров окна.
 */
type WindowSize = {
    /** Текущая ширина окна */
    width: number;

    /** ≥ 640px — активен Tailwind sm */
    isWidthSm: boolean;

    /** ≥ 768px — активен Tailwind md */
    isWidthMd: boolean;

    /** ≥ 1024px — активен Tailwind lg */
    isWidthLg: boolean;

    /** ≥ 1280px — активен Tailwind xl */
    isWidthXl: boolean;

    /** ≥ 1536px — активен Tailwind 2xl */
    isWidth2xl: boolean;
};

/**
 * Функция вычисления брейкпоинтов на основе текущей ширины.
 */
const getBreakpoints = (width: number): WindowSize => ({
    width,
    isWidthSm: width >= 640,
    isWidthMd: width >= 768,
    isWidthLg: width >= 1024,
    isWidthXl: width >= 1280,
    isWidth2xl: width >= 1536,
});

const useWindowSizeStore = create<WindowSize>((set) => {
    if (typeof window !== 'undefined') {
        const onResize = () => {
            set(getBreakpoints(window.innerWidth));
        };
        window.addEventListener('resize', onResize);
    }

    return getBreakpoints(typeof window !== 'undefined' ? window.innerWidth : 0);
});

/**
 * Zustand store для отслеживания размеров окна и Tailwind-брейкпоинтов.
 *
 * ## Содержит:
 * - `width`: текущая ширина окна (`number`)
 * - `isWidthSm`: `true`, если ширина ≥ 640px (Tailwind `sm`)
 * - `isWidthMd`: `true`, если ширина ≥ 768px (Tailwind `md`)
 * - `isWidthLg`: `true`, если ширина ≥ 1024px (Tailwind `lg`)
 * - `isWidthXl`: `true`, если ширина ≥ 1280px (Tailwind `xl`)
 * - `isWidth2xl`: `true`, если ширина ≥ 1536px (Tailwind `2xl`)
 *
 */
export const useWindowSize = createZustandStoreSelectors(useWindowSizeStore);
