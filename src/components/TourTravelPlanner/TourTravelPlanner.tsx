import {FC, useEffect, useState} from "react";
import LIcon from "../lucidIcon/lucidIcon";
import {TabButtonProps, TourTravelPlannerProps} from "./TourTravelPlannerProps";
import {tourTravelPlannerData, tourTravelPlannerStrategy} from "../../data/dummy/tourtravelplanner";
import ButtonGroup from "../ui/buttonGroup";
import TPCard from "../TPCard/TPCard";
import Container from "../Container/Container";
import {Wrapper, H1, H5, Button, Input} from "../ui";

const TourTravelPlanner:FC<TourTravelPlannerProps> = ({
    className,
    strategy,
    inputDestinationText,
    inputCheckoutDateText,
    disabled,
    tourType,
    onSubmit,
    tabButtons,
  }) => {

  const [ActiveTab, setActiveTab] = useState(tourType || tabButtons && tabButtons[0].value)
  const [ActiveLocation, setActiveLocation] = useState("")
  const [ActiveDate, setActiveDate] = useState("")

  const handleTabChange = (selectedTab: TabButtonProps) => {
    setActiveTab(selectedTab.value)
  }


  // storybookta prop degisikligini yakalamak icindir, sonradan silinebilir - componente yarar bir durumu yoktur.
  useEffect(() => {
    if(tourType) setActiveTab(tourType)
  }, [tourType])

  const handleOnSubmit = {
    ActiveTab,
    ActiveLocation,
    ActiveDate
  }
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
        <TPCard className="grd-mt-6">
          <ButtonGroup disabled={disabled}>
            {tabButtons && tabButtons.map((list: TabButtonProps, index) => {
              return (
              <Button key={index}
                      variant={ActiveTab === list.value ? "outline-primary" : "ghost"}
                      onClick={() => handleTabChange(list)}>{list.label}</Button>
              )
            })}
          </ButtonGroup>
          <div className="grd-flex grd-flex-row grd-gap-4">
            <div className="grd-w-full grd-flex grd-items-center grd-gap-4">
              <Input leftIcon={<LIcon size={20} name="Search" />}
                     onChange={(e: any) => setActiveLocation(e?.target?.value)}
                     placeholder={inputDestinationText || tourTravelPlannerData.inputDestinationText}/>
              <Input leftIcon={<LIcon size={20} name="Calendar" />}
                     onChange={(e: any) => setActiveDate(e?.target?.value)}
                     placeholder={inputCheckoutDateText || tourTravelPlannerData.inputCheckoutDateText}/>
            </div>
            <div className="grd-min-w-[124px] grd-flex grd-items-center">
              <Button onClick={() => onSubmit ? onSubmit(handleOnSubmit) : null} className="grd-w-full" variant="primary"
                      style={strategy.data?.buttonStyle}>{strategy.data?.button || tourTravelPlannerStrategy.data.button}</Button>
            </div>
          </div>
        </TPCard>
      </Container>
    </Wrapper>
  );
};

export default TourTravelPlanner;
