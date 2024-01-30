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
}

const Input = ({
     className = "",
     inputClassName = "",
     iconWrapperClassName = "",
     leftIcon,
     rightIcon,
     innerRef,
    ...args
   }: InputProps) => {

  console.log(args);
  return (
    <div className={`input-box relative w-full flex items-center gap-2 border border-gray-200 rounded-lg overflow-hidden 
    shadow-xs text-gray-500 text-base dark:border-gray-800 dark:text-gray-200 ${className}`}>
      {leftIcon && <div className={`absolute left-3.5 pointer-events-none ${iconWrapperClassName}`}>
        {leftIcon}
      </div>}
      <input
        ref={innerRef}
        className={`w-full text-sm py-2.5 outline-none dark:bg-dark-600 dark:placeholder:text-gray-200 ${inputClassName}${leftIcon ? " pl-[42px] pr-3.5" : ""}${rightIcon ? " pr-[42px] pl-3.5" : ""}`} type="text"
        {...args}
      />
      {rightIcon && <div className={`absolute right-3.5 pointer-events-none ${iconWrapperClassName}`}>
        {rightIcon}
      </div>}
    </div>
  )
}

export default Input