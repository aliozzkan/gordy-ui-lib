import { FC } from 'react';

interface HeaderProps {
    username: string;
}
declare const Header: FC<HeaderProps>;

interface TravelPlannerProps {
    className?: string;
    title?: string;
    subTitle?: string;
    buttonText?: string;
    buttonBgColor?: string;
    buttonTextColor?: string;
    inputDestinationText?: string;
    inputCheckoutDateText?: string;
    inputGuestInfoText?: string;
    wrapperBgColor?: string;
    wrapperWidth?: string;
    wrapperHeight?: string;
    disabled?: boolean;
}

declare const TravelPlanner: FC<TravelPlannerProps>;

interface CarouselProps {
    sliderData: any;
    categoryData: any;
    activeCategoryId?: number;
    activeSliderIndex?: number;
}
declare const Carousel: FC<CarouselProps>;

interface IconListProps {
    maxItemLength: number;
    title?: string;
    className?: string;
    wrapperBgColor?: string;
    wrapperWidth?: string;
    wrapperHeight?: string;
    showArrows?: boolean;
    showBullets?: boolean;
}
declare const IconList: FC<IconListProps>;

export { Carousel, Header, IconList, TravelPlanner };
