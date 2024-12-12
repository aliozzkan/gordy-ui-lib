import {PropsWithChildren} from "react";
import * as React from "react";

interface ContainerProps extends PropsWithChildren {
  className?: string,
  style?: React.CSSProperties;
}

const Container = (props: ContainerProps) => {
  let {className, style} = props

  return (
    <div style={style} className={`grd-container grd-px-4 @sm:grd-px-5 ${className ? className : ""}`}>
      {props?.children}
    </div>

  )
}


export default Container