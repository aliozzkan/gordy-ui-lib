import {FC, PropsWithChildren, useCallback, useEffect, useRef, useState} from "react";
import {cva, VariantProps} from "class-variance-authority";
import {cn} from "../../../lib/utils";
import * as React from "react";

export interface DropdownProps extends PropsWithChildren,
  VariantProps<typeof dropdownContentVariants>  {
  className?: string
  items: any
  title?: string
  onSelect?(eventKey: any): void
  placement?: "topStart" | "topEnd" | "leftStart" | "rightStart" | "leftEnd" | "rightEnd" | "bottomStart" | "bottomEnd"
  children?: React.JSX.Element | React.JSX.Element[]
}
export interface DropDownMenuProps extends PropsWithChildren {
  className?: string
  style?: React.CSSProperties;
  ref?: any
  onSelect?(selectedIndex: string | undefined): void
  children?: React.JSX.Element | React.JSX.Element[]
}
export interface DropdownItemProps extends PropsWithChildren {
  className?: string
  onClick?(e: void): void
  eventKey?: string | number
  children?: React.JSX.Element | React.JSX.Element[] | string

}


const dropdownContentVariants = cva(
  "dropdown-content absolute pointer-events-none select-none opacity-0 transition-all duration-400 will-change-transform translate-y-2",
  {
    variants: {
      placement: {
        topStart:"bottom-full left-0",
        topEnd:"bottom-full left-full",
        leftStart:"right-full top-0",
        rightStart:"left-full top-0",
        leftEnd:"right-full top-full",
        rightEnd: "left-full top-full",
        bottomStart: "top-full left-0",
        bottomEnd: "top-full left-full",
      },
    },
    defaultVariants: {
      placement: "bottomStart",
    },
  }
)


export const Dropdown = (props: DropdownProps) => {
  const {className= "", items: Items, onSelect, placement, title,  children} = props


  const childrenRef = useRef(null)
  const MainDropdownRef = useRef<HTMLDivElement>(null);

  const [ShowItems, setShowItems] = useState(false)

  const handleOnClick = (e: any) => {
    return e
  }
  const handleOnClose = (e: any) => {
    setShowItems(false)
    return e
  }
  const handleButtonOnClick = (e: any) => {
    setShowItems(!ShowItems)
  }
  const handleOutsideClick = (e: any) => {
    if (MainDropdownRef.current && !MainDropdownRef.current.contains(e.target)) setShowItems(false)
  };

  const handleEscPress = useCallback((event: any) => {
    if (event.key === "Escape") setShowItems(false)
  }, []);




  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleEscPress);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscPress);
    };
  });

  return (
    <div className={`relative`} ref={MainDropdownRef}>
      {!title && React.cloneElement(<div>{children}</div> , { onClick: handleButtonOnClick , ref: childrenRef} ) }

      {title && <button className="text-gray-800 text-sm rounded-xl border border-gray-200 px-4 py-2" onClick={handleButtonOnClick} ref={childrenRef}>{title}</button> }

      <div className="">
        {React.cloneElement(<Items className={cn(dropdownContentVariants({ placement, className }), ShowItems ? "opacity-100 pointer-events-auto select-auto translate-y-0" : "")}/>, {onClick: handleOnClick, onClose: handleOnClose})}
      </div>

    </div>
  )
}

export const DropDownMenu = (props: DropDownMenuProps) => {

  const {className = "", style,onSelect, children} = props

  const handleOnSelect = (e: any) => {
    let eventKey
    const $this = e.target
    const parentAttr = $this.parentNode.getAttribute("data-eventkey")
    const thisAttr = $this.getAttribute("data-eventkey")
    if (parentAttr) eventKey = parentAttr
    if (thisAttr) eventKey = thisAttr

    if (onSelect) {
      onSelect(eventKey)
    }
    return eventKey
  }

  return (
    <div ref={props.ref} className={`${className} bg-white border border-gray-100 shadow-lg min-w-[190px] max-w-[240px]`} style={style}>
      {React.cloneElement(<div>{children}</div>, { onClick: handleOnSelect})}
    </div>
  )
}

const DropdownItem = (props: DropdownItemProps) => {

  const {className = ""} = props

  const dropdownItemHandleClick = (e: any) => {
    return e
  }

  return (
    <>
      {React.cloneElement(<div>{props.children}</div>, { onClick: dropdownItemHandleClick, "data-eventkey": props.eventKey, className: className})}
    </>
  )

}

Dropdown.Menu = DropDownMenu
Dropdown.Item = DropdownItem

export default Dropdown