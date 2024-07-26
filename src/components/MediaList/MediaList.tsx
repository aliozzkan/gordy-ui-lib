import React, { FC } from "react";

import {Swiper, SwiperProps, SwiperRef, SwiperSlide} from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import LIcon from "../lucidIcon/lucidIcon";
import {H4, Wrapper} from "../ui";
import "./MediaList.css"
import Container from "../Container/Container"

export interface MediaListProps {
  strategy: any;
  className?: string;
  disabled?: boolean;
  design?: any;
}

const MediaList: FC<MediaListProps> = (props) => {
  const { strategy } = props;
  const design = props?.design
  // todo : be tarafinda fixlendikten sonra silinecek suan 0 geliyor
  const fixedHeightValue =
    strategy?.visual?.height === 0 ? undefined : strategy?.visual?.height;

  //styles
  document.body.style.setProperty("--gordy-link-hover-color", design?.link?.color)
  document.body.style.setProperty("--swiper-theme-color", design?.button?.backgroundColor || "#007aff")

  const medias: any = [];
  let itemLength = 0;
  strategy?.data?.items &&
    strategy.data.items.map((item: any) => {
      if (item?.medias) {
        medias.push(...item.medias);
        item.medias.map(() => {
          itemLength++;
        });
      }
    });

  if (
    !medias.length &&
    !strategy?.visual?.style &&
    !strategy?.data?.title &&
    !strategy?.data?.titleStyle
  ) {
    return <></>;
  }

  const swiperId = Math.floor(Math.random() * 1000000000000);

  const displayArrows = strategy?.visual?.arrowVisualStyle?.displayArrows;
  const pagination = strategy?.visual?.paginationStyle?.swipeNavigation;

  let subtitleSpaces = false

  const anySubtitle = medias.find((media: any) => media?.subTitle && media?.subTitle?.length)
  const anySubtitleDisplay = medias.find((media: any) => media?.subTitle && media?.subTitle?.length && media?.displaySubTitle)
  if (anySubtitle && anySubtitleDisplay) subtitleSpaces = true

  let swiperProps: any = {
    spaceBetween: 12,
    style: {
      borderRadius: design?.borderRadius
    },
    speed: 700,
    slidesPerView: "auto",
    grabCursor: true,
    wrapperClass: medias && medias.length < 2 ? "grd-justify-center" : pagination && itemLength > 2 ? "grd-pb-10" : "",
    modules: [Pagination, Navigation],
    navigation: {
      enabled: displayArrows,
      prevEl: `.swiper-${swiperId} .swiper-navigation .swiper-button-prev`,
      nextEl: `.swiper-${swiperId} .swiper-navigation .swiper-button-next`,
    },
    pagination: pagination ? {
          clickable: pagination,
          dynamicBullets: true,
          dynamicMainBullets: 4,
        }
        : false
    ,
    className: `grd-w-full grd-overflow-hidden swiper-${swiperId} ${props.className || ""}`
  }

  let CustomTag: any = "div"
  if (medias && medias.length > 2){
    CustomTag = Swiper
  } else {
    swiperProps = {
      className: `grd-flex grd-gap-4 grd-justify-center grd-flex-col @md:grd-flex-row`
    }
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
          {medias.map((media: any, index: number) => {
            return (
              <SwiperSlide
                key={index}
                className={`${medias && medias?.length > 2 ? "grd-max-w-[164px]" : "grd-max-w-[89%]" } media-box grd-group @md:grd-max-w-[calc(33.33333%-24px)] grd-w-full grd-flex grd-flex-col grd-items-center grd-border grd-border-gray-200 grd-bg-white
                      grd-cursor-pointer grd-overflow-hidden !grd-transition-all hover:grd-shadow-xl hover:grd-text-blue-500`}
                style={{ borderRadius: design?.borderRadius }}
              >
                <a
                  className="grd-block grd-w-full"
                  href={media?.itemAction?.link || undefined}
                  target={media?.itemAction?.target || "_self"}
                >
                  <div
                    className="image-wrapper grd-flex grd-items-center grd-justify-center grd-h-[120px] @md:grd-h-[190px] grd-w-full"
                    style={{ backgroundColor: media?.backgroundColor }}
                  >
                    {media?.imagePath && (
                      <img
                        className="grd-max-w-full grd-max-h-full grd-object-center grd-object-cover"
                        src={media?.imagePath}
                        alt={""}
                      />
                    )}
                  </div>

                  <div className="grd-mt-1 grd-w-full grd-flex grd-flex-col grd-justify-center grd-p-4 grd-h-[78px]">
                    {media.title && (
                      <span
                        style={{
                          ...media.titleStyle,
                          textDecoration: design?.link?.style
                        }}
                        className="title-area grd-text-base grd-font-semibold grd-text-color-800 grd-truncate grd-transition"
                        title={media?.title}
                        dangerouslySetInnerHTML={{ __html: media?.title }}
                      />
                    )}
                    {subtitleSpaces && (
                      <span
                        style={{ ...media.subTitleStyle }}
                        className="grd-mt-0.5 grd-text-sm grd-font-normal grd-text-gray-500 grd-truncate"
                        title={media?.displaySubTitle ? media?.subTitle : undefined}
                        dangerouslySetInnerHTML={{ __html: media?.displaySubTitle ? media?.subTitle : undefined }}
                      />
                    )}
                  </div>
                </a>
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
