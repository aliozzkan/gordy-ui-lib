import {TabButtonProps} from "../TourTravelPlanner/TourTravelPlannerProps";

export interface FlightTravelPlannerProps {
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
  onSubmit?(e: any): void,
}