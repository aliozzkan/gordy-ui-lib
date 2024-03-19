import React, {PropsWithChildren} from "react";

interface H1Props extends PropsWithChildren {
  className?: string;
  style?: React.CSSProperties;
}

const H1 = (props: H1Props) => {

  const {className= "", style} = props

  return (
      <h1 style={style} className={`text-gray-500 text-xl font-medium dark:text-white ${className}`}>
        {props?.children}
      </h1>
    )
}


export default H1