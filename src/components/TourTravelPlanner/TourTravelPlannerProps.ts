
export interface TabButtonProps {
  label: string,
  value: string | number | undefined
}

export interface TourTravelPlannerProps {
  className?: string;
  strategy?: any
  design?: any
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
  onSubmit?(e: any): void,
  tabButtons?: TabButtonProps[],
  backgroundImagePath?: string,
}