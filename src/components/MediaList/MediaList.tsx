import React, { FC } from "react";

import { Swiper, SwiperProps, SwiperRef, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import LIcon from "../lucidIcon/lucidIcon";
import { H4, Wrapper } from "../ui";
import "./MediaList.css";
import Container from "../Container/Container";
import AdvancedLink from "../ui/advanced-link";

export interface MediaListProps {
  strategy: any;
  className?: string;
  disabled?: boolean;
  design?: any;
}

const MediaList: FC<MediaListProps> = (props) => {
  const { strategy } = props;
  const design = props?.design;
  // todo : be tarafinda fixlendikten sonra silinecek suan 0 geliyor
  const fixedHeightValue =
    strategy?.visual?.height === 0 ? undefined : strategy?.visual?.height;

  //styles
  document.body.style.setProperty(
    "--gordy-link-hover-color",
    design?.link?.color
  );
  document.body.style.setProperty(
    "--swiper-theme-color",
    design?.button?.backgroundColor || "#007aff"
  );

  let itemLength = strategy?.children && strategy?.children?.length || 0;

  if (
    !strategy?.children &&
    !strategy?.visual?.style &&
    !strategy?.data?.title &&
    !strategy?.data?.titleStyle
  ) {
    return <></>;
  }

  /*const activeCategoryMedias = strategy?.children?.filter((child: any) => (child.data?.category?.categoryVisible))*/
  const sortLikeCategoryId = strategy?.children?.sort((a:any, b:any) => (a.data?.category?.categoryId - b.data?.category?.categoryId))

  const swiperId = Math.floor(Math.random() * 1000000000000);

  const displayArrows = strategy?.visual?.arrowVisualStyle?.displayArrows;
  const pagination = strategy?.visual?.paginationStyle?.swipeNavigation;

  let subtitleSpaces = false;

  const anySubtitle = strategy?.children?.find(
    (media: any) => {
      const thisSubText = media?.children?.find((child: any) => child?.name === "Text" && child?.visual?.settings?.className === "subTextComponent")
      return thisSubText?.data?.text && thisSubText?.data?.text?.length
    }
  );
  const anySubtitleDisplay = strategy?.children?.find(
    (media: any) => {
      const thisSubText = media?.children?.find((child: any) => child?.name === "Text" && child?.visual?.settings?.className === "subTextComponent")
      thisSubText?.data?.text && thisSubText?.data?.text?.length
      return thisSubText?.data?.text && thisSubText?.data?.text?.length && thisSubText?.visual?.style?.display !== "none"
    }
  );
  if (anySubtitle && anySubtitleDisplay) subtitleSpaces = true;

  let swiperProps: any = {
    spaceBetween: 12,
    style: {
      borderRadius: design?.borderRadius,
    },
    speed: 700,
    slidesPerView: "auto",
    grabCursor: true,
    wrapperClass:
      strategy?.children && strategy?.children.length < 2
        ? "grd-justify-center"
        : pagination && itemLength > 2
        ? "grd-pb-10"
        : "",
    modules: [Pagination, Navigation],
    navigation: {
      enabled: displayArrows,
      prevEl: `.swiper-${swiperId} .swiper-navigation .swiper-button-prev`,
      nextEl: `.swiper-${swiperId} .swiper-navigation .swiper-button-next`,
    },
    pagination: pagination
      ? {
          clickable: pagination,
          dynamicBullets: true,
          dynamicMainBullets: 4,
        }
      : false,
    className: `grd-w-full grd-overflow-hidden swiper-${swiperId} ${
      props.className || ""
    }`,
  };

  let CustomTag: any = "div";
  if (strategy?.children && strategy?.children.length > 2) {
    CustomTag = Swiper;
  } else {
    swiperProps = {
      className: `grd-flex grd-gap-4 grd-justify-center grd-flex-col @md:grd-flex-row`,
    };
  }

  return (
    <Wrapper
      style={{
        ...strategy?.visual?.style,
        width: strategy?.visual?.width,
        height: fixedHeightValue,
      }}
      disabled={props?.disabled}
      className={`media-list grd-relative grd-flex grd-justify-center grd-items-center grd-mx-auto grd-py-5 ${
        props.className || ""
      }`}
    >
      <Container>
        <H4
          className={`title-heading h4 grd-text-gray-800 grd-drop-shadow-lg grd-mb-6 ${
            !strategy?.data?.titleStyle?.fontSize ? "grd-text-2xl" : ""
          }`}
          dangerouslySetInnerHTML={{ __html: strategy?.data?.title }}
          style={{ fontSize: "24px", ...strategy?.data?.titleStyle }}
        />

        <CustomTag {...swiperProps}>
          {sortLikeCategoryId?.map((media: any, index: number) => {
            const thisImage = media?.children?.find((child: any) => child?.name === "Image")
            const thisText = media?.children?.find((child: any) => child?.name === "Text" && child?.visual?.settings?.className === "textComponent")
            const thisSubText = media?.children?.find((child: any) => child?.name === "Text" && child?.visual?.settings?.className === "subTextComponent")
            const thisHyperLink = media?.children?.find((child: any) => child?.name === "Components.Atom.Hyperlink")
            return (
              <SwiperSlide
                key={index}
                className={`${
                  strategy?.children && strategy?.children?.length > 2
                    ? "grd-max-w-[164px]"
                    : "grd-max-w-[89%]"
                } media-box grd-group @md:grd-max-w-[calc(33.33333%-24px)] grd-w-full grd-flex grd-flex-col grd-items-center grd-border grd-border-gray-200 grd-bg-white
                      grd-cursor-pointer grd-overflow-hidden !grd-transition-all hover:grd-shadow-xl hover:grd-text-blue-500`}
                style={{ borderRadius: design?.borderRadius }}
              >
                <AdvancedLink
                  className="grd-block grd-w-full"
                  href={thisHyperLink?.data?.href || undefined}
                  target={thisHyperLink?.data?.target || "_blank"}
                >
                  <div
                    className="image-wrapper grd-flex grd-items-center grd-justify-center grd-h-[120px] @md:grd-h-[190px] grd-w-full"
                    style={thisImage?.visual?.style}
                  >
                    {thisImage?.data?.src && (
                      <img
                        className="grd-max-w-full grd-max-h-full grd-object-center grd-object-cover"
                        src={thisImage?.data?.src}
                        alt={thisImage?.data?.name}
                      />
                    )}
                  </div>

                  <div className="grd-mt-1 grd-w-full grd-flex grd-flex-col grd-justify-center grd-p-4 grd-h-[78px]">
                    {thisText?.data?.text && (
                      <span
                        style={{
                          ...thisText?.visual?.style,
                          textDecoration: design?.link?.style,
                        }}
                        className="title-area grd-text-base grd-font-semibold grd-text-color-800 grd-truncate grd-transition"
                        title={thisText?.data?.text}
                        dangerouslySetInnerHTML={{ __html: thisText?.data?.text }}
                      />
                    )}
                    {subtitleSpaces && (
                      <span
                        style={{ ...media.subTitleStyle }}
                        className="grd-mt-0.5 grd-text-sm grd-font-normal grd-text-gray-500 grd-truncate"
                        title={
                          thisSubText?.visual?.style?.display !== "none" ? thisSubText?.data?.text : undefined
                        }
                        dangerouslySetInnerHTML={{
                          __html: thisSubText?.visual?.style?.display !== "none"
                            ? thisSubText?.data?.text
                            : undefined,
                        }}
                      />
                    )}
                  </div>
                </AdvancedLink>
              </SwiperSlide>
            );
          })}
        </CustomTag>

        {displayArrows && (
          <div
            className="swiper-navigation"
            style={{ ...strategy?.visual?.arrowVisualStyle }}
          >
            <div className="swiper-button-prev">
              <LIcon name="ArrowLeft" />
            </div>
            <div className="swiper-button-next">
              <LIcon name="ArrowRight" />
            </div>
          </div>
        )}
      </Container>
    </Wrapper>
  );
};

export default MediaList;
