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
      className={`bg-gray-50 dark:bg-dark-600 py-16 w-full ${className}${disabled ? " *:pointer-events-none cursor-not-allowed" : ""}`}>
      {props?.children}
    </div>
  )


}

export default Wrapper