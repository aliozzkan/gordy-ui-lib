import React, {ComponentProps} from "react";

interface H5Props extends ComponentProps<"h5">{
  className?: string;
  style?: React.CSSProperties;
}

const H5 = ({children, className, style, ...props}: H5Props) => {

  return (
      <h5
        style={style}
        className={`grd-heading-h5 grd-text-gray-500 grd-font-medium grd-drop-shadow-lg dark:grd-text-white !grd-leading-[normal] grd-text-base @xl:grd-text-[calc(var(--font-multiplier-value)*20vmax)] ${className}`}
        {...props}
      >
        {children}
      </h5>
    )
}


export default H5