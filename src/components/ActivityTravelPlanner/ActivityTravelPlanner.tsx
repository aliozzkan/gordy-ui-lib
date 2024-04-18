import { FC } from "react";
import LIcon from "../lucidIcon/lucidIcon";
import {activityTravelPlannerData} from "../../data/dummy/activitytravelplanner"
import {ActivityTravelPlannerProps} from "./ActivityTravelPlannerProps";
import {Input, Button, Wrapper, H1, H5} from "../ui";
import TPCard from "../TPCard/TPCard";
import Container from "../Container/Container";


const ActivityTravelPlanner:FC<ActivityTravelPlannerProps> = ({
    className,
    title,
    subTitle,
    buttonText,
    buttonBgColor,
    buttonTextColor,
    inputDestinationText,
    inputCheckoutDateText,
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
        <H1>{title || activityTravelPlannerData.title}</H1>
        <H5 className="grd-mt-2">{subTitle || activityTravelPlannerData.subTitle}</H5>
        <TPCard className="!grd-flex-row grd-mt-6">
            <Input inputClassName="grd-py-4" leftIcon={<LIcon size={20} name="Search" />}
                 placeholder={inputDestinationText || activityTravelPlannerData.inputDestinationText}/>
            <Input inputClassName="grd-py-4" leftIcon={<LIcon size={20} name="Calendar" />}
                   placeholder={inputCheckoutDateText || activityTravelPlannerData.inputCheckoutDateText}/>
            <Button
              className="grd-shrink-0 w-[98px] grd-py-4 grd-h-auto"
              variant="primary"
                    style={{backgroundColor: buttonBgColor || activityTravelPlannerData.buttonBgColor, color: buttonTextColor}}>
              {buttonText || activityTravelPlannerData.buttonText}
            </Button>
        </TPCard>
      </Container>
    </Wrapper>
  );
};

export default ActivityTravelPlanner;
