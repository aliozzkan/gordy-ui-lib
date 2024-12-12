import {PropsWithChildren} from "react";
import * as React from "react";

interface TPCardProps extends PropsWithChildren {
  className?: string
  style?: React.CSSProperties;
}


const TPCard = (props: TPCardProps) => {
  let {className, style} = props

  return (
    <div
      className={`tp-card grd-flex grd-flex-col grd-rounded-lg grd-border grd-border-gray-200 dark:grd-border-gray-800 grd-shadow-xxl grd-bg-white dark:grd-bg-dark-600 grd-gap-4 grd-p-4 ${className}`}
      style={style}
    >
      {props?.children}
    </div>
  )

}

export default TPCard