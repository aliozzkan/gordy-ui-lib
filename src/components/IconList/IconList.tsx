import React, {FC} from "react";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Parallax, Navigation, Pagination } from "swiper/modules";
import LIcon from "../lucidIcon/lucidIcon";
import {Button} from "../ui";

export interface IconListProps {
  maxItemLength: number;
  strategy: any;
  className?: string;
}

const IconList:FC<IconListProps> = (props) => {

  const {strategy, maxItemLength} = props

  // todo : be tarafinda fixlendikten sonra silinecek suan 0 geliyor
  const fixedHeightValue = strategy?.visual?.style?.height === 0 ? "auto" : strategy?.visual?.style?.height

  const items = strategy?.data?.items || strategy?.visual
  const displayArrows = strategy?.visual?.arrowVisualStyle?.displayArrows
  const pagination = strategy?.visual?.paginationStyle?.swipeNavigation
  const swiperId = Math.floor(Math.random() * 1000000000000)

  if (!items){
    return <></>
  }

  const noImage = () => {
    return "https://assets-v2.lottiefiles.com/a/490bc92a-1170-11ee-9e35-0f6eacef4099/DBwCBrM6eQ.gif"
  }

  const swiperProps = {
    className: `grd-w-full grd-overflow-hidden grd-mt-6 -grd-mx-3 grd-px-3 ${maxItemLength <= 6 ? "grd-pb-7" : "grd-pb-10"}`,
    spaceBetween: 16,
    speed: 700,
    slidesPerView: maxItemLength <= 6 ? props?.maxItemLength : 6,
    grabCursor:true,
    modules: [Parallax, Pagination, Navigation],
    navigation: {
    enabled: displayArrows,
      prevEl: `.swiper-${swiperId} .swiper-navigation .swiper-button-prev`,
      nextEl: `.swiper-${swiperId} .swiper-navigation .swiper-button-next`,
  },
    pagination: pagination ? {
        clickable: pagination,
        dynamicBullets: true,
        dynamicMainBullets: 4,
      } : false
  }

  return (
    <div
      style={{
        ...strategy?.visual?.style,
        width: strategy?.visual?.width,
        height: fixedHeightValue,
      }}
      className={`icon-list grd-relative ${props.className || ""}`}>
      <div className="grd-container">
        <p data-swiper-parallax="-200"
           className={`grd-text-gray-800 grd-font-semibold grd-drop-shadow-lg ${!strategy?.visual?.titleStyle?.fontSize ? "grd-text-2xl" : ""}`}
           dangerouslySetInnerHTML={{ __html: strategy?.data?.title }}
           style={{fontSize: "24px", ...strategy?.visual?.titleStyle}}>
        </p>


        <Swiper {...swiperProps}>
          {Array.apply(null, Array(props.maxItemLength)).map((val, _index) => {
            return (
                <SwiperSlide key={_index}
                >
                  <a className={`icon-box grd-group grd-w-full grd-flex grd-flex-col grd-items-center grd-border grd-border-gray-200 grd-bg-white grd-text-sm grd-font-medium grd-text-color-800 
                      grd-cursor-pointer grd-overflow-hidden !grd-transition-all hover:grd-shadow-xl hover:grd-text-primary-500 grd-px-2 grd-py-4`}
                     style={{
                       ...items![_index]?.style,
                       borderRadius: 8
                      }}
                     href={items![_index]?.link || undefined}
                     target={items![_index]?.actions?.target || "_self"}>
                    <img className="grd-w-12 grd-h-12 grd-object-center grd-object-contain" src={items && items![_index]?.mediaPath || noImage()} alt={""} />
                    <span className="grd-block grd-mt-1 grd-truncate grd-max-w-full">{items && items![_index]?.text || "null"}</span>
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


export default IconList