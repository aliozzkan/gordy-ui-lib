import {
  FC,
  PropsWithChildren,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "../../../lib/utils";
import * as React from "react";

export interface DropdownProps
  extends PropsWithChildren,
    VariantProps<typeof dropdownContentVariants> {
  className?: string;
  items: any;
  title?: string;
  onSelect?(eventKey: any): void;
  placement?:
    | "topStart"
    | "topEnd"
    | "leftStart"
    | "rightStart"
    | "leftEnd"
    | "rightEnd"
    | "bottomStart"
    | "bottomEnd";
  children?: React.JSX.Element | React.JSX.Element[];
}
export interface DropDownMenuProps extends PropsWithChildren {
  className?: string;
  style?: React.CSSProperties;
  ref?: any;
  onSelect?(selectedIndex: string | undefined): void;
  children?: React.JSX.Element | React.JSX.Element[];
}
export interface DropdownItemProps extends PropsWithChildren {
  className?: string;
  onClick?(e: void): void;
  eventKey?: string | number;
  children?: React.JSX.Element | React.JSX.Element[] | string;
}

const dropdownContentVariants = cva(
  "dropdown-content grd-absolute grd-pointer-events-none grd-select-none grd-opacity-0 grd-transition-all grd-duration-400 grd-will-change-transform grd-translate-y-2",
  {
    variants: {
      placement: {
        topStart: "grd-bottom-full grd-left-0",
        topEnd: "grd-bottom-full grd-left-full",
        leftStart: "grd-right-full grd-top-0",
        rightStart: "grd-left-full grd-top-0",
        leftEnd: "grd-right-full grd-top-full",
        rightEnd: "grd-left-full grd-top-full",
        bottomStart: "grd-top-full grd-left-0",
        bottomEnd: "grd-top-full grd-left-full",
      },
    },
    defaultVariants: {
      placement: "bottomStart",
    },
  }
);

export const Dropdown = (props: DropdownProps) => {
  const {
    className = "",
    items: Items,
    onSelect,
    placement,
    title,
    children,
  } = props;

  const childrenRef = useRef(null);
  const MainDropdownRef = useRef<HTMLDivElement>(null);

  const [ShowItems, setShowItems] = useState(false);

  const handleOnClick = (e: any) => {
    return e;
  };
  const handleOnClose = (e: any) => {
    setShowItems(false);
    return e;
  };
  const handleButtonOnClick = (e: any) => {
    setShowItems(!ShowItems);
  };
  const handleOutsideClick = (e: any) => {
    if (MainDropdownRef.current && !MainDropdownRef.current.contains(e.target))
      setShowItems(false);
  };

  const handleEscPress = useCallback((event: any) => {
    if (event.key === "Escape") setShowItems(false);
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
    <div className={`grd-relative`} ref={MainDropdownRef}>
      {!title &&
        React.cloneElement(<div>{children}</div>, {
          onClick: handleButtonOnClick,
          ref: childrenRef,
        })}

      {title && (
        <button
          className="grd-text-gray-800 grd-text-sm grd-rounded-xl grd-border grd-border-gray-200 grd-px-4 grd-py-2"
          onClick={handleButtonOnClick}
          ref={childrenRef}
        >
          {title}
        </button>
      )}

      <div className="">
        {React.cloneElement(
          <Items
            className={cn(
              dropdownContentVariants({ placement, className }),
              ShowItems
                ? "grd-opacity-100 grd-pointer-events-auto grd-select-auto grd-translate-y-0"
                : ""
            )}
          />,
          { onClick: handleOnClick, onClose: handleOnClose }
        )}
      </div>
    </div>
  );
};

export const DropDownMenu = (props: DropDownMenuProps) => {
  const { className = "", style, onSelect, children } = props;

  const handleOnSelect = (e: any) => {
    let eventKey;
    const $this = e.target;
    const parentAttr = $this.parentNode.getAttribute("data-eventkey");
    const thisAttr = $this.getAttribute("data-eventkey");
    if (parentAttr) eventKey = parentAttr;
    if (thisAttr) eventKey = thisAttr;

    if (onSelect) {
      onSelect(eventKey);
    }
    return eventKey;
  };

  return (
    <div
      ref={props.ref}
      className={`${className} grd-bg-white grd-border grd-border-gray-100 grd-shadow-lg grd-min-w-[190px] grd-max-w-[240px]`}
      style={style}
    >
      {React.cloneElement(<div>{children}</div>, { onClick: handleOnSelect })}
    </div>
  );
};

const DropdownItem = (props: DropdownItemProps) => {
  const { className = "" } = props;

  const dropdownItemHandleClick = (e: any) => {
    return e;
  };

  return (
    <>
      {React.cloneElement(<div>{props.children}</div>, {
        onClick: dropdownItemHandleClick,
        "data-eventkey": props.eventKey,
        className: className,
      })}
    </>
  );
};

Dropdown.Menu = DropDownMenu;
Dropdown.Item = DropdownItem;

export default Dropdown;
