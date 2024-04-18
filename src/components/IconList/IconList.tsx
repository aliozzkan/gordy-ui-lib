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
    className: `grd-w-full grd-overflow-hidden grd-mt-6 -grd-mx-3 grd-px-3 ${props.maxItemLength <= 6 ? "grd-pb-7" : "grd-pb-10"}`,
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
      }} className={`icon-list grd-relative ${props.className || ""}`}>
      <div className="grd-container">
        <p className="grd-text-gray-800 grd-font-semibold grd-text-2xl">{props.title || "Konaklama seçenekleri"}</p>

        <Swiper {...swiperProps}>
          {Array.apply(null, Array(props.maxItemLength)).map((val, _index) => {
            return (
                <SwiperSlide key={_index}
                     className={`icon-box grd-group grd-w-full grd-flex grd-flex-col grd-items-center grd-border grd-border-gray-200 grd-bg-white grd-text-sm grd-font-medium grd-text-color-800 
                      grd-cursor-pointer !grd-transition-all hover:sgrd-hadow-xl hover:grd-text-primary-500 grd-px-2 grd-py-4`}
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