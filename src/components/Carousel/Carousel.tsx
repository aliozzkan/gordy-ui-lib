import React, { FC, useEffect, useRef, useState } from "react";

// import Swiper core and required modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y, Parallax, Pagination } from "swiper/modules";

import "../../utils/swiper/swiper.min.css";
import "../../utils/swiper/swiper-pagination.min.css";
import "../../utils/swiper/swiper-navigation.min.css";

import LIcon from "../lucidIcon/lucidIcon";
import { Button } from "../ui";
import { hexIsLight } from "../../helpers/hexIsLight";
import Container from "../Container/Container";
import AdvancedLink from "..//ui/advanced-link";

const SliderCategories = (props: any) => {
  const categoryInfo = props?.categoryInfo;
  const style = props?.style;
  const activeItemStyle = props?.activeItemStyle;
  const sliderCategoryName = categoryInfo?.name
    ? categoryInfo?.name
    : categoryInfo?.id;

  let styles = {
    ...style,
  };

  if (props?.isActive) {
    styles = {
      ...styles,
      ...activeItemStyle,
    };
  }

  return (
    <div
      hidden={!categoryInfo?.visible}
      onClick={() => props.categoryItemOnClick(categoryInfo?.id)}
      style={{
        ...styles,
      }}
      className={`grd-px-4 grd-py-2.5 grd-rounded-lg hover:grd-shadow-xs grd-border hover:grd-border-gray-300 grd-text-nowrap grd-cursor-pointer grd-transition grd-duration-300 grd-select-none 
    ${
      props?.isActive
        ? "grd-border-blue-500 grd-text-blue-500"
        : "grd-border-transparent"
    }`}
    >
      {sliderCategoryName}
    </div>
  );
};

const CategoryWrapper = (props: any) => {
  const categories: any[] = [];
  const itemOnClick = props?.itemOnClick;
  const itemStyle = props?.itemStyle;
  const activeItemStyle = props?.activeItemStyle;
  const items = props?.items;

  items &&
    items.map((item: any) => {
      // ayni kategoriden olanlari ele
      const findIncludesCategory = categories.find((category: any) => {
        return category?.id === item?.data?.category?.categoryId;
      });
      if (!findIncludesCategory) {
        const category = item?.data?.category;
        categories.push({
          id: category?.categoryId,
          name: category?.categoryName,
          order: category?.order,
          visible: category?.categoryVisible,
        });
      }
    });

  let orderedStrategyItems = categories.sort((a, b) =>
    a.order > b.order ? 1 : -1
  );

  const getActiveCategory = () => {
    return (
      orderedStrategyItems &&
      orderedStrategyItems?.find((category) => {
        return category?.id === props?.activeCategoryId;
      })
    );
  };
  const activeIndex = getActiveCategory();
  return (
    <div
      className={`categories grd-items-center grd-gap-4 grd-text-gray-500 grd-text-base grd-font-medium grd-justify-center ${
        props.className || ""
      }`}
    >
      {orderedStrategyItems.map((category: any, index) => {
        return (
          <SliderCategories
            key={category?.id || index}
            index={index}
            isActive={
              activeIndex ? activeIndex?.id === category?.id : index === 0
            }
            categoryInfo={category}
            categoryItemOnClick={itemOnClick}
            style={itemStyle}
            activeItemStyle={activeItemStyle}
          />
        );
      })}
    </div>
  );
};

