import React, { FC } from "react";
import Container from "../Container/Container";
import { H1, Wrapper } from "../ui";
import "../../utils/quill/quill.core.css";
import "./TextHtml.css";

export interface TextHtmlProps {
  strategy?: any;
  className?: string;
  disabled?: boolean;
  design?: any;
}

const TextHtml: FC<TextHtmlProps> = (props) => {
  const { strategy } = props;
  const design = props?.design;

  const wrapperStyle = strategy.data?.backgroundImagePath
    ? {
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundImage: strategy.data?.backgroundImagePath
          ? `url("${strategy.data.backgroundImagePath}")`
          : undefined,
      }
    : {};

  const fixedHeightValue =
    strategy?.visual?.style?.height === 0
      ? undefined
      : strategy?.visual?.style?.height;

  return (
    <Wrapper
      style={{
        ...strategy?.visual?.style,
        ...wrapperStyle,
        height: fixedHeightValue,
      }}
      disabled={props?.disabled}
      className={`text-html ql-snow grd-relative grd-flex grd-justify-center grd-items-center grd-mx-auto grd-py-5 ${
        props.className || ""
      }`}
    >
      <Container
        style={{ borderRadius: design?.borderRadius }}
        className="ql-editor grd-text-gray-600"
      >
        <H1
          style={strategy.data?.titleStyle}
          dangerouslySetInnerHTML={{ __html: strategy?.data?.title }}
        />
        <div
          className="mt-6"
          dangerouslySetInnerHTML={{ __html: strategy?.data?.html }}
        />
      </Container>
    </Wrapper>
  );
};

export default TextHtml;
