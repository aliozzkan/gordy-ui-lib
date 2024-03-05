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
    className: `overflow-hidden mt-6 -mx-3 px-3 ${props.maxItemLength <= 4 ? "pb-7" : "pb-10"}`,
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
      }} className={`media-list relative ${props.className || ""}`}>
      <div className="container">
        <p className="text-gray-800 font-semibold text-2xl">{props.title || "Popüler bölgeler"}</p>

        <Swiper {...swiperProps}>
          {Array.apply(null, Array(props.maxItemLength)).map((val, index) => {
            return (
                <SwiperSlide key={index}
                     className={`media-box group w-full flex flex-col items-center border border-gray-200 bg-white
                      cursor-pointer overflow-hidden !transition-all hover:shadow-xl hover:text-primary-500`}
                     style={{ borderRadius: "8px" }}
                >
                  <div className="image-wrapper w-full h-[190px]">
                    <img className="w-full h-full object-center object-cover" src={medias[index]?.imagePath || noImage()} alt={""} />
                  </div>

                  <div className="mt-1 w-full flex flex-col p-4">
                    {!medias[index]?.title && (
                      <span className="text-base font-semibold text-color-800 truncate" title={medias[index]?.subTitle}>{medias[index]?.subTitle || "Test Media subText"}</span>
                    )}
                    {medias[index]?.title && (
                      <>
                        <span className="text-base font-semibold text-color-800 truncate" title={medias[index]?.title}>{medias[index]?.title || "Test Media Text"}</span>
                        {medias[index]?.displaySubTitle && (
                          <span className="mt-0.5 text-sm font-normal text-gray-500 truncate" title={medias[index]?.subTitle}>{medias[index]?.subTitle || "Test Media subText"}</span>
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