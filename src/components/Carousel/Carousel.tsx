import React, {FC, useEffect, useRef, useState} from 'react';

// import Swiper core and required modules
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, A11y, Parallax, Pagination } from "swiper/modules"

import LIcon from "../lucidIcon/lucidIcon";
import {Button} from "../ui";
import {hexIsLight} from "../../helpers/hexIsLight";
import Container from "../Container/Container";
import AdvancedLink from '..//ui/advanced-link';

const SliderCategories = (props: any) => {
  const categoryInfo = props.categoryInfo
  const style = props.style
  const activeItemStyle = props.activeItemStyle
  const sliderCategoryName = categoryInfo?.name ? categoryInfo?.name : categoryInfo?.id

  let styles = {
    ...style,
  }

  if (props?.isActive){
    styles = {
      ...styles,
      ...activeItemStyle,
    }
  }

  return <div
    hidden={!categoryInfo?.visible}
    onClick={() => props.categoryItemOnClick(props.categoryInfo?.id)}
    style={{
      ...styles,
    }}
    className={`grd-px-4 grd-py-2.5 grd-rounded-lg hover:grd-shadow-xs grd-border hover:grd-border-gray-300 grd-text-nowrap grd-cursor-pointer grd-transition grd-duration-300 grd-select-none 
    ${props?.isActive ? "grd-border-blue-500 grd-text-blue-500" : "grd-border-transparent"}`}>
    {sliderCategoryName}
  </div>

}

const CategoryWrapper = (props: any) => {
  const categories: any[] = []
  const itemOnClick = props?.itemOnClick
  const itemStyle = props?.itemStyle
  const activeItemStyle = props?.activeItemStyle
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
        order: item?.category?.order,
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
      className={`categories grd-items-center grd-gap-4 grd-text-gray-500 grd-text-base grd-font-medium grd-justify-center ${props.className || ""}`}>
      {orderedStrategyItems.map((category: any, index) => {
        return (
          <SliderCategories
            key={category?.id || index}
            index={index}
            isActive={activeIndex ? activeIndex?.id === category?.id : index === 0}
            categoryInfo={category}
            categoryItemOnClick={itemOnClick}
            style={itemStyle}
            activeItemStyle={activeItemStyle}
          />
        )
      })}
    </div>
  )
}

