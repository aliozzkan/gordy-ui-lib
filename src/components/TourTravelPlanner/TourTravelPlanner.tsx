import {FC, useEffect, useState} from "react";
import LIcon from "../lucidIcon/lucidIcon";
import {TabButtonProps, TourTravelPlannerProps} from "./TourTravelPlannerProps";
import {tourTravelPlannerData} from "../../data/dummy/tourtravelplanner";
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
        <TPCard className="mt-6">
          <ButtonGroup disabled={disabled}>
            {tabButtons && tabButtons.map((list: TabButtonProps, index) => {
              return (
              <Button key={index}
                      variant="outline"
                      onClick={() => handleTabChange(list)}
                      className={`text-gray-500 border-transparent
                      ${ActiveTab === list.value ? "text-primary-500 !border-primary-200 shadow-xs dark:!border-primary-900 dark:!text-primary-600 dark:bg-dark-600" : ""}`}>{list.label}</Button>
              )
            })}
          </ButtonGroup>
          <div className="flex flex-row gap-4">
            <div className="w-full flex items-center gap-4">
              <Input leftIcon={<LIcon size={20} name="Search" />}
                     onChange={(e: any) => setActiveLocation(e?.target?.value)}
                     placeholder={inputDestinationText || tourTravelPlannerData.inputDestinationText}/>
              <Input leftIcon={<LIcon size={20} name="Calendar" />}
                     onChange={(e: any) => setActiveDate(e?.target?.value)}
                     placeholder={inputCheckoutDateText || tourTravelPlannerData.inputCheckoutDateText}/>
            </div>
            <div className="min-w-[124px] flex items-center">
              <Button onClick={() => onSubmit ? onSubmit(handleOnSubmit) : null} className="w-full" variant="primary"
                      style={strategy.data?.buttonStyle}>{strategy.data?.button}</Button>
            </div>
          </div>
        </TPCard>
      </Container>
    </Wrapper>
  );
};

export default TourTravelPlanner;