const Sliders = (props: any) => {
  const { strategy } = props;

  const design = props?.design;

  const sliderTextAreaRef = useRef<any>([]);

  const swiperId = Math.floor(Math.random() * 1000000000000);

  const items = strategy?.children;
  const displayArrows = strategy?.visual?.arrowVisualStyle?.displayArrows;
  const pagination = strategy?.visual?.paginationStyle?.swipeNavigation;

  //styles
  document.body.style.setProperty(
    "--swiper-theme-color",
    design?.button?.backgroundColor || "#007aff"
  );

  useEffect(() => {
    if (sliderTextAreaRef.current) {
      sliderTextAreaRef.current.map((textArea: any) => {
        const height = textArea.clientHeight;
        textArea.parentNode.style.minHeight = `${height}px`;
      });
    }
  }, [sliderTextAreaRef.current]);

  return (
    <>
      <Swiper
        className={`grd-w-full mx-0 grd-overflow-hidden grd-transition-all swiper-${swiperId} ${
          props.className || ""
        }`}
        //style={{...strategy?.visual?.style}}
        //speed={1000}
        parallax={false}
        spaceBetween={12}
        wrapperClass={pagination && items.length > 1 ? "grd-pb-10" : ""}
        slidesPerView={"auto"}
        speed={1000}
        freeMode={true}
        initialSlide={props?.activeSliderIndex || 0}
        //slidesPerView={1}
        grabCursor={true}
        style={{
          ...props?.style,
          borderRadius: undefined,
        }}
        autoHeight={true}
        onSlideChange={props?.sliderOnChange}
        modules={[Parallax, Pagination, A11y, Navigation]}
        onInit={(ev) => {
          if (props?.sliderOnChange) props.sliderOnChange(ev);
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
        {props?.sliders &&
          props?.sliders.map((slide: any, index: number) => {
            let CustomTag: any = "div";
            if (
              slide?.button?.visual?.style?.display === "none" &&
              slide?.hyperLink?.data?.href
            )
              CustomTag = AdvancedLink;
            return (
              <SwiperSlide
                key={index}
                className={`grd-relative grd-flex @md:grd-items-center grd-w-full !grd-min-h-[150px] @sm:!grd-min-h-[240px] @sm:!grd-h-auto grd-overflow-hidden`}
                style={{
                  ...props?.slideStyle,
                  ...{
                    ...slide?.styles,
                    borderRadius: props.style?.borderRadius,
                  },
                }}
              >
                {(slide?.text?.data?.text ||
                  slide?.hyperLink?.data?.href ||
                  slide?.button?.data?.text) && (
                  <CustomTag
                    className="grd-w-full grd-h-full grd-flex grd-items-center grd-absolute grd-overflow-hidden grd-left-0 grd-top-0 grd-z-10 !grd-min-h-max"
                    style={{ minHeight: "unset" }}
                    target={slide?.hyperLink?.data?.target || "_self"}
                    href={slide?.hyperLink?.data?.href || undefined}
                  >
                    <div
                      ref={(el) => (sliderTextAreaRef.current[index] = el)}
                      className="grd-mb-0 grd-max-h-full grd-overflow-hidden @lg:grd-mb-5 grd-h-auto grd-flex grd-items-start grd-flex-col grd-px-4 @md:grd-px-5 @lg:grd-px-10 grd-py-4 @md:grd-py-8 @lg:grd-py-16 grd-shrink-0 grd-absolute grd-z-10"
                      data-swiper-parallax="20%"
                    >
                      {slide?.text?.data?.text && (
                        <p
                          data-swiper-parallax="-200"
                          className={`item-text-area grd-text-white grd-drop-shadow-lg @sm:!grd-leading-[normal] grd-text-xl @md:grd-text-3xl @xl:grd-text-5xl grd-line-clamp-2 @md:grd-line-clamp-none`}
                          style={slide?.text?.visual?.style}
                          dangerouslySetInnerHTML={{
                            __html: slide?.text?.data?.text,
                          }}
                        />
                      )}
                      {(slide?.button?.data?.text ||
                        slide?.hyperLink?.data?.href) && (
                        <AdvancedLink
                          className="@md:grd-mt-0 grd-mt-6"
                          href={slide?.hyperLink?.data?.href || undefined}
                          target={slide?.hyperLink?.data?.target || "_self"}
                        >
                          <Button
                            variant="primary"
                            className="grd-px-2.5 @md:grd-px-8 grd-text-base grd-font-medium @md:grd-mt-6 grd-py-2 grd-h-auto"
                            style={{
                              ...props?.design?.button,
                              ...slide.button?.visual?.style,
                              borderRadius:
                                slide.button?.visual?.style?.borderRadius ||
                                design?.borderRadius,
                              backgroundColor:
                                slide.button?.visual?.style?.backgroundColor ||
                                design?.button?.backgroundColor,
                              color:
                                !slide.button?.visual?.style?.color &&
                                !design?.button?.color
                                  ? hexIsLight(
                                      design?.button?.backgroundColor ||
                                        design?.button?.backgroundColor
                                    )
                                    ? "black"
                                    : "white"
                                  : slide.button?.visual?.style?.color ||
                                    design?.button?.color,
                            }}
                          >
                            {slide.button?.data?.text}
                          </Button>
                        </AdvancedLink>
                      )}
                    </div>
                  </CustomTag>
                )}
                {slide?.image?.data?.src && (
                  <div className="grd-flex image-area grd-items-center grd-justify-center grd-overflow-hidden grd-max-h-[450px] grd-w-full">
                    <img
                      className={`grd-max-w-full @sm:grd-w-auto @sm:grd-h-auto grd-object-cover grd-object-right grd-max-h-[450px] @sm:grd-object-center grd-m-auto`}
                      src={slide?.image?.data?.src}
                      alt={`grd-swiper img ${slide?.image?.data?.name}`}
                    />
                  </div>
                )}
              </SwiperSlide>
            );
          })}
        {displayArrows && (
          <div
            className="swiper-navigation"
            style={{ ...strategy?.visual?.arrowVisualStyle }}
          >
            <div className="swiper-button-prev">
              <LIcon name="ArrowLeft" />
            </div>
            <div className="swiper-button-next">
              <LIcon name="ArrowRight" />
            </div>
          </div>
        )}
      </Swiper>
    </>
  );
};

export interface CarouselProps {
  strategy: any;
  activeCategoryId?: number;
  activeSliderIndex?: number;
  design?: any;
  onSlideChange?(e: any): any;
}

export const Carousel: FC<CarouselProps> = (props) => {
  const [activeCategoryId, setActiveCategoryId] = useState(
    props?.activeCategoryId
  );
  const [activeSliderIndex] = useState(props?.activeSliderIndex);
  const [swiper, setSwiper] = useState<any>({});

  const { strategy } = props;
  const design = props?.design;

  // todo : be tarafinda fixlendikten sonra silinecek suan 0 geliyor
  const fixedHeightValue =
    strategy?.visual?.height === 0 ? undefined : strategy?.visual?.height;
  let orderedStrategyItems = strategy?.children?.sort(
    (a: any, b: any) => a?.data?.category?.order - b?.data?.category?.order
  );
  const categories: any = [],
    sliders: any = [];

  orderedStrategyItems &&
    orderedStrategyItems?.map((item: any) => {
      if (item?.children || item?.visual) {
        sliders.push({
          ...item?.data?.category,
          image: item.children?.find((child: any) => child?.name === "Image"),
          text: item.children?.find((child: any) => child?.name === "Text"),
          button: item.children?.find((child: any) => child?.name === "Button"),
          hyperLink: item.children?.find(
            (child: any) => child?.name === "Components.Atom.Hyperlink"
          ),
          styles: {
            ...item.visual?.style,
          },
        });
      }
      if (item?.data?.category) {
        categories.push(item?.data?.category);
      }
    });

  const categoryItemOnClick = (e: any) => {
    setActiveCategoryId(e);
    const itemIndex = categories.findIndex(
      (category: any) => category?.categoryId == e
    );

    let willChangeSliderList = [],
      index = 0;
    do {
      if (itemIndex) {
        willChangeSliderList.push(orderedStrategyItems[index]);
        index = index + 1;
      } else break;
    } while (index < itemIndex);
    swiper.slideTo(willChangeSliderList?.length, 700);
  };

  const sliderOnChange = (e: any) => {
    orderedStrategyItems.map((children: any) => {
      if (
        children?.data?.category?.categoryId ===
        sliders[e.activeIndex]?.categoryId
      ) {
        setActiveCategoryId(children?.data?.category?.categoryId);
        if (props?.onSlideChange) {
          e.data = children;
          props.onSlideChange(e);
        }
      }
    });
  };

  return (
    <div
      className="gordy-carousel grd-relative grd-flex grd-flex-col grd-justify-center grd-py-5 grd-overflow-hidden"
      style={{
        ...strategy?.visual?.style,
        width: strategy?.visual?.width,
        height: fixedHeightValue,
      }}
    >
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
            style={{ borderRadius: design?.borderRadius }}
            slideStyle={{ borderRadius: design?.borderRadius }}
          />
        </Container>
      )}
    </div>
  );
};

export default Carousel;
