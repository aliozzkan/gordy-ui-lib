import {FC} from "react";
import LIcon from "../../lucidIcon/lucidIcon";
import {carRentalTravelPlannerDataCorporate} from "../../../data/dummy/carrentaltravelplanner"
import {CorporateCarRentalTravelPlannerProps} from "./CarRentalTravelPlannerProps";
import {Input, Button, Wrapper, H1, H5} from "../../ui";
import TPCard from "../../TPCard/TPCard";
import Container from "../../Container/Container";
import {flightTravelPlannerData} from "../../../data/dummy/flighttravelplanner";


const CorporateCarRentalTravelPlanner: FC<CorporateCarRentalTravelPlannerProps> = ({
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
       inputPersonNumberText,
       inputPersonText,
       inputTravelReasonText,
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
        width: wrapperWidth,
        height: wrapperHeight,
      }}
      disabled={disabled}
      className={className}>
      <Container>
        <H1>{title || carRentalTravelPlannerDataCorporate.title}</H1>
        <H5 className="grd-mt-2">{subTitle || carRentalTravelPlannerDataCorporate.subTitle}</H5>
        <TPCard className="grd-mt-6">

          <div className={`grd-w-full grd-grid grid-cols-4 grd-items-center grd-gap-4`}>
            <Input className="grd-col-span-2" inputClassName="grd-py-4" leftIcon={<LIcon size={20} name="MapPin"/>}
                   placeholder={inputPickupLocationText || carRentalTravelPlannerDataCorporate.inputPickupLocationText}/>
            <div className={`input-date-time-box grd-relative grd-w-full grd-flex grd-border grd-border-gray-200 grd-rounded-lg grd-overflow-hidden 
    grd-shadow-xs grd-text-gray-500 grd-text-base dark:grd-border-gray-800 dark:grd-text-gray-200 ${className}`}>
              <Input
                className="grd-border-none !grd-w-7/12"
                inputClassName="grd-py-4 grd-pl-10"
                iconWrapperClassName="!grd-left-3"
                leftIcon={<LIcon size={20} name="Calendar"/>}
                placeholder={inputPickupDateText || carRentalTravelPlannerDataCorporate.inputPickupDateText}/>
              <div className="grd-line grd-border-l grd-border-gray-200 dark:grd-border-gray-800"/>
              <Input
                className="grd-border-none !grd-w-5/12"
                inputClassName="grd-py-4 grd-pr-7"
                rightIcon={<LIcon size={20} name="ChevronDown"/>}
                placeholder={inputTimeText || carRentalTravelPlannerDataCorporate.inputTimeText}/>
            </div>
            <div className={`input-date-time-box grd-relative grd-w-full grd-flex grd-border grd-border-gray-200 grd-rounded-lg grd-overflow-hidden 
    grd-shadow-xs grd-text-gray-500 grd-text-base dark:grd-border-gray-800 dark:grd-text-gray-200 ${className}`}>
              <Input
                className="grd-border-none !grd-w-7/12"
                inputClassName="grd-py-4 grd-pl-10"
                iconWrapperClassName="!grd-left-3"
                leftIcon={<LIcon size={20} name="Calendar"/>}
                placeholder={inputDeliveryDateText || carRentalTravelPlannerDataCorporate.inputDeliveryDateText}/>
              <div className="grd-line grd-border-l grd-border-gray-200 dark:grd-border-gray-800"/>
              <Input
                className="grd-border-none !grd-w-5/12"
                inputClassName="grd-py-4 grd-pr-7"
                rightIcon={<LIcon size={20} name="ChevronDown"/>}
                placeholder={inputTimeText || carRentalTravelPlannerDataCorporate.inputTimeText}/>
            </div>
            <Input
              rightIcon={<LIcon size={18} name="ChevronDown"/>}
              placeholder={inputPersonNumberText || carRentalTravelPlannerDataCorporate.inputPersonNumberText}/>
            <Input
              rightIcon={<LIcon size={18} name="ChevronDown"/>}
              placeholder={inputPersonText || carRentalTravelPlannerDataCorporate.inputPersonText}/>
            <Input rightIcon={<LIcon size={18} name="ChevronDown"/>}
                   placeholder={inputTravelReasonText || carRentalTravelPlannerDataCorporate.inputTravelReasonText}/>
            <Button variant="primary"
                    className="grd-shrink-0 grd-py-4 grd-h-auto"
                    style={{
                      backgroundColor: buttonBgColor || carRentalTravelPlannerDataCorporate.buttonBgColor,
                      color: buttonTextColor
                    }}>
              {buttonText || carRentalTravelPlannerDataCorporate.buttonText}
            </Button>
            <div className="grd-col-span-4 grd-flex grd-items-center grd-gap-2 grd-text-gray-500 grd-text-sm grd-font-medium dark:grd-text-white">
              <input id="differentLocation" type="checkbox"/>
              <label
                htmlFor="differentLocation">{inputDifferentLocationText || carRentalTravelPlannerDataCorporate.inputDifferentLocationText}</label>
            </div>
          </div>
        </TPCard>
      </Container>
    </Wrapper>
  );
};

export default CorporateCarRentalTravelPlanner;
