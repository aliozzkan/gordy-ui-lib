import { FC } from "react";
import LIcon from "../../lucidIcon/lucidIcon";
import {carRentalTravelPlannerDataAgency} from "../../../data/dummy/carrentaltravelplanner"
import {CarRentalTravelPlannerProps} from "./CarRentalTravelPlannerProps";
import {Input, Button, Wrapper, H1, H5} from "../../ui";
import TPCard from "../../TPCard/TPCard";
import Container from "../../Container/Container";


const CarRentalTravelPlanner:FC<CarRentalTravelPlannerProps> = ({
    className,
    title,
    subTitle,
    buttonText,
    buttonBgColor,
    buttonTextColor,
    inputPickupLocationText,
    inputPickupDateText,
    inputDeliveryDateText,
    inputTimeText,
    inputDifferentLocationText,
    wrapperBgColor,
    wrapperWidth,
    wrapperHeight,
    disabled,
  }) => {

  return (
    <Wrapper
      style={{
        backgroundColor: wrapperBgColor,
        width :wrapperWidth,
        height :wrapperHeight,
    }}
      disabled={disabled}
      className={className}>
      <Container>
        <H1>{title || carRentalTravelPlannerDataAgency.title}</H1>
        <H5 className="mt-2">{subTitle || carRentalTravelPlannerDataAgency.subTitle}</H5>
        <TPCard className="mt-6">
          <div className="flex flex-row gap-4">
            <div className="w-4/12 flex items-center gap-4">
              <Input inputClassName="py-4" leftIcon={<LIcon size={20} name="MapPin" />}
                     placeholder={inputPickupLocationText || carRentalTravelPlannerDataAgency.inputPickupLocationText}/>
            </div>
            <div className="w-8/12 flex items-center gap-4">
              <div className={`input-date-time-box relative w-full flex border border-gray-200 rounded-lg overflow-hidden 
    shadow-xs text-gray-500 text-base dark:border-gray-800 dark:text-gray-200 ${className}`}>
                <Input
                  className="border-none !w-7/12"
                  inputClassName="py-4 pl-10"
                  iconWrapperClassName="!left-3"
                  leftIcon={<LIcon size={20} name="Calendar" />}
                  placeholder={inputPickupDateText || carRentalTravelPlannerDataAgency.inputPickupDateText}/>
                <div className="line border-l border-gray-200 dark:border-gray-800" />
                <Input
                  className="border-none !w-5/12"
                  inputClassName="py-4 pr-7"
                  rightIcon={<LIcon size={20} name="ChevronDown" />}
                  placeholder={inputTimeText || carRentalTravelPlannerDataAgency.inputTimeText}/>
              </div>
              <div className={`input-date-time-box relative w-full flex border border-gray-200 rounded-lg overflow-hidden 
    shadow-xs text-gray-500 text-base dark:border-gray-800 dark:text-gray-200 ${className}`}>
                <Input
                  className="border-none !w-7/12"
                  inputClassName="py-4 pl-10"
                  iconWrapperClassName="!left-3"
                  leftIcon={<LIcon size={20} name="Calendar" />}
                  placeholder={inputDeliveryDateText || carRentalTravelPlannerDataAgency.inputDeliveryDateText}/>
                <div className="line border-l border-gray-200 dark:border-gray-800" />
                <Input
                  className="border-none !w-5/12"
                  inputClassName="py-4 pr-7"
                  rightIcon={<LIcon size={20} name="ChevronDown" />}
                  placeholder={inputTimeText || carRentalTravelPlannerDataAgency.inputTimeText}/>
              </div>
              <Button variant="primary"
                      className="shrink-0 w-[98px] py-4 h-auto"
                      style={{backgroundColor: buttonBgColor || carRentalTravelPlannerDataAgency.buttonBgColor, color: buttonTextColor}}>
                {buttonText || carRentalTravelPlannerDataAgency.buttonText}
              </Button>
            </div>
          </div>
          <div className="flex items-center gap-2 text-gray-500 text-sm font-medium dark:text-white">
            <input id="differentLocation" type="checkbox" />
            <label htmlFor="differentLocation">{inputDifferentLocationText || carRentalTravelPlannerDataAgency.inputDifferentLocationText}</label>
          </div>
        </TPCard>
      </Container>
    </Wrapper>
  );
};

export default CarRentalTravelPlanner;
