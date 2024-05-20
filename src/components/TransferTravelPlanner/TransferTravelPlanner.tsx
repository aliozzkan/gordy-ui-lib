import {FC, useEffect, useRef, useState} from "react";
import LIcon from "../lucidIcon/lucidIcon";
import {TransferTravelPlannerProps} from "./TransferTravelPlannerProps";
import {transferTravelPlannerData, transferTravelPlannerStrategy} from "../../data/dummy/transfertravelplanner";
import Container from "../Container/Container";
import TPCard from "../TPCard/TPCard";
import {Wrapper,H1, H5, Button, Input} from "../ui";
import {TabButtonProps} from "../TourTravelPlanner/TourTravelPlannerProps";
import {carRentalTravelPlannerDataAgency} from "../../data/dummy/carrentaltravelplanner";

const TransferTravelPlanner:FC<TransferTravelPlannerProps> = ({
    className,
    strategy,
    inputDestinationText,
    inputReturnText,
    inputCheckinDateText,
    inputCheckoutDateText,
    inputPassengerAmountText,
    inputPassengerText,
    inputTravelReasonText,
    disabled,
    tourType,
    onSubmit,
    tpType,
    noReason,
    tabButtons,
  }) => {

  const isAgency = tpType === "Agency"

  const defaultTransferAmount = {
    transfer_0: {
      itemRotation: false
    }
  }

  const destionationRef = useRef(null)

  const [ActiveTab, setActiveTab] = useState(tourType || tabButtons && tabButtons[0].value)
  const [TransferAmounts, setTransferAmounts] = useState<any[any]>(defaultTransferAmount)

  const clearTransferAmounts = () => {
    setTransferAmounts(defaultTransferAmount)
  }

  const handleTabChange = (selectedTab: any) => {
    setActiveTab(selectedTab.value)
    clearTransferAmounts()
  }

  // storybookta prop degisikligini yakalamak icindir, sonradan silinebilir - componente yarar bir durumu yoktur.
  useEffect(() => {
    if(tourType) setActiveTab(tourType)
  }, [tourType])

  const handleOnSubmit = {}

  const rightToLeftOnClick = (transfer: any) => {
    setTransferAmounts({
      ...TransferAmounts,
      [transfer]: {
        ...TransferAmounts[transfer],
        itemRotation: !TransferAmounts[transfer]?.itemRotation
      },
    })
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
          <div className="grd-flex grd-items-center">
            <div className="grd-button-group grd-flex grd-gap-2">
              {tabButtons && tabButtons.map((list: TabButtonProps, index) => {
                return (
                  <Button key={index}
                          variant="outline"
                          onClick={() => handleTabChange(list)}
                          className={`grd-text-gray-500 grd-border-transparent
                      ${ActiveTab === list.value ? "grd-text-primary-500 !grd-border-primary-200 grd-shadow-xs dark:!grd-border-primary-900 dark:!grd-text-primary-600 dark:grd-bg-dark-600" : ""}`}>{list.label}</Button>
                )
              })}
            </div>
          </div>

          <div className={`grd-w-full grd-grid grd-group grd-grid-cols-12 grd-items-center grd-gap-4`}>
            {Object.values(TransferAmounts).map((transfer: any, index, ) => {
              const RotationChange = transfer.itemRotation
              return (
                <div className={`grd-w-full grd-grid grd-items-center grd-gap-4 
                  ${ActiveTab === "return" ? isAgency ? "grd-col-span-12" : "grd-col-span-6" : isAgency ? "grd-col-span-6" : "grd-col-span-9"}`}
                   key={Math.random()} >
                  <div className={`grd-relative grd-flex grd-w-full grd-gap-4`}>
                    <Input className={`${RotationChange ? "order-3" : ""}  ${ActiveTab !== "return"}`}
                           innerRef={destionationRef}
                           leftIcon={<LIcon size={18} name="MapPin" />}
                           placeholder={!RotationChange ? inputDestinationText || transferTravelPlannerData.inputDestinationText : inputReturnText || transferTravelPlannerData.inputReturnText}/>
                    <div
                      onClick={() => rightToLeftOnClick(`transfer_${index}`)}
                      className={`grd-absolute grd-top-1/2 grd-left-1/2 -grd-translate-x-1/2 -grd-translate-y-1/2${!RotationChange ? " -grd-rotate-180" : ""} grd-group-has-[input] grd-p-2 grd-cursor-pointer grd-text-gray-500 grd-transition 
                  hover:grd-text-blue-500 hover:grd-border-primary-100 grd-shadow-xs grd-rounded-full grd-border grd-border-gray-200 grd-bg-white grd-z-10 dark:grd-bg-dark-600 dark:grd-border-gray-800 dark:grd-text-gray-200`}>
                      <LIcon name="ArrowRightLeft" size={16} />
                    </div>
                    <Input
                      leftIcon={<LIcon size={18} className="rotate-45" name="MapPin" />}
                      placeholder={!RotationChange ? inputReturnText || transferTravelPlannerData.inputReturnText : inputDestinationText || transferTravelPlannerData.inputDestinationText}/>
                  </div>
                </div>
              )
            })}
            <div className={`input-date-time-box grd-relative grd-w-full grd-flex grd-border grd-border-gray-200 grd-rounded-lg grd-overflow-hidden 
                      grd-shadow-xs grd-text-gray-500 grd-text-base dark:grd-border-gray-800 dark:grd-text-gray-200
                       ${ActiveTab === "return" ? isAgency ? "grd-col-span-4" : "grd-col-span-3" : isAgency ? "grd-col-span-3" : "grd-col-span-3"}
                      `}>
              <Input
                className="grd-border-none !grd-w-7/12"
                inputClassName="grd-py-4 grd-pl-10"
                iconWrapperClassName="!grd-left-3"
                leftIcon={<LIcon size={20} name="Calendar" />}
                placeholder={inputDestinationText || transferTravelPlannerData.inputCheckinDateText}/>
              <div className="grd-line grd-border-l grd-border-gray-200 dark:grd-border-gray-800" />
              <Input
                className="grd-border-none !grd-w-5/12"
                inputClassName="grd-py-4 grd-pr-7"
                leftIcon={ActiveTab === "return" && isAgency ? <LIcon size={20} name="Clock" /> : undefined}
                rightIcon={<LIcon size={20} name="ChevronDown" />}
                placeholder={carRentalTravelPlannerDataAgency.inputTimeText}/>
            </div>
            {ActiveTab === "return" && (
              <div className={`input-date-time-box grd-relative grd-w-full grd-flex grd-border grd-border-gray-200 grd-rounded-lg grd-overflow-hidden 
                      grd-shadow-xs grd-text-gray-500 grd-text-base dark:grd-border-gray-800 dark:grd-text-gray-200 
                      ${isAgency ? "grd-col-span-4" : "grd-col-span-3"}`}>
                <Input
                  className="grd-border-none !grd-w-7/12"
                  inputClassName="grd-py-4 grd-pl-10"
                  iconWrapperClassName="!grd-left-3"
                  leftIcon={<LIcon size={20} name="Calendar" />}
                  placeholder={inputCheckoutDateText || transferTravelPlannerData.inputCheckoutDateText}/>
                <div className="grd-line grd-border-l grd-border-gray-200 dark:grd-border-gray-800" />
                <Input
                  className="grd-border-none !grd-w-5/12"
                  inputClassName="grd-py-4 grd-pr-7"
                  leftIcon={ActiveTab === "return" && isAgency ? <LIcon size={20} name="Clock" /> : undefined}
                  rightIcon={<LIcon size={20} name="ChevronDown" />}
                  placeholder={carRentalTravelPlannerDataAgency.inputTimeText}/>
              </div>
            )}
            {!isAgency && (
                <Input
                  className={"grd-col-span-3"}
                  rightIcon={<LIcon size={18} name="ChevronDown" />}
                  placeholder={inputPassengerAmountText || transferTravelPlannerData.inputPassengerAmountText}/>
            )}
            <div className={`grd-flex grd-gap-4
                 ${ActiveTab === "return" ? isAgency ? "grd-col-span-2" : "grd-col-span-3" : isAgency ? "grd-col-span-2" : "grd-col-span-3"}
            `}>  {/*grd-grid-cols-3*/}
              <Input
                //className={noReason ? "grd-col-span-2" : ""}
                leftIcon={<LIcon size={18} name="User" />}
                rightIcon={<LIcon size={18} name="ChevronDown" />}
                placeholder={inputPassengerText || isAgency ? transferTravelPlannerData.inputPassengerTextAgency : transferTravelPlannerData.inputPassengerTextCorporate}/>
            </div>
            {!isAgency && (
              <>
                {!noReason && <Input
		              className={"grd-col-span-3"}
		              rightIcon={<LIcon size={18} name="ChevronDown" />}
		              placeholder={inputTravelReasonText || transferTravelPlannerData.inputTravelReasonText}/>}
              </>
            )}
            <Button
              className={`grd-py-4
                 ${ActiveTab === "return" ? isAgency ? "grd-col-span-2" : "grd-col-span-3" : isAgency ? "grd-col-span-1" : "grd-col-span-3"}
              `}
              variant="primary"
              style={strategy.data?.buttonStyle}>{strategy.data?.button || transferTravelPlannerStrategy.data.button}
            </Button>
          </div>
        </TPCard>
      </Container>
    </Wrapper>
  );
};

export default TransferTravelPlanner;
