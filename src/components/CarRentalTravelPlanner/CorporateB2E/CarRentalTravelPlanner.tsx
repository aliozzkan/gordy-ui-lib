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
        <H5 className="mt-2">{subTitle || carRentalTravelPlannerDataCorporate.subTitle}</H5>
        <TPCard className="mt-6">

          <div className={`w-full grid grid-cols-4 items-center gap-4`}>
            <Input className="col-span-2" inputClassName="py-4" leftIcon={<LIcon size={20} name="MapPin"/>}
                   placeholder={inputPickupLocationText || carRentalTravelPlannerDataCorporate.inputPickupLocationText}/>
            <div className={`input-date-time-box relative w-full flex border border-gray-200 rounded-lg overflow-hidden 
    shadow-xs text-gray-500 text-base dark:border-gray-800 dark:text-gray-200 ${className}`}>
              <Input
                className="border-none !w-7/12"
                inputClassName="py-4 pl-10"
                iconWrapperClassName="!left-3"
                leftIcon={<LIcon size={20} name="Calendar"/>}
                placeholder={inputPickupDateText || carRentalTravelPlannerDataCorporate.inputPickupDateText}/>
              <div className="line border-l border-gray-200 dark:border-gray-800"/>
              <Input
                className="border-none !w-5/12"
                inputClassName="py-4 pr-7"
                rightIcon={<LIcon size={20} name="ChevronDown"/>}
                placeholder={inputTimeText || carRentalTravelPlannerDataCorporate.inputTimeText}/>
            </div>
            <div className={`input-date-time-box relative w-full flex border border-gray-200 rounded-lg overflow-hidden 
    shadow-xs text-gray-500 text-base dark:border-gray-800 dark:text-gray-200 ${className}`}>
              <Input
                className="border-none !w-7/12"
                inputClassName="py-4 pl-10"
                iconWrapperClassName="!left-3"
                leftIcon={<LIcon size={20} name="Calendar"/>}
                placeholder={inputDeliveryDateText || carRentalTravelPlannerDataCorporate.inputDeliveryDateText}/>
              <div className="line border-l border-gray-200 dark:border-gray-800"/>
              <Input
                className="border-none !w-5/12"
                inputClassName="py-4 pr-7"
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
                    className="shrink-0 py-4 h-auto"
                    style={{
                      backgroundColor: buttonBgColor || carRentalTravelPlannerDataCorporate.buttonBgColor,
                      color: buttonTextColor
                    }}>
              {buttonText || carRentalTravelPlannerDataCorporate.buttonText}
            </Button>
            <div className="col-span-4 flex items-center gap-2 text-gray-500 text-sm font-medium dark:text-white">
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
