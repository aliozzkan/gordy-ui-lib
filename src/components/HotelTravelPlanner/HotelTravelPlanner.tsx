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
        <H5 style={strategy.data?.subTitleStyle} className="grd-mt-2" >{strategy.data?.subTitle}</H5>
        <TPCard className="!grd-flex-row grd-mt-6">
          <div className="grd-w-8/12 grd-flex grd-items-center grd-gap-4">
            <Input inputClassName="grd-py-4" leftIcon={<LIcon size={20} name="Search" />}
                 placeholder={inputDestinationText || travelPlannerData.inputDestinationText}/>
            <Input inputClassName="grd-py-4" leftIcon={<LIcon size={20} name="Calendar" />}
                   placeholder={inputCheckoutDateText || travelPlannerData.inputCheckoutDateText}/>
          </div>
          <div className="grd-w-4/12 grd-flex grd-items-center grd-gap-4">
            <Input inputClassName="grd-py-4" leftIcon={<LIcon size={20} name="User" />}
                   placeholder={inputGuestInfoText || travelPlannerData.inputGuestInfoText}/>

            <Button
              className="grd-shrink-0 grd-w-[98px] grd-py-4 grd-h-auto"
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
