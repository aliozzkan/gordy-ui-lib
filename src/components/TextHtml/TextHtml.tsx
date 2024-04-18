import React, {FC, useState} from "react";
import ReactQuill from 'react-quill';
import EditorToolbar, { modules, formats } from "./EditorToolbar";
import 'react-quill/dist/quill.snow.css';

export interface TextHtmlProps {
  content?: string;
  getContent?(content : any): any;
  className?: string;
  wrapperBgColor?: string;
  wrapperWidth?: string;
  wrapperHeight?: string;
}

const TextHtml:FC<TextHtmlProps> = (props) => {

  const [Content, setContent] = useState(props.content);

  return (
    <div
      style={{
        backgroundColor: props.wrapperBgColor,
        width :props.wrapperWidth,
        height :props.wrapperHeight,
      }} className={`text-html grd-relative ${props.className || ""}`}>
      <div className="grd-container">
        <EditorToolbar />
        <ReactQuill
          theme="snow"
          value={Content}
          onChange={(value) => {
            setContent(value)
            if (props?.getContent){
              props.getContent(value)
            }
          }}
          placeholder={"Write something awesome..."}
          modules={modules}
          formats={formats}
        />
      </div>
    </div>
  )
}


export default TextHtml