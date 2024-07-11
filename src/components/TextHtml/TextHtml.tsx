import React, {FC} from "react";

export interface TextHtmlProps {
  content?: string;
  className?: string;
  wrapperBgColor?: string;
  wrapperWidth?: string;
  wrapperHeight?: string;
}

const TextHtml:FC<TextHtmlProps> = (props) => {

  return (
    <div
      style={{
        backgroundColor: props.wrapperBgColor,
        width :props.wrapperWidth,
        height :props.wrapperHeight,
      }} className={`text-html grd-relative ${props.className || ""}`}>
      <div className="grd-container">
        {props.content}
      </div>
    </div>
  )
}


export default TextHtml