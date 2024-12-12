import {PropsWithChildren} from "react";
import * as React from "react";

interface WrapperProps extends PropsWithChildren {
  className?: string;
  style?: React.CSSProperties;
  disabled?: boolean;
}


const Wrapper = (props: WrapperProps) => {

  let {className = "", disabled} = props

  return (
    <div
      style={props.style}
      className={`dark:grd-bg-dark-600 grd-py-16 grd-w-full grd-max-w-full ${className}${disabled ? " *:grd-pointer-events-none grd-cursor-not-allowed" : ""}`}>
      {props?.children}
    </div>
  )


}

export default Wrapper