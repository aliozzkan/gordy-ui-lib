import React, {ComponentProps} from "react";

interface H4Props extends ComponentProps<"h4">{
  className?: string;
  style?: React.CSSProperties;
}

const H4 = ({children, className, style, ...props}: H4Props) => {

  return (
      <h4
        style={style}
        className={`grd-heading-h4 grd-text-gray-500 grd-font-medium grd-drop-shadow-lg dark:grd-text-white !grd-leading-[normal] grd-text-2xl @xl:grd-text-[calc(var(--font-multiplier-value)*24vmax)] ${className}`}
        {...props}
      >
        {children}
      </h4>
    )
}


export default H4