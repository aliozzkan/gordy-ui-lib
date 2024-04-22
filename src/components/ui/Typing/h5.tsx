import React, {PropsWithChildren} from "react";

interface H1Props extends PropsWithChildren {
  className?: string;
  style?: React.CSSProperties;
}

const H1 = (props: H1Props) => {

  const {className= "", style} = props

  return (
      <h5
        style={style}
        className={`grd-text-gray-500 grd-font-medium grd-drop-shadow-lg dark:grd-text-white ${!style?.fontSize ? "grd-text-xl" : ""}${className}`}
      >
        {props?.children}
      </h5>
    )
}


export default H1