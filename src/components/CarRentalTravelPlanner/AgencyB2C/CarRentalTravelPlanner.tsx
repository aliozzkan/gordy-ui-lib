import { FC } from "react";
import LIcon from "../../lucidIcon/lucidIcon";
import {carRentalTravelPlannerAgencyStrategy, carRentalTravelPlannerDataAgency} from "../../../data/dummy/carrentaltravelplanner"
import {AgencyCarRentalTravelPlannerProps} from "./CarRentalTravelPlannerProps";
import {Input, Button, Wrapper, H1, H5} from "../../ui";
import TPCard from "../../TPCard/TPCard";
import Container from "../../Container/Container";
import {hexIsLight} from "../../../helpers/hexIsLight";


const AgencyCarRentalTravelPlanner:FC<AgencyCarRentalTravelPlannerProps> = ({
    className,
    strategy,
    design,
    inputPickupLocationText,
    inputPickupDateText,
    inputDeliveryDateText,
    inputTimeText,
    inputDifferentLocationText,
    disabled,
  }) => {

  const wrapperStyle = strategy.data?.backgroundImagePath ? {
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundImage: strategy.data?.backgroundImagePath ? `url("${strategy.data.backgroundImagePath}")` : undefined,
  } : {}

  // todo : be tarafinda fixlendikten sonra silinecek suan 0 geliyor
  const fixedHeightValue = strategy?.visual?.style?.height === 0 ? undefined : strategy?.visual?.style?.height


  return (
    <Wrapper
      style={{
        ...strategy.visual?.style,
        ...wrapperStyle,
        height: fixedHeightValue,
    }}
      disabled={disabled}
      className={className}>
      <Container>
        <H1 style={strategy.data?.titleStyle}>{strategy.data?.title}</H1>
        <H5 style={strategy.data?.subTitleStyle} className="grd-mt-2" >{strategy.data?.subTitle}</H5>
        <TPCard
          className="grd-mt-6"
          style={{borderRadius: design?.borderRadius}}
        >
          <div className="grd-flex grd-flex-row grd-gap-4">
            <div className="grd-w-4/12 grd-flex grd-items-center grd-gap-4">
              <Input inputClassName="grd-py-4" leftIcon={<LIcon size={20} name="MapPin" />}
                     style={{borderRadius: design?.borderRadius}}
                     placeholder={inputPickupLocationText || carRentalTravelPlannerDataAgency.inputPickupLocationText}/>
            </div>
            <div className="grd-w-8/12 grd-flex grd-items-center grd-gap-4">
              <div
                style={{borderRadius: design?.borderRadius}}
                className={`input-date-time-box grd-relative grd-w-full grd-flex grd-border grd-border-gray-200 grd-rounded-lg grd-overflow-hidden 
    grd-shadow-xs grd-text-gray-500 grd-text-base dark:grd-border-gray-800 dark:grd-text-gray-200`}>
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
              <div
                style={{borderRadius: design?.borderRadius}}
                className={`input-date-time-box grd-relative grd-w-full grd-flex grd-border grd-border-gray-200 grd-rounded-lg grd-overflow-hidden 
    grd-shadow-xs grd-text-gray-500 grd-text-base dark:grd-border-gray-800 dark:grd-text-gray-200`}>
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
              <Button
                className="grd-shrink-0 grd-w-[98px] grd-py-4"
                variant="primary"
                style={{
                  ...design?.button,
                  ...strategy.data?.buttonStyle,
                  borderRadius: strategy.data?.buttonStyle?.borderRadius || design?.borderRadius,
                  backgroundColor: strategy.data?.buttonStyle?.backgroundColor || design?.button?.backgroundColor,
                  color: (!strategy.data?.buttonStyle?.color && !design?.button?.color) ? (hexIsLight(strategy.data?.buttonStyle?.backgroundColor || design?.button?.backgroundColor)
                    ? "black"
                    : "white") : (strategy.data?.buttonStyle?.color || design?.button?.color),
                }}
              >{strategy.data?.button || carRentalTravelPlannerAgencyStrategy.data.button}
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
