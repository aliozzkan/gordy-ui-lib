import React, {FC, ComponentProps} from "react";
import {clsx} from "clsx";

interface LayoutContainerProps extends ComponentProps<"div"> {}

const LayoutContainer: FC<LayoutContainerProps> = ({children, className, ...props}: LayoutContainerProps) => {
  return (
    <div
      {...props}
      className={
        clsx(`grd-@container grd-w-full`, className)}>
      {children}
    </div>
  );
};

export default LayoutContainer;
