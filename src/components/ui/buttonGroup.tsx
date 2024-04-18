import {PropsWithChildren} from "react";

interface ButtonGroupProps extends PropsWithChildren {
  className?: string,
  disabled?: boolean;
}

const ButtonGroup = (props: ButtonGroupProps) => {

  let {className= "grd-gap-2"} = props

  return (
    <div className={`button-group grd-inline-flex ${className} ${props?.disabled ? "*:grd-pointer-events-none grd-select-none grd-cursor-not-allowed" : ""}`}>
      {props?.children}
    </div>
  )
}

export default ButtonGroup