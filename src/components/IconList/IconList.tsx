import React, {FC} from "react";
import {IconListDummy} from "../../data/dummy/iconList";
import {MedialibraryDummy} from "../../data/dummy/medialibrary";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from "swiper/modules";

export interface IconListProps {
  maxItemLength: number;
  strategy: any;
  title?: string;
  className?: string;
  wrapperBgColor?: string;
  wrapperWidth?: string;
  wrapperHeight?: string;
  showArrows?: boolean;
  showBullets?: boolean;
}

const IconList:FC<IconListProps> = (props) => {
  const items = props?.strategy?.data?.items

  if (!items){
    return <></>
  }

  const noImage = () => {
    return "https://place-hold.it/80x80"
  }

  const swiperProps = {
    className: `w-full overflow-hidden mt-6 -mx-3 px-3 ${props.maxItemLength <= 6 ? "pb-7" : "pb-10"}`,
    spaceBetween: 16,
    speed: 700,
    slidesPerView: props.maxItemLength <= 6 ? props?.maxItemLength : 6,
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
      }} className={`icon-list relative ${props.className || ""}`}>
      <div className="container">
        <p className="text-gray-800 font-semibold text-2xl">{props.title || "Konaklama seçenekleri"}</p>

        <Swiper {...swiperProps}>
          {Array.apply(null, Array(props.maxItemLength)).map((val, _index) => {
            return (
                <SwiperSlide key={_index}
                     className={`icon-box group w-full flex flex-col items-center border border-gray-200 bg-white text-sm font-medium text-color-800 
                      cursor-pointer !transition-all hover:shadow-xl hover:text-primary-500 px-2 py-4`}
                     style={{ borderRadius: 8 }}
                >
                  <img className="w-12 h-12 object-center object-contain" src={items && items![_index]?.mediaPath || noImage()} alt={""} />
                  <span className="block mt-1 truncate max-w-full">{items && items![_index]?.text || "Test Icon"}</span>
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


export default IconList