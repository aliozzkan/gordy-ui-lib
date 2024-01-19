import {PropsWithChildren} from "react";

interface ContainerProps extends PropsWithChildren {
  className?: string
}

const Container = (props: ContainerProps) => {
  let {className} = props

  return (
    <div className={`container ${className}`}>
      {props?.children}
    </div>

  )
}


export default Container