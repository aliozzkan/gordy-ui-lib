import { FC } from "react";
import { Button } from "../ui/button";
import LIcon from "../lucidIcon/lucidIcon";
import "../../index.css";
import {travelPlannerData} from "../../data/dummy/travelplanner"
import {TravelPlannerProps} from "../../components/TravelPlanner/TravelPlannerProps";


const TravelPlanner:FC<TravelPlannerProps> = ({
    className,
    title,
    subTitle,
    buttonText,
    buttonBgColor,
    buttonTextColor,
    inputDestinationText,
    inputCheckoutDateText,
    inputGuestInfoText,
    wrapperBgColor,
    wrapperWidth,
    wrapperHeight,
    disabled,
  }) => {

  return (
    <div
      style={{
        backgroundColor: wrapperBgColor,
        width :wrapperWidth,
        height :wrapperHeight,
    }}
      className={`group bg-gray-50 py-16 max-w-full ${className} ${disabled ? "is-disabled" : ""}`}>
      <div className="container">
        <h1 className={"text-slate-800 text-4xl font-bold"}>{title || travelPlannerData.title}</h1>
        <h5 className={"text-gray-500 text-xl font-medium mt-2"} >{subTitle || travelPlannerData.subTitle}</h5>
        <div className="search-bar rounded-lg border border-gray-200 bg-white flex gap-4 p-4 mt-6">
          <div className="w-8/12 flex items-center gap-4">
            <div className="input w-full flex items-center gap-2 border border-gray-200 px-3.5 py-2.5 rounded-lg text-gray-500 text-base group-[.is-disabled]:cursor-not-allowed group-[.is-disabled]:select-none">
              <LIcon size={20} name="Search" />
              <span>{inputDestinationText || travelPlannerData.inputDestinationText}</span>
            </div>
            <div className="input w-full flex items-center gap-2 border border-gray-200 px-3.5 py-2.5 rounded-lg text-gray-500 text-base group-[.is-disabled]:cursor-not-allowed group-[.is-disabled]:select-none">
              <LIcon size={20} name="Calendar" />
              <span>{inputCheckoutDateText || travelPlannerData.inputCheckoutDateText}</span>
            </div>
          </div>
          <div className="w-4/12 flex items-center gap-4">
            <div className="input w-full flex items-center gap-2 border border-gray-200 px-3.5 py-2.5 rounded-lg text-gray-500 text-base group-[.is-disabled]:cursor-not-allowed group-[.is-disabled]:select-none">
              <LIcon size={20} name="User" />
              <span>{inputGuestInfoText || travelPlannerData.inputGuestInfoText}</span>
            </div>
            <Button variant="primary"
                    style={{backgroundColor: buttonBgColor || travelPlannerData.buttonBgColor, color: buttonTextColor}}>
              {buttonText || travelPlannerData.buttonText}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelPlanner;
