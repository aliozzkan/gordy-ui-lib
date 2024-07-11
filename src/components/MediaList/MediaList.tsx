import React, { FC } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import LIcon from "../lucidIcon/lucidIcon";
import { Wrapper } from "../ui";
import { useMediaQuery } from "usehooks-ts";
import "./MediaList.css"

export interface MediaListProps {
  strategy: any;
  className?: string;
  disabled?: boolean;
  design?: any;
}

const SWIPER_THRESHOLD = 2;

const MediaList: FC<MediaListProps> = (props) => {
  const matches = useMediaQuery("(max-width: 768px)");
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

  const isMobile = matches;
  const isNoSwiper = isMobile && itemLength <= SWIPER_THRESHOLD;

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
      <div className="grd-container">
        <p
          className={`grd-text-gray-800 grd-font-semibold grd-drop-shadow-lg grd-mb-6 ${
            !strategy?.data?.titleStyle?.fontSize ? "grd-text-2xl" : ""
          }`}
          dangerouslySetInnerHTML={{ __html: strategy?.data?.title }}
          style={{ fontSize: "24px", ...strategy?.data?.titleStyle }}
        ></p>

        {isNoSwiper && (
          <div className="grd-space-y-2 grd-mb-2">
            {medias.map((media: any, index: number) => {
              return (
                <div
                  key={index}
                  className={`media-box grd-group grd-w-full grd-flex grd-flex-col grd-items-center grd-border grd-border-gray-200 grd-bg-white
                  grd-cursor-pointer grd-overflow-hidden !grd-transition-all hover:grd-shadow-xl hover:grd-text-blue-500`}
                  style={{ borderRadius: design?.borderRadius }}
                >
                  <a
                    className="grd-block grd-w-full"
                    href={media?.itemAction?.link || undefined}
                    target={media?.itemAction?.target || "_self"}
                  >
                    <div
                      className="image-wrapper grd-flex grd-items-center grd-justify-center grd-h-[190px] grd-w-full"
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

                    <div className="grd-mt-1 grd-w-full grd-flex grd-flex-col grd-p-4">
                      {media.title && (
                        <span
                          style={{ ...media.titleStyle }}
                          className="grd-text-base grd-font-semibold grd-text-color-800 grd-truncate"
                          title={media?.title}
                          dangerouslySetInnerHTML={{ __html: media?.title }}
                        />
                      )}
                      {media?.displaySubTitle && (
                        <span
                          style={{ ...media.subTitleStyle }}
                          className="grd-mt-0.5 grd-text-sm grd-font-normal grd-text-gray-500 grd-truncate"
                          title={media?.subTitle}
                          dangerouslySetInnerHTML={{ __html: media?.subTitle }}
                        />
                      )}
                    </div>
                  </a>
                </div>
              );
            })}
          </div>
        )}

        {!isNoSwiper && (
          <Swiper
            className={`grd-w-full grd-overflow-hidden ${
              pagination && itemLength > 4 ? "grd-pb-10" : ""
            } swiper-${swiperId} ${props.className || ""}`}
            spaceBetween={15}
            style={{
              borderRadius: design?.borderRadius
            }}
            speed={1000}
            slidesPerView={
              isMobile
                ? 2
                : strategy?.data?.items
                ? itemLength >= 4
                  ? 4
                  : itemLength
                : 1
            }
            grabCursor={true}
            autoHeight={true}
            modules={[Pagination, Navigation]}
            navigation={{
              enabled: displayArrows,
              prevEl: `.swiper-${swiperId} .swiper-navigation .swiper-button-prev`,
              nextEl: `.swiper-${swiperId} .swiper-navigation .swiper-button-next`,
            }}
            pagination={
              pagination
                ? {
                    clickable: pagination,
                    dynamicBullets: true,
                    dynamicMainBullets: 4,
                  }
                : false
            }
          >
            {medias.map((media: any, index: number) => {
              return (
                <SwiperSlide
                  key={index}
                  className={`media-box grd-group grd-w-full grd-flex grd-flex-col grd-items-center grd-border grd-border-gray-200 grd-bg-white
                      grd-cursor-pointer grd-overflow-hidden !grd-transition-all hover:grd-shadow-xl hover:grd-text-blue-500`}
                  style={{ borderRadius: design?.borderRadius }}
                >
                  <a
                    className="grd-block grd-w-full"
                    href={media?.itemAction?.link || undefined}
                    target={media?.itemAction?.target || "_self"}
                  >
                    <div
                      className="image-wrapper grd-flex grd-items-center grd-justify-center grd-h-[190px] grd-w-full"
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

                    <div className="grd-mt-1 grd-w-full grd-flex grd-flex-col grd-p-4">
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
                      {media?.displaySubTitle && (
                        <span
                          style={{ ...media.subTitleStyle }}
                          className="grd-mt-0.5 grd-text-sm grd-font-normal grd-text-gray-500 grd-truncate"
                          title={media?.subTitle}
                          dangerouslySetInnerHTML={{ __html: media?.subTitle }}
                        />
                      )}
                    </div>
                  </a>
                </SwiperSlide>
              );
            })}
          </Swiper>
        )}

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
      </div>
    </Wrapper>
  );
};

export default MediaList;
