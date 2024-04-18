import React, {FC, useState} from 'react';

import {Swiper, SwiperSlide} from 'swiper/react';
import {Parallax, Navigation, Pagination} from "swiper/modules";

import LIcon from "../lucidIcon/lucidIcon";
import {Button} from "../ui";

const SliderCategories = (props: any) => {
  const sliderCategoryName = props.sliderCategoryName ? props.sliderCategoryName : props.sliderCategoryId
  let activeCategory
  if (props.activeCategoryId !== undefined) {
    activeCategory = props.activeCategoryId == props.sliderCategoryId
  } else {
    activeCategory = props.index === 0
  }
  return <div
    onClick={() => props.categoryItemOnClick(props.sliderCategoryId)}
    className={`grd-px-4 grd-py-2.5 grd-rounded-lg hover:grd-shadow-xs grd-border hover:grd-border-blue-300 grd-text-nowrap grd-cursor-pointer grd-transition grd-duration-300 grd-select-none 
    ${activeCategory ? "grd-border-primary-500 grd-text-primary-500" : "grd-border-transparent"}`}>
    {sliderCategoryName}
  </div>

}

const CategoryWrapper = (props: any) => {
  const categories: any[] = []
  props.sliders && props.sliders.map((slider: any) => {
    // ayni kategoriden olanlari ele
    const findIncludesCategory = categories.find((category: any) => {
      return category?.id === slider?.category?.categoryId
    })
    if (!findIncludesCategory) {
      categories.push({
        id: slider?.category?.categoryId,
        name: slider?.category?.categoryName
      })
    }
  })
  return (
    <div
      className={`categories grd-flex grd-items-center grd-gap-4 grd-text-gray-500 grd-text-base grd-font-medium grd-justify-center ${props.className || ""}`}>
      {categories.map((category: any, index) => {
        return (
          <SliderCategories key={category?.id || index} index={index} sliderCategoryId={category?.id}
                            sliderCategoryName={category?.name} activeCategoryId={props.activeCategoryId}
                            categoryItemOnClick={props.itemOnClick}/>
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
        className={`w-full overflow-hidden swiper-${swiperId} ${props.className || ""}`}
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
        {props.sliders && props.sliders.map((slide: any, index: number) => {
          return (
            <SwiperSlide
              key={index}
              className={`flex items-center w-full min-h-[150px] justify-center overflow-hidden`}
              style={{backgroundColor: slide?.backgroundColor}}
            >

              {(slide?.title || slide?.buttonText) && (
                <div className="relative w-full px-10 py-16 shrink-0" data-swiper-parallax="20%">
                  {slide?.title && (
                    <p data-swiper-parallax="-200" className={`text-white drop-shadow-lg ${!slide?.titleStyle?.fontSize ? "text-5xl" : ""}`} style={{fontSize: "48px", ...slide.titleStyle}} dangerouslySetInnerHTML={{ __html: slide?.title }}></p>
                    )
                  }
                  {slide?.buttonText && (
                    <a href={slide?.buttonActions?.link || undefined} target={slide?.buttonActions?.target || "_self"}>
                      <Button variant="primary" className="px-8 text-base font-medium mt-6" style={{...slide?.buttonStyle}}>{slide?.buttonText}</Button>
                    </a>
                  )
                  }
                </div>
              )}

              {slide?.imagePath && (
                <img className={`max-w-full object-cover object-center ${slide?.title || slide?.buttonText ? "absolute -z-10" : ""}`} src={slide.imagePath}
                     alt={`swiper img ${slide.uuid}`}/>
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
  activeSliderIndex?: number,
}

export const Carousel: FC<CarouselProps> = (props) => {
  const [activeCategoryId, setActiveCategoryId] = useState(props?.activeCategoryId)
  const [activeSlider, setActiveSlider] = useState(props?.activeSliderIndex)
  const [swiper, setSwiper] = useState<any>({});

  const {strategy} = props

  // todo : be tarafinda fixlendikten sonra silinecek suan 0 geliyor
  const fixedHeightValue = strategy?.visual?.height === 0 ? "auto" : strategy?.visual?.height

  const categories: any = []
  const sliders: any = []
  strategy?.data?.items && strategy.data.items.map((item: any) => {
    if (item?.sliders) {
      categories.push(item.category)
      item.sliders.map((slider: any) => {
        slider["category"] = item.category
      })
      sliders.push(
        ...item.sliders,
      )

    }
  })

  const categoryItemOnClick = (e: any) => {
    setActiveCategoryId(e)
    const willChangeSlider = sliders.findIndex((slider: any) => slider.category?.categoryId == e)
    swiper.slideTo(willChangeSlider, 700)
  }

  const sliderOnChange = (e: any) => {
    setActiveSlider(e.activeIndex)
    const willChangeSlider = sliders.length ? sliders[e.activeIndex]?.category?.categoryId : 0
    setActiveCategoryId(willChangeSlider as unknown as number)
  }


  return (
    <div className="gordy-carousel container relative flex flex-col gap-6 overflow-hidden" style={{
      ...strategy?.visual?.style,
      width: strategy?.visual?.width,
      height: fixedHeightValue,
    }}>
      {sliders.length > 0 && (
        <>
          <CategoryWrapper itemOnClick={categoryItemOnClick} activeCategoryId={activeCategoryId} sliders={sliders}
                           categories={categories}/>
          <Sliders sliderOnChange={sliderOnChange} activeSlider={activeSlider} strategy={strategy} sliders={sliders} setSwiper={setSwiper}/>
        </>
      )}

    </div>
  )

}


export default Carousel