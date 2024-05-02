import {TabButtonProps} from "../TourTravelPlanner/TourTravelPlannerProps";

export interface TransferTravelPlannerProps {
  className?: string;
  strategy?: any;
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
  onSubmit?(e: any): void,
}