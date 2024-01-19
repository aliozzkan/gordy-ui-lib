import { FC } from 'react';

interface HeaderProps {
    username: string;
}
declare const Header: FC<HeaderProps>;

interface HotelTravelPlannerProps {
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

declare const HotelTravelPlanner: FC<HotelTravelPlannerProps>;

interface TabButtonProps {
    label: string;
    value: string | number | undefined;
}
interface TourTravelPlannerProps {
    className?: string;
    title?: string;
    subTitle?: string;
    buttonText?: string;
    buttonBgColor?: string;
    buttonTextColor?: string;
    inputDestinationText?: string;
    inputCheckoutDateText?: string;
    wrapperBgColor?: string;
    wrapperWidth?: string;
    wrapperHeight?: string;
    disabled?: boolean;
    tourType?: "Kultur" | "Yurt Disi" | "Gemi";
    onSubmit?(e: any): void;
    tabButtons?: TabButtonProps[];
}

interface FlightTravelPlannerProps {
    className?: string;
    title?: string;
    subTitle?: string;
    buttonText?: string;
    buttonBgColor?: string;
    buttonTextColor?: string;
    inputDestinationText?: string;
    inputReturnText?: string;
    inputCheckinDateText?: string;
    inputCheckoutDateText?: string;
    inputPassengerAndCabinText?: string;
    inputPersonText?: string;
    inputTravelReasonText?: string;
    wrapperBgColor?: string;
    wrapperWidth?: string;
    wrapperHeight?: string;
    disabled?: boolean;
    tourType?: "return" | "one-way" | "multi";
    noReason: boolean;
    tabButtons: TabButtonProps[];
    onSubmit?(e: any): void;
}

declare const FlightTravelPlanner: FC<FlightTravelPlannerProps>;

declare const TourTravelPlanner: FC<TourTravelPlannerProps>;

interface CarouselProps {
    sliderData: any;
    categoryData: any;
    activeCategoryId?: number;
    activeSliderIndex?: number;
}
declare const Carousel: FC<CarouselProps>;

interface IconListProps {
    maxItemLength: number;
    strategy: any;
    title?: string;
    className?: string;
    wrapperBgColor?: string;
    wrapperWidth?: string;
    wrapperHeight?: string;
    showArrows?: boolean;
    showBullets?: boolean;
}
declare const IconList: FC<IconListProps>;

interface MediaListProps {
    maxItemLength: number;
    title?: string;
    className?: string;
    wrapperBgColor?: string;
    wrapperWidth?: string;
    wrapperHeight?: string;
    showArrows?: boolean;
    showBullets?: boolean;
}
declare const MediaList: FC<MediaListProps>;

interface TextHtmlProps {
    content?: string;
    getContent?(content: any): any;
    className?: string;
    wrapperBgColor?: string;
    wrapperWidth?: string;
    wrapperHeight?: string;
}
declare const TextHtml: FC<TextHtmlProps>;

export { Carousel, FlightTravelPlanner, Header, HotelTravelPlanner, IconList, MediaList, TextHtml, TourTravelPlanner };
