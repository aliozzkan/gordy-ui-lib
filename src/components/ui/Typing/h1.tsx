import React, {ComponentProps} from "react";

interface H1Props extends ComponentProps<"h5">{
  className?: string;
  style?: React.CSSProperties;
}

const H1 = ({children, className, style, ...props}: H1Props) => {

  return (
      <h1
        style={style}
        className={`grd-text-slate-800 grd-font-bold grd-drop-shadow-lg dark:grd-text-white !grd-leading-[normal] grd-text-2xl @md:grd-text-3xl @xl:grd-text-[calc(var(--font-multiplier-value)*36vmax)] ${className}`}
        {...props}
      >
        {children}
      </h1>
    )
}


export default H1