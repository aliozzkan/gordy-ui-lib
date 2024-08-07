import { FC } from "react";
import LIcon from "../lucidIcon/lucidIcon";
import {hotelTravelPlannerStrategy, travelPlannerData} from "../../data/dummy/hoteltravelplanner"
import {HotelTravelPlannerProps} from "./HotelTravelPlannerProps";
import {Input, Button, Wrapper, H1, H5} from "../ui";
import TPCard from "../TPCard/TPCard";
import Container from "../Container/Container";
import {hexIsLight} from "../../helpers/hexIsLight";


const HotelTravelPlanner:FC<HotelTravelPlannerProps> = ({
    className,
    strategy,
    design,
    inputDestinationText,
    inputCheckoutDateText,
    inputGuestInfoText,
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
          className="grd-mt-6 !grd-flex-col @md:!grd-flex-row"
          style={{borderRadius: design?.borderRadius}}
        >
          <div className="@md:grd-w-8/12 grd-flex grd-items-center grd-gap-4 grd-flex-col @md:grd-flex-row">
            <Input inputClassName="grd-py-4" leftIcon={<LIcon size={20} name="Search" />}
                   style={{borderRadius: design?.borderRadius}}
                   placeholder={inputDestinationText || travelPlannerData.inputDestinationText}/>
            <Input inputClassName="grd-py-4" leftIcon={<LIcon size={20} name="Calendar" />}
                   style={{borderRadius: design?.borderRadius}}
                   placeholder={inputCheckoutDateText || travelPlannerData.inputCheckoutDateText}/>
          </div>
          <div className="@md:grd-w-4/12 grd-flex grd-items-center grd-gap-4 grd-flex-col @md:grd-flex-row">
            <Input inputClassName="grd-py-4" leftIcon={<LIcon size={20} name="User" />}
                   style={{borderRadius: design?.borderRadius}}
                   placeholder={inputGuestInfoText || travelPlannerData.inputGuestInfoText}/>

            <Button
              className="grd-shrink-0 @md:grd-w-[98px] grd-w-full grd-py-2.5 grd-h-auto"
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
            >{strategy.data?.button || hotelTravelPlannerStrategy.data.button}
            </Button>
          </div>
        </TPCard>
      </Container>
    </Wrapper>
  );
};

export default HotelTravelPlanner;
