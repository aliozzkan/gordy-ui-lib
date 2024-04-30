import { FC } from "react";
import LIcon from "../lucidIcon/lucidIcon";
import {activityTravelPlannerStrategy , activityTravelPlannerData} from "../../data/dummy/activitytravelplanner"
import {ActivityTravelPlannerProps} from "./ActivityTravelPlannerProps";
import {Input, Button, Wrapper, H1, H5} from "../ui";
import TPCard from "../TPCard/TPCard";
import Container from "../Container/Container";


const ActivityTravelPlanner:FC<ActivityTravelPlannerProps> = ({
    className,
    strategy,
    inputDestinationText,
    inputCheckoutDateText,
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
        <TPCard className="!grd-flex-row grd-mt-6">
            <Input inputClassName="grd-py-4" leftIcon={<LIcon size={20} name="Search" />}
                 placeholder={inputDestinationText || activityTravelPlannerData.inputDestinationText}/>
            <Input inputClassName="grd-py-4" leftIcon={<LIcon size={20} name="Calendar" />}
                   placeholder={inputCheckoutDateText || activityTravelPlannerData.inputCheckoutDateText}/>
            <Button
              className="grd-shrink-0 grd-w-[98px] grd-py-4 grd-h-auto"
              variant="primary"
                    style={strategy.data?.buttonStyle}>{strategy.data?.button || activityTravelPlannerStrategy.data.button}
            </Button>
        </TPCard>
      </Container>
    </Wrapper>
  );
};

export default ActivityTravelPlanner;
