import {useState} from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from "swiper/modules";

//styling
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";

import {CarouselData} from "../../data/dummy/carousel"
import LIcon from "../../components/lucid-icon/lucid-icon";

const getSliderOwnCategoryName = (id: any) => {
  const category = CarouselData.categories.find(category => category.id === id)
  return category?.name
}

const SliderCategories = (props : any) => {
  const sliderCategoryName = getSliderOwnCategoryName(props.sliderCategoryId)
  let activeCategory = props.index === 0
  if (props.activeCategoryId !== null){
    activeCategory = props.activeCategoryId == props.sliderCategoryId
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
  props.sliders.map((slider : any) => {
    // ayni kategoriden olanlari ele
    if (!categories.includes(slider.categoryId)){
      categories.push(slider.categoryId)
    }
  })
  return (
    <div className={`categories flex items-center gap-4 text-gray-500 text-base font-medium justify-center ${props.className}`}>
      {categories.map((id: any, index) => {
        return (
          <SliderCategories key={index} index={index} sliderCategoryId={id} activeCategoryId={props.activeCategoryId} categoryItemOnClick={props.itemOnClick} />
        )
      })}
    </div>
  )
}


const Sliders = (props : any) => {
  return (
    <>
      <Swiper
        className={`w-full overflow-hidden ${props.className}`}
        spaceBetween={30}
        speed={700}
        initialSlide={props?.activeSlider}
        slidesPerView={1}
        grabCursor={true}
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
        {props.sliders.map((slide : any) => {
          return (
            <SwiperSlide key={slide.uuid}>
              <img className="w-full" src={slide.imagePath} alt={`swiper img ${slide.uuid}`}/>
            </SwiperSlide>
          )
        })}
      </Swiper>
      <div className="swiper-navigation">
        <div className="swiper-button-prev">
          <LIcon name="ArrowLeft" />
        </div>
        <div className="swiper-button-next">
          <LIcon name="ArrowRight" />
        </div>
      </div>
    </>
  )
}


export const Carousel = (props: any) => {
  const [activeCategoryId, setActiveCategoryId] = useState(props.activeCategoryId)
  const [activeSlider, setActiveSlider] = useState(props.activeSliderIndex)
  const [swiper, setSwiper] = useState<any>({});
  const categoryItemOnClick = (e: any) => {
    setActiveCategoryId(e)
    const willChangeSlider = props.sliderData.findIndex((slider: any) =>slider.categoryId == e)
    swiper.slideTo(willChangeSlider, 700)
  }
  const sliderOnChange = (e: any) => {
    setActiveSlider(e.activeIndex)
    const willChangeSlider = props.sliderData[e.activeIndex].categoryId
    setActiveCategoryId(willChangeSlider as unknown as number)
  }

  return (
    <div>
      <div className="container relative flex flex-col gap-6">
        <CategoryWrapper itemOnClick={categoryItemOnClick} activeCategoryId={activeCategoryId} sliders={props.sliderData} categories={props.categoryData} />
        <Sliders sliderOnChange={sliderOnChange} activeSlider={activeSlider} sliders={props.sliderData} setSwiper={setSwiper} />
      </div>
    </div>
  )

}


export default Carousel