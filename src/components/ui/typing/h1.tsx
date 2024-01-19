import {tourTravelPlannerData} from "../../../data/dummy/tourtravelplanner";
import {PropsWithChildren} from "react";

interface H1Props extends PropsWithChildren {
  className?: string
}

const H1 = (props: H1Props) => {

  const {className= ""} = props

  return (
      <h1 className={`text-slate-800 text-4xl font-bold dark:text-white ${className}`}>
        {props?.children}
      </h1>
    )
}


export default H1