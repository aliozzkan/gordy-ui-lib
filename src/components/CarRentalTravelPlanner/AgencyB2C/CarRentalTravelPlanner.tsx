import { FC } from "react";
import LIcon from "../../lucidIcon/lucidIcon";
import {carRentalTravelPlannerDataAgency} from "../../../data/dummy/carrentaltravelplanner"
import {AgencyCarRentalTravelPlannerProps} from "./CarRentalTravelPlannerProps";
import {Input, Button, Wrapper, H1, H5} from "../../ui";
import TPCard from "../../TPCard/TPCard";
import Container from "../../Container/Container";


const AgencyCarRentalTravelPlanner:FC<AgencyCarRentalTravelPlannerProps> = ({
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
        <H5 className="grd-mt-2">{subTitle || carRentalTravelPlannerDataAgency.subTitle}</H5>
        <TPCard className="grd-mt-6">
          <div className="grd-flex grd-flex-row grd-gap-4">
            <div className="grd-w-4/12 flex grd-items-center grd-gap-4">
              <Input inputClassName="grd-py-4" leftIcon={<LIcon size={20} name="MapPin" />}
                     placeholder={inputPickupLocationText || carRentalTravelPlannerDataAgency.inputPickupLocationText}/>
            </div>
            <div className="grd-w-8/12 grd-flex grd-items-center grd-gap-4">
              <div className={`input-date-time-box grd-relative grd-w-full grd-flex grd-border grd-border-gray-200 grd-rounded-lg grd-overflow-hidden 
    grd-shadow-xs grd-text-gray-500 grd-text-base dark:grd-border-gray-800 dark:grd-text-gray-200 ${className}`}>
                <Input
                  className="grd-border-none !grd-w-7/12"
                  inputClassName="grd-py-4 grd-pl-10"
                  iconWrapperClassName="!grd-left-3"
                  leftIcon={<LIcon size={20} name="Calendar" />}
                  placeholder={inputPickupDateText || carRentalTravelPlannerDataAgency.inputPickupDateText}/>
                <div className="line grd-border-l grd-border-gray-200 dark:grd-border-gray-800" />
                <Input
                  className="grd-border-none !grd-w-5/12"
                  inputClassName="grd-py-4 grd-pr-7"
                  rightIcon={<LIcon size={20} name="ChevronDown" />}
                  placeholder={inputTimeText || carRentalTravelPlannerDataAgency.inputTimeText}/>
              </div>
              <div className={`input-date-time-box grd-relative grd-w-full grd-flex grd-border grd-border-gray-200 grd-rounded-lg grd-overflow-hidden 
    grd-shadow-xs grd-text-gray-500 grd-text-base dark:grd-border-gray-800 dark:grd-text-gray-200 ${className}`}>
                <Input
                  className="grd-border-none !grd-w-7/12"
                  inputClassName="grd-py-4 grd-pl-10"
                  iconWrapperClassName="!grd-left-3"
                  leftIcon={<LIcon size={20} name="Calendar" />}
                  placeholder={inputDeliveryDateText || carRentalTravelPlannerDataAgency.inputDeliveryDateText}/>
                <div className="grd-line grd-border-l grd-border-gray-200 dark:grd-border-gray-800" />
                <Input
                  className="grd-border-none !grd-w-5/12"
                  inputClassName="grd-py-4 grd-pr-7"
                  rightIcon={<LIcon size={20} name="ChevronDown" />}
                  placeholder={inputTimeText || carRentalTravelPlannerDataAgency.inputTimeText}/>
              </div>
              <Button variant="primary"
                      className="grd-shrink-0 grd-w-[98px] grd-py-4 grd-h-auto"
                      style={{backgroundColor: buttonBgColor || carRentalTravelPlannerDataAgency.buttonBgColor, color: buttonTextColor}}>
                {buttonText || carRentalTravelPlannerDataAgency.buttonText}
              </Button>
            </div>
          </div>
          <div className="grd-flex grd-items-center grd-gap-2 grd-text-gray-500 grd-text-sm grd-font-medium dark:grd-text-white">
            <input id="differentLocation" type="checkbox" />
            <label htmlFor="differentLocation">{inputDifferentLocationText || carRentalTravelPlannerDataAgency.inputDifferentLocationText}</label>
          </div>
        </TPCard>
      </Container>
    </Wrapper>
  );
};

export default AgencyCarRentalTravelPlanner;
