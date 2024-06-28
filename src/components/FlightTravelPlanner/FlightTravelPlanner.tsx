import React, {FC, useEffect, useRef, useState} from "react";
import LIcon from "../lucidIcon/lucidIcon";
import {FlightTravelPlannerProps} from "./FlightTravelPlannerProps";
import {flightTravelPlannerData, flightTravelPlannerStrategy} from "../../data/dummy/flighttravelplanner";
import Container from "../Container/Container";
import TPCard from "../TPCard/TPCard";
import {Wrapper,H1, H5, Button, Input} from "../ui";
import {TabButtonProps} from "../TourTravelPlanner/TourTravelPlannerProps";
import {hexIsLight} from "../../helpers/hexIsLight";

const FlightTravelPlanner:FC<FlightTravelPlannerProps> = ({
    className,
    strategy,
    design,
    inputDestinationText,
    inputReturnText,
    inputCheckinDateText,
    inputCheckoutDateText,
    inputPassengerAndCabinText,
    inputPersonText,
    inputTravelReasonText,
    disabled,
    tourType,
    onSubmit,
    tpType,
    noReason,
    tabButtons,
  }) => {

  const isAgency = tpType === "Agency"

  const defaultFlightAmount = {
    flight_0: {
      itemRotation: false
    }
  }

  const destionationRef = useRef(null)

  const [ActiveTab, setActiveTab] = useState(tourType || tabButtons && tabButtons[0].value)
  const [FlightAmounts, setFlightAmounts] = useState<any[any]>(defaultFlightAmount)

  const clearFlightAmounts = () => {
    setFlightAmounts(defaultFlightAmount)
  }

  const handleTabChange = (selectedTab: any) => {
    setActiveTab(selectedTab.value)
    clearFlightAmounts()
  }

  // storybookta prop degisikligini yakalamak icindir, sonradan silinebilir - componente yarar bir durumu yoktur.
  useEffect(() => {
    if(tourType) setActiveTab(tourType)
  }, [tourType])

  const handleOnSubmit = {}

  const rightToLeftOnClick = (flight: any) => {
    setFlightAmounts({
      ...FlightAmounts,
      [flight]: {
        ...FlightAmounts[flight],
        itemRotation: !FlightAmounts[flight]?.itemRotation
      },
    })
  }

  const addFlight = (flight: any) => {
    setFlightAmounts({
      ...FlightAmounts,
      [flight]: {
        ...FlightAmounts[flight],
        itemRotation: false
      },
    })
  }
  const removeFlight = (flight: any) => {
    const removeProperty = (dyProps: string) => ({ [dyProps]: _, ...rest }) => rest;
    const remove_random_property = removeProperty(flight);
    const removedFlightAmounts = remove_random_property(FlightAmounts)
    setFlightAmounts(removedFlightAmounts)
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
      className={`grd-flex grd-justify-center grd-items-center grd-mx-auto ${className ? className : ""}`}>
      <Container>
        <H1 style={strategy.data?.titleStyle}>{strategy.data?.title}</H1>
        <H5 style={strategy.data?.subTitleStyle} className="grd-mt-2" >{strategy.data?.subTitle}</H5>
        <TPCard
          className="grd-mt-6"
          style={{borderRadius: design?.borderRadius}}
        >
          <div className="grd-flex grd-items-center">
            <div className="grd-button-group grd-flex grd-gap-2">
              {tabButtons && tabButtons.map((list: TabButtonProps, index) => {
                const isActive = ActiveTab === list.value

                let style: React.CSSProperties = {
                  borderRadius: strategy.data?.buttonStyle?.borderRadius || design?.borderRadius,
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
            </div>
            <div className="grd-flex grd-items-center grd-gap-8 grd-ml-auto grd-font-medium grd-text-sm grd-select-none">
              {isAgency && (
                <div
                  style={{
                    color: strategy.data?.buttonStyle?.borderColor || design?.button?.borderColor
                  }}
                  className="grd-flex grd-items-center grd-text-blue-500 grd-cursor-not-allowed">
                  <p className="grd-pr-1">1 Yolcu, Ekonomi</p>
                  <LIcon className="grd-mt-0.5" size={18} name="ChevronDown"/>
                </div>
              )}
              <div className="grd-flex grd-items-center">
                <input className="grd-cursor-pointer" id="with-transfer" type="checkbox" />
                <label htmlFor="with-transfer" className="grd-text-gray-500 grd-pl-2 grd-cursor-pointer dark:grd-text-gray-200">Aktarmasız</label>
              </div>
            </div>
          </div>

          <div className={`grd-w-full grd-grid grd-group grd-items-center grd-gap-4 ${isAgency ? ActiveTab === "multi" ? " grd-grid-cols-4" : " grd-grid-cols-5" : " grd-grid-cols-4"}`}>
            {Object.values(FlightAmounts).map((flight: any, index, ) => {
              const RotationChange = flight.itemRotation
              return (
                <div className={`grd-w-full grd-grid grd-items-center grd-gap-4 ${ActiveTab === "return" ? "grd-col-span-3 grd-grid-cols-3" : "grd-col-span-4 grd-grid-cols-4"}`} key={Math.random()} >
                  {ActiveTab === "multi" && (
                    <div className="multiple-flight-title-box grd-col-span-4">
                      <p className="grd-text-black grd-font-semibold grd-text-sm -grd-mb-2 dark:grd-text-white">{index + 1}.Uçuş</p>
                    </div>
                  )}
                  <div className={`grd-relative grd-flex grd-gap-4${ActiveTab !== "multi" ? (ActiveTab === "one-way" ? " grd-col-span-3" : " grd-col-span-2") : " grd-col-span-3"}`}>
                    <Input className={`${RotationChange ? "order-3" : ""}  ${ActiveTab !== "multi"}`}
                           innerRef={destionationRef}
                           leftIcon={<LIcon size={18} name="Plane" />}
                           style={{borderRadius: design?.borderRadius}}
                           placeholder={!RotationChange ? inputDestinationText || flightTravelPlannerData.inputDestinationText : inputReturnText || flightTravelPlannerData.inputReturnText}/>
                    <div
                      onClick={() => rightToLeftOnClick(`flight_${index}`)}
                      className={`grd-absolute grd-top-1/2 grd-left-1/2 -grd-translate-x-1/2 -grd-translate-y-1/2${!RotationChange ? " -grd-rotate-180" : ""} grd-group-has-[input] grd-p-2 grd-cursor-pointer grd-text-gray-500 grd-transition 
                  hover:grd-text-blue-500 hover:grd-border-blue-100 grd-shadow-xs grd-rounded-full grd-border grd-border-gray-200 grd-bg-white grd-z-10 dark:grd-bg-dark-600 dark:grd-border-gray-800 dark:grd-text-gray-200`}>
                      <LIcon name="ArrowRightLeft" size={16} />
                    </div>
                    <Input
                      leftIcon={<LIcon size={18} className="rotate-45" name="Plane" />}
                      style={{borderRadius: design?.borderRadius}}
                      placeholder={!RotationChange ? inputReturnText || flightTravelPlannerData.inputReturnText : inputDestinationText || flightTravelPlannerData.inputDestinationText}/>
                  </div>

                  <div className={`grd-flex grd-items-center ${ActiveTab !== "return" && ActiveTab !== "multi" ? "grd-col-span-1" : ActiveTab === "multi" ? "!grd-col-span-1" : ""}`}>
                    <Input
                      leftIcon={<LIcon size={18} name="Calendar" />}
                      style={{borderRadius: design?.borderRadius}}
                      placeholder={inputCheckinDateText || flightTravelPlannerData.inputCheckinDateText}/>

                    {ActiveTab === "multi" && index >= 2 && (
                      <div
                        onClick={() => removeFlight(Object.keys(FlightAmounts)[index])}
                        className="multiple-flight-delete-icon grd-pl-3 grd-py-3 grd-text-gray-500 grd-cursor-pointer hover:grd-text-red-500 dark:grd-text-gray-200">
                        <LIcon name="X" size={18} />
                      </div>
                    )}
                  </div>

                </div>
              )
            })}
            {ActiveTab === "multi" && !isAgency && (
              <div className="flex gap-2 col-span-4 b-4">
                <div
                  onClick={() => addFlight(`flight_${Object.values(FlightAmounts).length}`)}
                  style={{
                    color: strategy.data?.buttonStyle?.borderColor || design?.button?.borderColor
                  }}
                  className="grd-inline-flex grd-items-center grd-text-blue-500 grd-cursor-pointer hover:grd-opacity-60 dark:grd-text-blue-600">
                  <LIcon name="Plus" size={20} />
                  <span className="grd-font-medium grd-text-sm">Uçuş Ekle</span>
                </div>
              </div>
            )}
            {ActiveTab === "return" && <Input leftIcon={<LIcon size={18} name="Calendar" />}
                                              style={{borderRadius: design?.borderRadius}}
                                              placeholder={inputCheckoutDateText || flightTravelPlannerData.inputCheckoutDateText}/>}
            {!isAgency && (
              <>
                <Input
                  rightIcon={<LIcon size={18} name="ChevronDown"/>}
                  style={{borderRadius: design?.borderRadius}}
                  placeholder={inputPassengerAndCabinText || flightTravelPlannerData.inputPassengerAndCabinText}/>
                <div className="grd-col-span-2 grd-flex grd-grid-cols-3 grd-gap-4">
                  <Input
                    className={noReason ? "grd-col-span-2" : ""}
                    rightIcon={<LIcon size={18} name="ChevronDown"/>}
                    style={{borderRadius: design?.borderRadius}}
                    placeholder={inputPersonText || flightTravelPlannerData.inputPersonText}/>
                  {!noReason && <Input rightIcon={<LIcon size={18} name="ChevronDown"/>}
                                       style={{borderRadius: design?.borderRadius}}
		                                   placeholder={inputTravelReasonText || flightTravelPlannerData.inputTravelReasonText}/>}
                </div>
              </>
            )}
            {ActiveTab === "multi" && isAgency && (
              <Button
                onClick={() => addFlight(`flight_${Object.values(FlightAmounts).length}`)}
                className={`grd-w-full group-[.is-disabled]:grd-cursor-not-allowed grd-col-span-1`}
                variant="outline-primary"
                style={{
                  borderRadius: strategy.data?.buttonStyle?.borderRadius || design?.borderRadius,
                  borderColor: strategy.data?.buttonStyle?.borderColor || design?.button?.borderColor,
                  color: strategy.data?.buttonStyle?.borderColor || design?.button?.borderColor
                }}

              >
                <LIcon name="Plus" size={20} />
                <span className="grd-font-medium grd-text-sm">Uçuş Ekle</span>
              </Button>
            )}
            <Button
              onClick={() => onSubmit ? onSubmit(handleOnSubmit) : null}
             className={`grd-w-full group-[.is-disabled]:grd-cursor-not-allowed grd-col-span-1`}
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
            >{strategy.data?.button || flightTravelPlannerStrategy.data.button}
            </Button>
          </div>
        </TPCard>
      </Container>
    </Wrapper>
  );
};

export default FlightTravelPlanner;
