import {TabButtonProps} from "../TourTravelPlanner/TourTravelPlannerProps";

export interface FlightTravelPlannerProps {
  className?: string;
  strategy?: any;
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
  onSubmit?(e: any): void,
}