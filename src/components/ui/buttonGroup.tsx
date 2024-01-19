import {PropsWithChildren} from "react";

interface ButtonGroupProps extends PropsWithChildren {
  className?: string,
  disabled?: boolean;
}

const ButtonGroup = (props: ButtonGroupProps) => {

  let {className= "gap-2"} = props

  return (
    <div className={`button-group inline-flex ${className} ${props?.disabled ? "*:pointer-events-none select-none cursor-not-allowed" : ""}`}>
      {props?.children}
    </div>
  )
}

export default ButtonGroup