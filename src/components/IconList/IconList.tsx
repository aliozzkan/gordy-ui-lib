import React, { FC } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import LIcon from "../lucidIcon/lucidIcon";
import {H4, Wrapper} from "../ui";
import Container from "../Container/Container";
import "./IconList.css"

export interface IconListProps {
  maxItemLength: number;
  strategy: any;
  className?: string;
  disabled?: boolean;
  design?: any;
}

const IconList: FC<IconListProps> = (props) => {
  const { strategy, maxItemLength } = props;
  const design = props?.design

  //styles
  document.body.style.setProperty("--gordy-link-hover-color", design?.link?.color)
  document.body.style.setProperty("--swiper-theme-color", design?.button?.backgroundColor || "#007aff")

  // todo : be tarafinda fixlendikten sonra silinecek suan 0 geliyor
  const fixedHeightValue =
    strategy?.visual?.style?.height === 0
      ? undefined
      : strategy?.visual?.style?.height;

  const items = strategy?.data?.items
  const display = items || strategy?.visual;
  const displayArrows = strategy?.visual?.arrowVisualStyle?.displayArrows;
  const pagination = strategy?.visual?.paginationStyle?.swipeNavigation;
  const swiperId = Math.floor(Math.random() * 1000000000000);

  if (!display) {
    return <></>;
  }

  const noImage = () => {
    return "https://assets-v2.lottiefiles.com/a/490bc92a-1170-11ee-9e35-0f6eacef4099/DBwCBrM6eQ.gif";
  };


  return (
    <Wrapper
      style={{
        ...strategy?.visual?.style,
        height: fixedHeightValue,
      }}
      disabled={props?.disabled}
      className={`icon-list grd-relative grd-flex grd-justify-center grd-items-center grd-mx-auto grd-py-5 ${
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
        <Swiper {...{
          className: `grd-w-full grd-overflow-hidden grd-mt-6 swiper-${swiperId} ${
            pagination && items && items.length > 6
              ? "grd-pb-10"
              : ""
          }`,
          spaceBetween: 12,
          speed: 700,
          slidesPerView: "auto",
          freeMode: true,
          grabCursor: true,
          modules: [Pagination, Navigation],
          navigation: {
            enabled: displayArrows,
            prevEl: `.swiper-${swiperId} .swiper-navigation .swiper-button-prev`,
            nextEl: `.swiper-${swiperId} .swiper-navigation .swiper-button-next`,
          },
          pagination: pagination
            ? {
              clickable: true,
              dynamicBullets: true,
              dynamicMainBullets: 4,
            }
            : false,
        }}>
          {Array.apply(null, Array(maxItemLength)).map((val, _index) => {
            return (
              <SwiperSlide className="grd-max-w-[106px] @sm:grd-max-w-[160px] grd-select-none"
                           key={_index}>
                <a
                  className={`icon-box grd-group grd-w-full grd-flex grd-flex-col grd-items-center grd-border grd-border-gray-200 grd-bg-white grd-text-sm grd-font-medium grd-text-color-800 
                      grd-cursor-pointer grd-overflow-hidden !grd-transition-all hover:grd-shadow-xl hover:grd-text-blue-500 grd-px-2 grd-py-4`}
                  style={{
                    ...items![_index]?.style,
                    borderRadius: design?.borderRadius,
                  }}
                  href={items![_index]?.url || undefined}
                  target={items![_index]?.target || "_blank"}
                >
                  <img
                    className="grd-w-12 grd-h-12 grd-object-center grd-object-contain"
                    src={(items && items![_index]?.mediaPath) || noImage()}
                    alt={""}
                  />
                  <span style={{
                    textDecoration: design?.link?.style,
                  }} className={`grd-block grd-mt-1 grd-truncate grd-max-w-full`}>
                    {(items && items![_index]?.text) || "null"}
                  </span>
                </a>
              </SwiperSlide>
            );
          })}
        </Swiper>

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

export default IconList;
