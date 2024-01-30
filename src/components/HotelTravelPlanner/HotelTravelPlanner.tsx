import { FC } from "react";
import LIcon from "../lucidIcon/lucidIcon";
import {travelPlannerData} from "../../data/dummy/hoteltravelplanner"
import {HotelTravelPlannerProps} from "./HotelTravelPlannerProps";
import {Input, Button, Wrapper, H1, H5} from "../ui";
import TPCard from "../TPCard/TPCard";
import Container from "../Container/Container";


const HotelTravelPlanner:FC<HotelTravelPlannerProps> = ({
    className,
    title,
    subTitle,
    buttonText,
    buttonBgColor,
    buttonTextColor,
    inputDestinationText,
    inputCheckoutDateText,
    inputGuestInfoText,
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
        <H1>{title || travelPlannerData.title}</H1>
        <H5 className="mt-2">{subTitle || travelPlannerData.subTitle}</H5>
        <TPCard className="!flex-row mt-6">
          <div className="w-8/12 flex items-center gap-4">
            <Input inputClassName="py-4" leftIcon={<LIcon size={20} name="Search" />}
                 placeholder={inputDestinationText || travelPlannerData.inputDestinationText}/>
            <Input inputClassName="py-4" leftIcon={<LIcon size={20} name="Calendar" />}
                   placeholder={inputCheckoutDateText || travelPlannerData.inputCheckoutDateText}/>
          </div>
          <div className="w-4/12 flex items-center gap-4">
            <Input inputClassName="py-4" leftIcon={<LIcon size={20} name="User" />}
                   placeholder={inputGuestInfoText || travelPlannerData.inputGuestInfoText}/>
            <Button
              className="shrink-0 w-[98px] py-4 h-auto"
              variant="primary"
                    style={{backgroundColor: buttonBgColor || travelPlannerData.buttonBgColor, color: buttonTextColor}}>
              {buttonText || travelPlannerData.buttonText}
            </Button>
          </div>
        </TPCard>
      </Container>
    </Wrapper>
  );
};

export default HotelTravelPlanner;
