import {PropsWithChildren} from "react";

interface ContainerProps extends PropsWithChildren {
  className?: string
}

const Container = (props: ContainerProps) => {
  let {className} = props

  return (
    <div className={`grd-container grd-px-4 @sm:grd-px-5 ${className ? className : ""}`}>
      {props?.children}
    </div>

  )
}


export default Container