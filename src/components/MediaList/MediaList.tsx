import React, {FC} from "react";
import {MediaListDummy} from "../../data/dummy/mediaList";
import {MedialibraryDummy} from "../../data/dummy/medialibrary";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from "swiper/modules";

export interface MediaListProps {
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

  const MediaListForPost: number[] = [] // post service array list for medialibrary
  const strategyData = MediaListDummy.result.strategies.find(strategy => strategy.relation === "Data")
  const items = strategyData && strategyData.input.Items!
  items && items.map(item => MediaListForPost.push(item.MediaFileId))

  // post Media IDs to API => return images URL => example dummy data/dummy/medialibrary.ts
  const mediaLibraryResult = MedialibraryDummy // etc.. await getMedialibrary(MediaListForPost)

  const getMediaSrc = (mediaFileId: any) => mediaLibraryResult.find(media => media.id === mediaFileId)

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
      }} className={`accommodation_options relative ${props.className}`}>
      <div className="container">
        <p className="text-gray-800 font-semibold text-2xl">{props.title || "Popüler bölgeler"}</p>

        <Swiper {...swiperProps}>
          {Array.apply(null, Array(props.maxItemLength)).map((val, _index) => {
            return (
                <SwiperSlide key={_index}
                     className={`media-box group w-full flex flex-col items-center border border-gray-200 bg-white
                      cursor-pointer overflow-hidden !transition-all hover:shadow-xl hover:text-primary-500`}
                     style={{ borderRadius: "8px" }}
                >
                  <div className="image-wrapper w-full h-[190px]">
                    <img className="w-full h-full object-center object-cover" src={getMediaSrc(items![_index]?.MediaFileId)?.path || noImage()} alt={""} />
                  </div>
                  <div className="mt-1 w-full flex flex-col p-4">
                    <span className="text-base font-semibold text-color-800 truncate" title={items![_index]?.Text}>{items![_index]?.Text || "Test Media Text"}</span>
                    <span className="mt-0.5 text-sm font-normal text-gray-500 truncate" title={items![_index]?.subText}>{items![_index]?.subText || "Test Media subText"}</span>
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