const Sliders = (props: any) => {

  const {strategy} = props

  const design = props?.design

  const sliderTextAreaRef = useRef<any>([])

  const swiperId = Math.floor(Math.random() * 1000000000000)

  const items = strategy?.data?.items
  const displayArrows = strategy?.visual?.arrowVisualStyle?.displayArrows
  const pagination = strategy?.visual?.paginationStyle?.swipeNavigation

  //styles
  document.body.style.setProperty("--swiper-theme-color", design?.button?.backgroundColor || "#007aff")

  useEffect(() => {
    if (sliderTextAreaRef.current){
      sliderTextAreaRef.current.map((textArea: any) => {
        const height = textArea.clientHeight
        textArea.parentNode.style.minHeight = `${height}px`
      })
    }
  }, [sliderTextAreaRef.current])


  return (
    <>
      <Swiper
        className={`grd-w-full mx-0 grd-overflow-hidden grd-transition-all swiper-${swiperId} ${props.className || ""}`}
        //style={{...strategy?.visual?.style}}
        //speed={1000}
        parallax={false}
        spaceBetween={12}
        wrapperClass={pagination && items.length ? "grd-pb-10" : ""}
        slidesPerView={"auto"}
        speed={1000}
        freeMode={true}
        initialSlide={props?.activeSliderIndex || 0}
        //slidesPerView={1}
        grabCursor={true}
        style={props?.style}
        autoHeight={true}
        onSlideChange={props.sliderOnChange}
        modules={[Parallax, Pagination, A11y, Navigation]}
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
          let CustomTag: any = "div"
          if(slide?.buttonStyle?.display === "none" && slide?.buttonActions?.link) CustomTag = AdvancedLink

          return (
            <SwiperSlide
              key={index}
              className={`grd-flex @md:grd-items-center grd-max-w-[91.666667%] @sm:grd-max-w-full !grd-h-[200px] @sm:!grd-h-auto @sm:grd-min-h-[240px] grd-overflow-hidden`}
              style={{
                ...props?.slideStyle,
                backgroundColor: slide?.backgroundColor,
            }}
            >
              {(slide?.title || slide?.buttonText) && (
                <CustomTag target={slide?.buttonActions?.target || "_self"} href={slide?.buttonActions?.link || undefined}>
                  <div
                    ref={el => sliderTextAreaRef.current[index] = el}
                    className="grd-h-full grd-mb-0 @lg:grd-mb-5 @md:grd-h-auto grd-flex grd-items-start grd-flex-col grd-px-4 @md:grd-px-5 @lg:grd-px-10 grd-py-4 @md:grd-py-8 @lg:grd-py-16 grd-shrink-0 grd-absolute grd-z-10" data-swiper-parallax="20%">
                    {slide?.title && (
                      <p
                        data-swiper-parallax="-200"
                        className={`item-text-area grd-text-white grd-drop-shadow-lg @sm:!grd-leading-[normal] grd-text-xl @md:grd-text-3xl @xl:grd-text-5xl grd-line-clamp-2 @md:grd-line-clamp-none`}
                        style={slide.titleStyle}
                        dangerouslySetInnerHTML={{ __html: slide?.title }} />
                    )}
                    {slide?.buttonText && (
                      <AdvancedLink className="@md:grd-mt-0 grd-mt-9" href={slide?.buttonActions?.link || undefined} target={slide?.buttonActions?.target || "_self"}>
                        <Button
                          variant="primary"
                          className="grd-px-8 grd-text-base grd-font-medium @md:grd-mt-6 grd-py-2 grd-h-auto"
                          style={{
                            ...props?.design?.button,
                            ...slide?.buttonStyle,
                            borderRadius: slide?.buttonStyle?.borderRadius || design?.borderRadius,
                            backgroundColor: slide?.buttonStyle?.backgroundColor || design?.button?.backgroundColor,
                            color: (!slide?.buttonStyle?.color && !design?.button?.color) ? (hexIsLight(design?.button?.backgroundColor || design?.button?.backgroundColor)
                              ? "black"
                              : "white") : (slide?.buttonStyle?.color || design?.button?.color),
                          }}
                        >

                          {slide?.buttonText}</Button>
                      </AdvancedLink>
                    )
                    }
                  </div>
                </CustomTag>

              )}
              {slide?.imagePath && (
                <div className="grd-flex image-area grd-items-center grd-justify-center grd-overflow-hidden grd-max-h-[450px] grd-w-full">
                  <img className={`grd-max-w-[inherit] @sm:grd-max-w-full @sm:grd-w-auto @sm:grd-h-auto grd-object-cover grd-object-right @sm:grd-object-center grd-m-auto`} src={slide.imagePath}
                       alt={`grd-swiper img ${slide.uuid}`}/>
                </div>
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
  design?: any,
}

export const Carousel: FC<CarouselProps> = (props) => {
  const [activeCategoryId, setActiveCategoryId] = useState(props?.activeCategoryId)
  const [activeSliderIndex] = useState(props?.activeSliderIndex)
  const [swiper, setSwiper] = useState<any>({});

  const {strategy} = props
  const design = props?.design

  // todo : be tarafinda fixlendikten sonra silinecek suan 0 geliyor
  const fixedHeightValue = strategy?.visual?.height === 0 ? undefined : strategy?.visual?.height
  let orderedStrategyItems = strategy?.data?.items?.sort((a:any, b:any) => (a.category?.order > b.category?.order ? 1 : -1))
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
    const itemIndex = categories.findIndex((category: any) => category?.categoryId == e);
    //willChangeSlider = orderedStrategyItems && orderedStrategyItems[itemIndex - 1]?.sliders?.length

    let willChangeSliderList = [],
      index = 0

    do {
      if (itemIndex){
        willChangeSliderList.push(...orderedStrategyItems[index].sliders);
        index = index + 1
      } else break
    } while (index < itemIndex);
    swiper.slideTo(willChangeSliderList?.length, 700)
  }

  const sliderOnChange = (e: any) => {
    orderedStrategyItems.map((item: any) => {
      item.sliders.map((slider: any) => {
        if (slider?.id === sliders[e.activeIndex]?.id) {
          setActiveCategoryId(item?.category?.categoryId)
        }
      })
    })
  }


  return (
    <div className="gordy-carousel grd-relative grd-flex grd-flex-col grd-justify-center grd-py-5 grd-overflow-hidden" style={{
      ...strategy?.visual?.style,
      width: strategy?.visual?.width,
      height: fixedHeightValue,
    }}>
      {sliders.length > 0 && (
        <Container className="grd-flex grd-flex-col grd-gap-6">
          <CategoryWrapper
            className={`grd-hidden @md:grd-flex`}
            activeCategoryId={activeCategoryId}
            itemOnClick={categoryItemOnClick}
            items={orderedStrategyItems}
            activeItemStyle={{
              borderColor: design?.button?.borderColor,
              color: design?.button?.borderColor,
            }}
            itemStyle={{
              textDecoration: design?.link?.style,
              borderRadius: design?.borderRadius,
            }}
          />
          <Sliders
            activeSliderIndex={activeSliderIndex}
            sliderOnChange={sliderOnChange}
            sliders={sliders}
            strategy={strategy}
            setSwiper={setSwiper}
            design={design}
            style={{borderRadius: design?.borderRadius}}
            slideStyle={{borderRadius: design?.borderRadius}}
          />
        </Container>
      )}
    </div>
  )

}


export default Carousel