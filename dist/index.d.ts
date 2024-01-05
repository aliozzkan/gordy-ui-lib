import { FC } from 'react';

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

export { Header, TravelPlanner };
