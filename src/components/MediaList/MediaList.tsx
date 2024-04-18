import React, {FC} from "react";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from "swiper/modules";

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

  const medias: any = []
  strategy?.data?.items && strategy.data.items.map((item: any) => {
    if (item?.medias) {
      item.medias.map((slider: any) => {
        slider["category"] = item.category
      })
      medias.push(
        ...item.medias,
      )
    }
  })

  if (!medias.length) {
    return <></>
  }


  const noImage = () => {
    return "https://place-hold.it/340x190"
  }

  const swiperProps = {
    className: `grd-overflow-hidden grd-mt-6 -grd-mx-3 grd-px-3 ${props.maxItemLength <= 4 ? "grd-pb-7" : "grd-pb-10"}`,
    spaceBetween: 15,
    speed: 700,
    slidesPerView: props.maxItemLength <= 4 ? props?.maxItemLength : 4,
    grabCursor:true,
    modules: [Pagination, Navigation],
    navigation:{
      enabled: props.showArrows !== undefined ? props.showArrows : true,
      prevEl: ".swiper-navigation .swiper-button-prev",
      nextEl: ".swiper-navigation .swiper-button-next",
    },
    pagination:{
      enabled: props.showBullets !== undefined ? props.showBullets : true,
      clickable: true,
      dynamicBullets: true,
    },
  }


  return (
    <div
      style={{
        backgroundColor: props.wrapperBgColor,
        width :props.wrapperWidth,
        height :props.wrapperHeight,
      }} className={`media-list grd-relative ${props.className || ""}`}>
      <div className="grd-container">
        <p className="grd-text-gray-800 grd-font-semibold grd-text-2xl">{props.title || "Popüler bölgeler"}</p>

        <Swiper {...swiperProps}>
          {Array.apply(null, Array(props.maxItemLength)).map((val, index) => {
            return (
                <SwiperSlide key={index}
                     className={`media-box grd-group grd-w-full grd-flex grd-flex-col grd-items-center grd-border grd-border-gray-200 grd-bg-white
                      cursor-pointer grd-overflow-hidden !grd-transition-all hover:grd-shadow-xl hover:grd-text-primary-500`}
                     style={{ borderRadius: "8px" }}
                >
                  <div className="image-wrapper grd-w-full grd-h-[190px]">
                    <img className="grd-w-full grd-h-full grd-object-center grd-object-cover" src={medias[index]?.imagePath || noImage()} alt={""} />
                  </div>

                  <div className="grd-mt-1 grd-w-full grd-flex grd-flex-col grd-p-4">
                    {!medias[index]?.title && (
                      <span className="grd-text-base grd-font-semibold grd-text-color-800 grd-truncate" title={medias[index]?.subTitle}>{medias[index]?.subTitle || "Test Media subText"}</span>
                    )}
                    {medias[index]?.title && (
                      <>
                        <span className="grd-text-base grd-font-semibold grd-text-color-800 grd-truncate" title={medias[index]?.title}>{medias[index]?.title || "Test Media Text"}</span>
                        {medias[index]?.displaySubTitle && (
                          <span className="grd-mt-0.5 grd-text-sm grd-font-normal grd-text-gray-500 grd-truncate" title={medias[index]?.subTitle}>{medias[index]?.subTitle || "Test Media subText"}</span>
                        )}
                      </>
                    )}

                  </div>
                </SwiperSlide>
            )
          })}
        </Swiper>

        {props.showArrows && (
          <div className="swiper-navigation">
            <div className="swiper-button-prev"/>
            <div className="swiper-button-next"/>
          </div>
        )}

      </div>
    </div>
  )
}


export default MediaList