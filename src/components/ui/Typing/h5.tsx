import React, {PropsWithChildren} from "react";

interface H1Props extends PropsWithChildren {
  className?: string;
  style?: React.CSSProperties;
}

const H1 = (props: H1Props) => {

  const {className= "", style} = props

  return (
      <h1 style={style} className={`grd-text-gray-500 grd-text-xl grd-font-medium dark:grd-text-white ${className}`}>
        {props?.children}
      </h1>
    )
}


export default H1