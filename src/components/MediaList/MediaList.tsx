import React, {FC} from "react";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from "swiper/modules";
import LIcon from "../lucidIcon/lucidIcon";

export interface MediaListProps {
  strategy: any,
  maxItemLength: number;
  title?: string;
  className?: string;
  wrapperBgColor?: string;
  wrapperWidth?: string;
  wrapperHeight?: string;
  showArrows?: boolean;
  showBullets?: boolean;
}

const MediaList:FC<MediaListProps> = (props) => {

  const {strategy} = props
  // todo : be tarafinda fixlendikten sonra silinecek suan 0 geliyor
  const fixedHeightValue = strategy?.visual?.height === 0 ? undefined : strategy?.visual?.height

  const medias: any = []
  let itemLength = 0
  strategy?.data?.items && strategy.data.items.map((item: any) => {
    if (item?.medias) {
      medias.push(...item.medias)
      item.medias.map(() => {
        itemLength++
      })
    }
  })

  if (!medias.length && !strategy?.visual?.style && !strategy?.data?.title &&  !strategy?.data?.titleStyle) {
    return <></>
  }

  const swiperId = Math.floor(Math.random() * 1000000000000)

  const displayArrows = strategy?.visual?.arrowVisualStyle?.displayArrows
  const pagination = strategy?.visual?.paginationStyle?.swipeNavigation

  return (
    <div
      style={{
        ...strategy?.visual?.style,
        width: strategy?.visual?.width,
        height: fixedHeightValue,
      }}
      className={`media-list grd-relative grd-flex grd-justify-center grd-items-center grd-mx-auto grd-py-5 ${props.className || ""}`}>
      <div className="grd-container">
        <p
          className={`grd-text-gray-800 grd-font-semibold grd-drop-shadow-lg grd-mb-6 ${!strategy?.data?.titleStyle?.fontSize ? "grd-text-2xl" : ""}`}
          dangerouslySetInnerHTML={{ __html: strategy?.data?.title }}
          style={{fontSize: "24px", ...strategy?.data?.titleStyle}}>
        </p>

        <Swiper
          className={`grd-w-full grd-overflow-hidden ${pagination && itemLength > 4 ? "grd-pb-10" : ""} swiper-${swiperId} ${props.className || ""}`}
          spaceBetween={15}
          //style={{...strategy?.visual?.style}}
          speed={1000}
          slidesPerView={strategy?.data?.items ? itemLength >= 4 ? 4 : itemLength : 1}
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
          }>
          {medias.map((media: any, index: number) => {
            return (
                <SwiperSlide key={index}
                     className={`media-box grd-group grd-w-full grd-flex grd-flex-col grd-items-center grd-border grd-border-gray-200 grd-bg-white
                      grd-cursor-pointer grd-overflow-hidden !grd-transition-all hover:grd-shadow-xl hover:grd-text-primary-500`}
                     style={{ borderRadius: "8px" }}
                >
                  <a className="grd-block grd-w-full" href={media?.link || undefined} target={media?.actions?.target || "_self"}>
                    <div className="image-wrapper grd-h-[190px] grd-w-full" style={{backgroundColor: media?.backgroundColor}}>
                      {media?.imagePath && (
                        <img className="grd-w-full grd-h-full grd-object-center grd-object-cover" src={media?.imagePath} alt={""} />
                      )}
                    </div>

                    <div className="grd-mt-1 grd-w-full grd-flex grd-flex-col grd-p-4">
                      {!media.title && (
                        <span
                          style={{...media.subTitleStyle}}
                          className="grd-text-base grd-font-semibold grd-text-color-800 grd-truncate" title={media?.subTitle} dangerouslySetInnerHTML={{ __html: media?.subTitle }} />
                      )}
                      {media.title && (
                        <>
                          <span
                            style={{...media.titleStyle}}
                            className="grd-text-base grd-font-semibold grd-text-color-800 grd-truncate" title={media?.title} dangerouslySetInnerHTML={{ __html: media?.title }} />
                          {media?.displaySubTitle && (
                            <span
                              style={{...media.subTitleStyle}}
                              className="grd-mt-0.5 grd-text-sm grd-font-normal grd-text-gray-500 grd-truncate" title={media?.subTitle} dangerouslySetInnerHTML={{ __html: media?.subTitle }} />
                          )}
                        </>
                      )}

                    </div>
                  </a>
                </SwiperSlide>
            )
          })}
        </Swiper>

        {displayArrows && (
          <div className="swiper-navigation" style={{...strategy?.visual?.arrowVisualStyle}}>
            <div className="swiper-button-prev">
              <LIcon name="ArrowLeft"/>
            </div>
            <div className="swiper-button-next">
              <LIcon name="ArrowRight"/>
            </div>
          </div>
        )}

      </div>
    </div>
  )
}


export default MediaList