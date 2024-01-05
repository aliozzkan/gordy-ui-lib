import { FC } from 'react';
import * as react_jsx_runtime from 'react/jsx-runtime';

interface HeaderProps {
    title: string;
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

declare const Carousel: (props: any) => react_jsx_runtime.JSX.Element;

export { Carousel, Header, TravelPlanner };
