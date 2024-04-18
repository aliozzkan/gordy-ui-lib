import {PropsWithChildren} from "react";

interface ContainerProps extends PropsWithChildren {
  className?: string
}

const Container = (props: ContainerProps) => {
  let {className} = props

  return (
    <div className={`grd-container ${className}`}>
      {props?.children}
    </div>

  )
}


export default Container