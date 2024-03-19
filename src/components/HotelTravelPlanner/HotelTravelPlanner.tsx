import { FC } from "react";
import LIcon from "../lucidIcon/lucidIcon";
import {travelPlannerData} from "../../data/dummy/hoteltravelplanner"
import {HotelTravelPlannerProps} from "./HotelTravelPlannerProps";
import {Input, Button, Wrapper, H1, H5} from "../ui";
import TPCard from "../TPCard/TPCard";
import Container from "../Container/Container";


const HotelTravelPlanner:FC<HotelTravelPlannerProps> = ({
    className,
    strategy,
    inputDestinationText,
    inputCheckoutDateText,
    inputGuestInfoText,
    disabled,
  }) => {

  return (
    <Wrapper
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url("${strategy.data?.backgroundImagePath}")`,
        backgroundColor: strategy.visual?.style?.backgroundColor,
        width :strategy.visual?.style?.width,
        height :strategy.visual?.style?.height === 0 ? "auto" : strategy.visual?.style?.height,
    }}
      disabled={disabled}
      className={className}>
      <Container>
        <H1 style={strategy.data?.titleStyle}>{strategy.data?.title}</H1>
        <H5 style={strategy.data?.subTitleStyle} className="mt-2" >{strategy.data?.subTitle}</H5>
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
              style={strategy.data?.buttonStyle}>{strategy.data?.button}
            </Button>
          </div>
        </TPCard>
      </Container>
    </Wrapper>
  );
};

export default HotelTravelPlanner;
