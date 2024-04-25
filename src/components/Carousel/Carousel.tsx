import React, {FC, useEffect, useRef, useState} from 'react';

import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Pagination, Parallax} from "swiper/modules";

import LIcon from "../lucidIcon/lucidIcon";
import {Button} from "../ui";

const SliderCategories = (props: any) => {
  const categoryInfo = props.categoryInfo
  const sliderCategoryName = categoryInfo?.name ? categoryInfo?.name : categoryInfo?.id
  return <div
    hidden={!categoryInfo?.visible}
    onClick={() => props.categoryItemOnClick(props.categoryInfo?.id)}
    className={`grd-px-4 grd-py-2.5 grd-rounded-lg hover:grd-shadow-xs grd-border hover:grd-border-blue-300 grd-text-nowrap grd-cursor-pointer grd-transition grd-duration-300 grd-select-none 
    ${props?.isActive ? "grd-border-primary-500 grd-text-primary-500" : "grd-border-transparent"}`}>
    {sliderCategoryName}
  </div>

}

const CategoryWrapper = (props: any) => {
  const categories: any[] = []
  const itemOnClick = props?.itemOnClick
  const items = props?.items
  items && items.map((item: any) => {
    // ayni kategoriden olanlari ele
    const findIncludesCategory = categories.find((category: any) => {
      return category?.id === item?.category?.categoryId
    })
    if (!findIncludesCategory) {
      categories.push({
        id: item?.category?.categoryId,
        name: item?.category?.categoryName,
        order: item?.category?.categoryOrder,
        visible: item?.category?.categoryVisible
      })
    }
  })
  let orderedStrategyItems = categories.sort((a, b) => (a.order > b.order ? 1 : -1))

  const getActiveCategory = () => {
    return orderedStrategyItems && orderedStrategyItems?.find(category => {
      return category?.id === props?.activeCategoryId
    })
  }
  const activeIndex = getActiveCategory()
  return (
    <div
      className={`categories grd-flex grd-items-center grd-gap-4 grd-text-gray-500 grd-text-base grd-font-medium grd-justify-center ${props.className || ""}`}>
      {orderedStrategyItems.map((category: any, index) => {
        return (
          <SliderCategories
            key={category?.id || index}
            index={index}
            isActive={activeIndex ? activeIndex?.id === category?.id : index === 0}
            categoryInfo={category}
            categoryItemOnClick={itemOnClick}
          />
        )
      })}
    </div>
  )
}

const Sliders = (props: any) => {

  const {strategy} = props

  const swiperId = Math.floor(Math.random() * 1000000000000)

  const displayArrows = strategy?.visual?.arrowVisualStyle?.displayArrows
  const pagination = strategy?.visual?.paginationStyle?.swipeNavigation
  return (
    <>
      <Swiper
        className={`grd-w-full grd-overflow-hidden swiper-${swiperId} ${props.className || ""}`}
        spaceBetween={30}
        style={{...strategy?.visual?.style}}
        speed={1000}
        parallax={true}
        initialSlide={props?.activeSlider}
        slidesPerView={1}
        grabCursor={true}
        autoHeight={true}
        onSlideChange={props.sliderOnChange}
        modules={[Parallax, Pagination, Navigation]}
        onInit={(ev) => {
          props.setSwiper(ev);
        }}
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
        {props?.sliders && props?.sliders.map((slide: any, index: number) => {
          return (
            <SwiperSlide
              key={index}
              className={`grd-flex grd-items-center grd-w-full grd-min-h-[150px] grd-justify-center grd-overflow-hidden`}
              style={{backgroundColor: slide?.backgroundColor}}
            >

              {(slide?.title || slide?.buttonText) && (
                <div className="grd-relative grd-w-full grd-px-10 grd-py-16 grd-shrink-0" data-swiper-parallax="20%">
                  {slide?.title && (
                    <p data-swiper-parallax="-200" className={`grd-text-white grd-drop-shadow-lg ${!slide?.titleStyle?.fontSize ? "grd-text-5xl" : ""}`} style={{fontSize: "48px", ...slide.titleStyle}} dangerouslySetInnerHTML={{ __html: slide?.title }}></p>
                    )
                  }
                  {slide?.buttonText && (
                    <a href={slide?.buttonActions?.link || undefined} target={slide?.buttonActions?.target || "_self"}>
                      <Button variant="primary" className="grd-px-8 grd-text-base grd-font-medium grd-mt-6" style={{...slide?.buttonStyle}}>{slide?.buttonText}</Button>
                    </a>
                  )
                  }
                </div>
              )}

              {slide?.imagePath && (
                <img className={`grd-max-w-full grd-object-cover grd-object-center ${slide?.title || slide?.buttonText ? "grd-absolute -grd-z-10" : ""}`} src={slide.imagePath}
                     alt={`grd-swiper img ${slide.uuid}`}/>
              )}

            </SwiperSlide>
          )
        })}
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
      </Swiper>
    </>
  )
}

export interface CarouselProps {
  strategy: any,
  activeCategoryId?: number,
}

export const Carousel: FC<CarouselProps> = (props) => {
  const [activeCategoryId, setActiveCategoryId] = useState(props?.activeCategoryId)
  const [swiper, setSwiper] = useState<any>({});

  const {strategy} = props

  // todo : be tarafinda fixlendikten sonra silinecek suan 0 geliyor
  const fixedHeightValue = strategy?.visual?.height === 0 ? undefined : strategy?.visual?.height
  let orderedStrategyItems = strategy?.data?.items?.sort((a:any, b:any) => (a.category?.categoryOrder > b.category?.categoryOrder ? 1 : -1))
  const categories: any = [],
    sliders: any = []
  orderedStrategyItems && orderedStrategyItems?.map((item: any) => {
    if (item?.sliders) {
      sliders.push(...item.sliders)
    }
    if (item?.category){
      categories.push(item.category)
    }
  })

  const categoryItemOnClick = (e: any) => {
    setActiveCategoryId(e)
    const itemIndex = categories.findIndex((category: any) => category?.categoryId == e),
      willChangeSlider = orderedStrategyItems && orderedStrategyItems[itemIndex - 1]?.sliders?.length
    let slideTo = 0
    if (willChangeSlider){slideTo = willChangeSlider}
    swiper.slideTo(slideTo, 700)
  }

  const sliderOnChange = (e: any) => {
    orderedStrategyItems.map((item: any) => {
      item.sliders.map((slider: any) => {
        if (slider?.Id === sliders[e.activeIndex]?.Id) setActiveCategoryId(item?.category?.categoryId)
      })
    })
  }


  return (
    <div className="gordy-carousel grd-container grd-relative grd-flex grd-flex-col grd-gap-6 grd-overflow-hidden" style={{
      ...strategy?.visual?.style,
      width: strategy?.visual?.width,
      height: fixedHeightValue,
    }}>
      {sliders.length > 0 && (
        <>
          <CategoryWrapper activeCategoryId={activeCategoryId} itemOnClick={categoryItemOnClick} items={orderedStrategyItems}/>
          <Sliders sliderOnChange={sliderOnChange} sliders={sliders} strategy={strategy} setSwiper={setSwiper}/>
        </>
      )}
    </div>
  )

}


export default Carousel