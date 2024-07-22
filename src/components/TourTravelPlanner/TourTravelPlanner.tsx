import React, {FC, useEffect, useState} from "react";
import LIcon from "../lucidIcon/lucidIcon";
import {TabButtonProps, TourTravelPlannerProps} from "./TourTravelPlannerProps";
import {tourTravelPlannerData, tourTravelPlannerStrategy} from "../../data/dummy/tourtravelplanner";
import ButtonGroup from "../ui/buttonGroup";
import TPCard from "../TPCard/TPCard";
import Container from "../Container/Container";
import {Wrapper, H1, H5, Button, Input} from "../ui";
import {hexIsLight} from "../../helpers/hexIsLight";
import LayoutContainer from "../LayoutContainer/LayoutContainer";

const TourTravelPlanner:FC<TourTravelPlannerProps> = ({
    className,
    strategy,
    design,
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

    <LayoutContainer>
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
            <ButtonGroup disabled={disabled}>
              {tabButtons && tabButtons.map((list: TabButtonProps, index) => {

                const isActive = ActiveTab === list.value

                let style: React.CSSProperties = {
                  borderRadius: strategy.data?.buttonStyle?.borderRadius || design?.borderRadius,
                  textDecoration: design?.link?.style,
                }
                if (isActive){
                  style = {
                    ...style,
                    borderColor: strategy.data?.buttonStyle?.borderColor || design?.button?.borderColor,
                    color: strategy.data?.buttonStyle?.borderColor || design?.button?.borderColor,}
                }


                return (
                  <Button key={index}
                          style={style}
                          variant={ActiveTab === list.value ? "outline-primary" : "ghost"}
                          onClick={() => handleTabChange(list)}>{list.label}</Button>
                )
              })}
            </ButtonGroup>
            <div className="grd-flex grd-gap-4 grd-flex-col @md:grd-flex-row">
              <div className="grd-w-full grd-flex grd-items-center grd-gap-4 grd-flex-col @md:grd-flex-row">
                <Input leftIcon={<LIcon size={20} name="Search" />}
                       onChange={(e: any) => setActiveLocation(e?.target?.value)}
                       style={{borderRadius: design?.borderRadius}}
                       placeholder={inputDestinationText || tourTravelPlannerData.inputDestinationText}/>
                <Input leftIcon={<LIcon size={20} name="Calendar" />}
                       onChange={(e: any) => setActiveDate(e?.target?.value)}
                       style={{borderRadius: design?.borderRadius}}
                       placeholder={inputCheckoutDateText || tourTravelPlannerData.inputCheckoutDateText}/>
              </div>
              <div className="grd-min-w-[124px] grd-flex grd-items-center">
                <Button onClick={() => onSubmit ? onSubmit(handleOnSubmit) : null} className="grd-w-full" variant="primary"
                        style={{
                          ...design?.button,
                          ...strategy.data?.buttonStyle,
                          borderRadius: strategy.data?.buttonStyle?.borderRadius || design?.borderRadius,
                          backgroundColor: strategy.data?.buttonStyle?.backgroundColor || design?.button?.backgroundColor,
                          color: (!strategy.data?.buttonStyle?.color && !design?.button?.color) ? (hexIsLight(strategy.data?.buttonStyle?.backgroundColor || design?.button?.backgroundColor)
                            ? "black"
                            : "white") : (strategy.data?.buttonStyle?.color || design?.button?.color),
                        }}
                >{strategy.data?.button || tourTravelPlannerStrategy.data.button}</Button>
              </div>
            </div>
          </TPCard>
        </Container>
      </Wrapper>
    </LayoutContainer>
  );
};

export default TourTravelPlanner;
