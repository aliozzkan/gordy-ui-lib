import {FC, useEffect, useRef, useState} from "react";
import LIcon from "../lucidIcon/lucidIcon";
import {FlightTravelPlannerProps} from "./FlightTravelPlannerProps";
import {flightTravelPlannerData} from "../../data/dummy/flighttravelplanner";
import Container from "../Container/Container";
import TPCard from "../TPCard/TPCard";
import {Wrapper,H1, H5, Button, Input} from "../ui";
import {TabButtonProps} from "../TourTravelPlanner/TourTravelPlannerProps";

const FlightTravelPlanner:FC<FlightTravelPlannerProps> = ({
    className,
    title,
    subTitle,
    buttonText,
    buttonBgColor,
    buttonTextColor,
    inputDestinationText,
    inputReturnText,
    inputCheckinDateText,
    inputCheckoutDateText,
    inputPassengerAndCabinText,
    inputPersonText,
    inputTravelReasonText,
    wrapperBgColor,
    wrapperWidth,
    wrapperHeight,
    disabled,
    tourType,
    onSubmit,
    noReason,
    tabButtons,
  }) => {

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
    if (!destionationRef.current!["value"]){
      return false
    }
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
    console.log(flight);
    const removeProperty = (dyProps: string) => ({ [dyProps]: _, ...rest }) => rest;
    const remove_random_property = removeProperty(flight);
    const removedFlightAmounts = remove_random_property(FlightAmounts)
    console.log(removedFlightAmounts);
    setFlightAmounts(removedFlightAmounts)
  }

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
        <H1>{title || flightTravelPlannerData.title}</H1>
        <H5 className="mt-2" >{subTitle || flightTravelPlannerData.subTitle}</H5>

        <TPCard className="mt-6">
          <div className="flex items-center">
            <div className="button-group flex gap-2">
              {tabButtons && tabButtons.map((list: TabButtonProps, index) => {
                return (
                  <Button key={index}
                          variant="outline"
                          onClick={() => handleTabChange(list)}
                          className={`text-gray-500 border-transparent
                      ${ActiveTab === list.value ? "text-primary-500 !border-primary-200 shadow-xs dark:!border-primary-900 dark:!text-primary-600 dark:bg-dark-600" : ""}`}>{list.label}</Button>
                )
              })}
            </div>
            <div className="flex items-center ml-auto cursor-pointer select-none">
              <input id="with-transfer" type="checkbox" />
              <label htmlFor="with-transfer" className="text-gray-500 text-sm font-medium pl-2 cursor-pointer dark:text-gray-200">Aktarmasız</label>
            </div>
          </div>

          <div className={`w-full grid group grid-cols-4 items-center gap-4`}>
            {Object.values(FlightAmounts).map((flight: any, index, ) => {
              const RotationChange = flight.itemRotation
              return (
                <div className={`w-full grid items-center gap-4 ${ActiveTab === "return" ? "col-span-3 grid-cols-3" : "col-span-4 grid-cols-4"}`} key={Math.random()} >
                  {ActiveTab === "multi" && (
                    <div className="multiple-flight-title-box col-span-4">
                      <p className="text-black font-semibold text-sm -mb-2 dark:text-white">{index + 1}.Uçuş</p>
                    </div>
                  )}
                  <div className={`relative flex gap-4${ActiveTab !== "multi" ? " col-span-2" : " col-span-3"}`}>
                    <Input className={`${RotationChange ? "order-3" : ""}  ${ActiveTab !== "multi"}`}
                           innerRef={destionationRef}
                           defaultValue="Istanbul"
                           leftIcon={<LIcon size={18} name="Plane" />}
                           placeholder={inputDestinationText || flightTravelPlannerData.inputDestinationText}/>
                    <div
                      onClick={() => rightToLeftOnClick(`flight_${index}`)}
                      className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2${!RotationChange ? " -rotate-180" : ""} group-has-[input] p-2 cursor-pointer text-gray-500 transition 
                  hover:text-blue-500 hover:border-primary-100 shadow-xs rounded-full border border-gray-200 bg-white z-10 dark:bg-dark-600 dark:border-gray-800 dark:text-gray-200`}>
                      <LIcon name="ArrowRightLeft" size={16} />
                    </div>
                    <Input
                      leftIcon={<LIcon size={18} className="rotate-45" name="Plane" />}
                      placeholder={!RotationChange ? inputReturnText || flightTravelPlannerData.inputReturnText : inputDestinationText || flightTravelPlannerData.inputDestinationText}/>
                  </div>

                  <div className={`flex items-center ${ActiveTab !== "return" && ActiveTab !== "multi" ? "col-span-2" : ActiveTab === "multi" ? "!col-span-1" : ""}`}>
                    <Input
                      leftIcon={<LIcon size={18} name="Calendar" />}
                      placeholder={inputCheckinDateText || flightTravelPlannerData.inputCheckinDateText}/>

                    {ActiveTab === "multi" && index >= 2 && (
                      <div
                        onClick={() => removeFlight(Object.keys(FlightAmounts)[index])}
                        className="multiple-flight-delete-icon pl-3 py-3 text-gray-500 cursor-pointer hover:text-red-500 dark:text-gray-200">
                        <LIcon name="X" size={18} />
                      </div>
                    )}
                  </div>

                </div>
              )
            })}
            {ActiveTab === "multi" && (
              <div className="flex gap-2 col-span-4 b-4">
                <div
                  onClick={() => addFlight(`flight_${Object.values(FlightAmounts).length}`)}
                  className="inline-flex items-center text-primary-500 cursor-pointer hover:opacity-60 dark:text-primary-600">
                  <LIcon name="Plus" size={20} />
                  <span className="font-medium text-sm">Uçuş Ekle</span>
                </div>
              </div>
            )}
            {ActiveTab === "return" && <Input leftIcon={<LIcon size={18} name="Calendar" />} placeholder={inputCheckoutDateText || flightTravelPlannerData.inputCheckoutDateText}/>}
            <Input
              rightIcon={<LIcon size={18} name="ChevronDown" />}
              placeholder={inputPassengerAndCabinText || flightTravelPlannerData.inputPassengerAndCabinText}/>
            <div className="col-span-2 flex grid-cols-3 gap-4">
              <Input
                className={noReason ? "col-span-2" : ""}
                rightIcon={<LIcon size={18} name="ChevronDown" />}
                placeholder={inputPersonText || flightTravelPlannerData.inputPersonText}/>
              {!noReason && <Input rightIcon={<LIcon size={18} name="ChevronDown" />} placeholder={inputTravelReasonText || flightTravelPlannerData.inputTravelReasonText}/>}
            </div>
            <Button onClick={() => onSubmit ? onSubmit(handleOnSubmit) : null}
                    className={`w-full group-[.is-disabled]:cursor-not-allowed col-span-1`} variant="primary"
                    style={{backgroundColor: buttonBgColor || flightTravelPlannerData.buttonBgColor, color: buttonTextColor}}>
              {buttonText || flightTravelPlannerData.buttonText}
            </Button>
          </div>
        </TPCard>
      </Container>
    </Wrapper>
  );
};

export default FlightTravelPlanner;
