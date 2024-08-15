import {PropsWithChildren} from "react";

interface WrapperProps extends PropsWithChildren {
  className?: string;
  style?: any;
  disabled?: boolean;
}


const Wrapper = (props: WrapperProps) => {

  let {className = "", disabled} = props

  return (
    <div
      style={props.style}
      className={`dark:grd-bg-dark-600 grd-py-16 grd-w-full ${className}${disabled ? " *:grd-pointer-events-none grd-cursor-not-allowed" : ""}`}>
      {props?.children}
    </div>
  )


}

export default Wrapper