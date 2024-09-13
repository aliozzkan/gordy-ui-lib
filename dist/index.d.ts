import * as React from 'react';
import { FC, ComponentProps, PropsWithChildren } from 'react';
import * as react_jsx_runtime from 'react/jsx-runtime';
import * as class_variance_authority_dist_types from 'class-variance-authority/dist/types';
import { VariantProps } from 'class-variance-authority';

interface TabItemListProps {
    label?: string;
    icon?: string;
    isActive?: boolean;
}
interface HeaderProps {
    className?: string;
    tabItemList?: TabItemListProps[];
    logoUrl?: string;
    showLanguageMenuItem?: boolean;
    showHelpMenuItem?: boolean;
    showMyRequestsMenuItem?: boolean;
    showAccountDropdownItem?: boolean;
    showLogo?: boolean;
    showTabBar?: boolean;
}
declare const Header: FC<HeaderProps>;

interface HotelTravelPlannerProps {
    className?: string;
    strategy?: any;
    design?: any;
    inputDestinationText?: string;
    inputCheckoutDateText?: string;
    inputGuestInfoText?: string;
    disabled?: boolean;
}

declare const HotelTravelPlanner: FC<HotelTravelPlannerProps>;

interface TabButtonProps {
    label: string;
    value: string | number | undefined;
}
interface TourTravelPlannerProps {
    className?: string;
    strategy?: any;
    design?: any;
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
    backgroundImagePath?: string;
}

interface FlightTravelPlannerProps {
    className?: string;
    strategy?: any;
    design?: any;
    inputDestinationText?: string;
    inputReturnText?: string;
    inputCheckinDateText?: string;
    inputCheckoutDateText?: string;
    inputPassengerAndCabinText?: string;
    inputPersonText?: string;
    inputTravelReasonText?: string;
    disabled?: boolean;
    tourType?: "return" | "one-way" | "multi";
    tpType?: "Agency" | "Corporate";
    noReason?: boolean;
    tabButtons?: TabButtonProps[];
    onSubmit?(e: any): void;
}

declare const FlightTravelPlanner: FC<FlightTravelPlannerProps>;

declare const TourTravelPlanner: FC<TourTravelPlannerProps>;

interface AgencyCarRentalTravelPlannerProps {
    className?: string;
    strategy?: any;
    design?: any;
    inputPickupLocationText?: string;
    inputPickupDateText?: string;
    inputDeliveryDateText?: string;
    inputTimeText?: string;
    inputDifferentLocationText?: string;
    disabled?: boolean;
}

declare const AgencyCarRentalTravelPlanner: FC<AgencyCarRentalTravelPlannerProps>;

interface CorporateCarRentalTravelPlannerProps {
    className?: string;
    strategy?: any;
    design?: any;
    inputPickupLocationText?: string;
    inputPickupDateText?: string;
    inputDeliveryDateText?: string;
    inputTimeText?: string;
    inputPersonNumberText?: string;
    inputPersonText?: string;
    inputTravelReasonText?: string;
    inputDifferentLocationText?: string;
    disabled?: boolean;
}

declare const CorporateCarRentalTravelPlanner: FC<CorporateCarRentalTravelPlannerProps>;

interface ActivityTravelPlannerProps {
    className?: string;
    strategy?: any;
    design?: any;
    inputDestinationText?: string;
    inputCheckoutDateText?: string;
    inputGuestInfoText?: string;
    disabled?: boolean;
}

declare const ActivityTravelPlanner: FC<ActivityTravelPlannerProps>;

interface TransferTravelPlannerProps {
    className?: string;
    strategy?: any;
    design?: any;
    inputDestinationText?: string;
    inputReturnText?: string;
    inputCheckinDateText?: string;
    inputCheckoutDateText?: string;
    inputPassengerAmountText?: string;
    inputPassengerText?: string;
    inputTravelReasonText?: string;
    disabled?: boolean;
    tourType?: "return" | "one-way";
    tpType?: "Agency" | "Corporate";
    noReason?: boolean;
    tabButtons?: TabButtonProps[];
    onSubmit?(e: any): void;
}

declare const TransferTravelPlanner: FC<TransferTravelPlannerProps>;

interface LayoutContainerProps extends ComponentProps<"div"> {
}
declare const LayoutContainer: FC<LayoutContainerProps>;

interface CarouselProps {
    strategy: any;
    activeCategoryId?: number;
    activeSliderIndex?: number;
    design?: any;
    onSlideChange?(e: any): any;
}
declare const Carousel: FC<CarouselProps>;

interface IconListProps {
    strategy: any;
    className?: string;
    disabled?: boolean;
    design?: any;
}
declare const IconList: FC<IconListProps>;

interface MediaListProps {
    strategy: any;
    className?: string;
    disabled?: boolean;
    design?: any;
}
declare const MediaList: FC<MediaListProps>;

interface TextHtmlProps {
    strategy?: any;
    className?: string;
    disabled?: boolean;
}
declare const TextHtml: FC<TextHtmlProps>;

interface DropdownProps extends PropsWithChildren, VariantProps<typeof dropdownContentVariants> {
    className?: string;
    items: any;
    title?: string;
    onSelect?(eventKey: any): void;
    placement?: "topStart" | "topEnd" | "leftStart" | "rightStart" | "leftEnd" | "rightEnd" | "bottomStart" | "bottomEnd";
    children?: React.JSX.Element | React.JSX.Element[];
}
interface DropDownMenuProps extends PropsWithChildren {
    className?: string;
    style?: React.CSSProperties;
    ref?: any;
    onSelect?(selectedIndex: string | undefined): void;
    children?: React.JSX.Element | React.JSX.Element[];
}
interface DropdownItemProps extends PropsWithChildren {
    className?: string;
    onClick?(e: void): void;
    eventKey?: string | number;
    children?: React.JSX.Element | React.JSX.Element[] | string;
}
declare const dropdownContentVariants: (props?: ({
    placement?: "topStart" | "topEnd" | "leftStart" | "rightStart" | "leftEnd" | "rightEnd" | "bottomStart" | "bottomEnd" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string;
declare const Dropdown: {
    (props: DropdownProps): react_jsx_runtime.JSX.Element;
    Menu: (props: DropDownMenuProps) => react_jsx_runtime.JSX.Element;
    Item: (props: DropdownItemProps) => react_jsx_runtime.JSX.Element;
};

export { ActivityTravelPlanner, AgencyCarRentalTravelPlanner, Carousel, CorporateCarRentalTravelPlanner, Dropdown, FlightTravelPlanner, Header, HotelTravelPlanner, IconList, LayoutContainer, MediaList, TextHtml, TourTravelPlanner, TransferTravelPlanner };
