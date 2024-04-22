import React, {PropsWithChildren} from "react";

interface H1Props extends PropsWithChildren {
  className?: string,
  style?: React.CSSProperties;
}

const H1 = (props: H1Props) => {

  const {className= "", style} = props

  return (
      <h1
        style={style}
        className={`grd-text-slate-800 grd-font-bold grd-drop-shadow-lg dark:grd-text-white ${!style?.fontSize ? "grd-text-5xl " : ""}${className}`}
      >
        {props?.children}
      </h1>
    )
}


export default H1