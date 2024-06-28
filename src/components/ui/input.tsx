import React from "react";

interface InputProps {
  className?: string
  inputClassName?: string
  iconWrapperClassName?: string
  leftIcon?: React.ReactElement
  rightIcon?: React.ReactElement
  innerRef?: React.RefObject<any>
  onChange?(e: any): void
  placeholder?: string
  defaultValue?: string
  style?: any
}

const Input = ({
     className = "",
     inputClassName = "",
     iconWrapperClassName = "",
     leftIcon,
     rightIcon,
     innerRef,
     style,
    ...args
   }: InputProps) => {

  return (
    <div
      className={`input-box grd-relative grd-w-full grd-flex grd-items-center grd-gap-2 grd-border grd-border-gray-200 grd-rounded-lg grd-overflow-hidden 
      grd-shadow-xs grd-text-gray-500 grd-text-base dark:grd-border-gray-800 dark:grd-text-gray-200 ${className}`}
      style={style}
    >
      {leftIcon && <div className={`!grd-absolute !grd-left-3.5 !grd-pointer-events-none ${iconWrapperClassName}`}>
        {leftIcon}
      </div>}
      <input
        ref={innerRef}
        className={`!grd-w-full !grd-text-sm !grd-py-2.5 !grd-outline-none dark:grd-bg-dark-600 grd-border-none dark:grd-placeholder:grd-text-gray-200 ${inputClassName}${leftIcon ? " !grd-pl-[42px] !grd-pr-3.5" : ""}${rightIcon ? " !grd-pr-[42px] !grd-pl-3.5" : ""}`} type="text"
        {...args}
      />
      {rightIcon && <div className={`!grd-absolute !grd-right-3.5 !grd-pointer-events-none ${iconWrapperClassName}`}>
        {rightIcon}
      </div>}
    </div>
  )
}

export default Input