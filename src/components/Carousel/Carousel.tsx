import React, {FC, useState} from 'react';

import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Pagination} from "swiper/modules";

import LIcon from "../lucidIcon/lucidIcon";

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
    className={`px-4 py-2.5 rounded-lg hover:shadow-xs border hover:border-blue-300 text-nowrap cursor-pointer transition duration-300 select-none 
    ${activeCategory ? "border-primary-500 text-primary-500" : "border-transparent"}`}>
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
      className={`categories flex items-center gap-4 text-gray-500 text-base font-medium justify-center ${props.className || ""}`}>
      {categories.map((category: any, index) => {
        return (
          <SliderCategories key={index} index={index} sliderCategoryId={category?.id}
                            sliderCategoryName={category?.name} activeCategoryId={props.activeCategoryId}
                            categoryItemOnClick={props.itemOnClick}/>
        )
      })}
    </div>
  )
}


const Sliders = (props: any) => {
  return (
    <>
      <Swiper
        className={`w-full overflow-hidden ${props.className || ""}`}
        spaceBetween={30}
        speed={700}
        initialSlide={props?.activeSlider}
        slidesPerView={1}
        grabCursor={true}
        autoHeight={true}
        onSlideChange={props.sliderOnChange}
        modules={[Pagination, Navigation]}
        onInit={(ev) => {
          props.setSwiper(ev);
        }}
        navigation={{
          enabled: true,
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
      >
        {props.sliders && props.sliders.map((slide: any) => {
          return (
            <SwiperSlide className="flex items-center justify-center w-full min-h-[150px]" key={slide.imagePath}>
              <img className="max-w-full object-cover object-center" src={slide.imagePath}
                   alt={`swiper img ${slide.uuid}`}/>
            </SwiperSlide>
          )
        })}
      </Swiper>
      <div className="swiper-navigation">
        <div className="swiper-button-prev">
          <LIcon name="ArrowLeft"/>
        </div>
        <div className="swiper-button-next">
          <LIcon name="ArrowRight"/>
        </div>
      </div>
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

  const categories: any = []
  const sliders: any = []
  strategy?.data?.items && strategy.data.items.map((item: any) => {
    if (item?.sliders) {
      categories.push(item.category)
    }
  })
  strategy?.data?.items && strategy.data.items.map((item: any) => {
    if (item?.sliders) {
      item.sliders.map((slider: any) => {
        slider["category"] = item.category
      })
      sliders.push(
        ...item.sliders,
      )
    }
  })

  if (!sliders.length) {
    return <></>
  }


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
    <div className="gordy-carousel container relative flex flex-col gap-6">
      <CategoryWrapper itemOnClick={categoryItemOnClick} activeCategoryId={activeCategoryId} sliders={sliders}
                       categories={categories}/>
      <Sliders sliderOnChange={sliderOnChange} activeSlider={activeSlider} sliders={sliders} setSwiper={setSwiper}/>
    </div>
  )

}


export default Carousel