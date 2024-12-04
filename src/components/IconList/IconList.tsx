import { FC } from "react";

import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Container from "../Container/Container";
import LIcon from "../lucidIcon/lucidIcon";
import AdvancedLink from "../ui/advanced-link";
import { H4, Wrapper } from "../ui";
import "./IconList.css";

import "../../utils/swiper/swiper.min.css";
import "../../utils/swiper/swiper-pagination.min.css";
import "../../utils/swiper/swiper-navigation.min.css";

export interface IconListProps {
  strategy: any;
  className?: string;
  disabled?: boolean;
  design?: any;
}

const IconList: FC<IconListProps> = (props) => {
  const { strategy } = props;
  const design = props?.design;

  const data = strategy?.data;
  const children = strategy?.children;
  const visual = strategy?.visual;

  //styles
  document.body.style.setProperty(
    "--gordy-link-hover-color",
    design?.link?.color
  );
  document.body.style.setProperty(
    "--swiper-theme-color",
    design?.button?.backgroundColor || "#007aff"
  );

  // todo : be tarafinda fixlendikten sonra silinecek suan 0 geliyor
  const fixedHeightValue =
    visual?.style?.height === 0 ? undefined : visual?.style?.height;

  const display = data || visual || children;
  const displayArrows = visual?.arrowVisualStyle?.displayArrows;
  const pagination = visual?.paginationStyle?.swipeNavigation;
  const swiperId = Math.floor(Math.random() * 1000000000000);

  if (!display) {
    return <></>;
  }

  const noImage = () => {
    return "https://assets-v2.lottiefiles.com/a/490bc92a-1170-11ee-9e35-0f6eacef4099/DBwCBrM6eQ.gif";
  };

  return (
    <Wrapper
      style={{
        ...visual?.style,
        height: fixedHeightValue,
      }}
      disabled={props?.disabled}
      className={`icon-list grd-relative grd-flex grd-justify-center grd-items-center grd-mx-auto grd-py-5 ${
        props.className || ""
      }`}
    >
      <Container>
        <H4
          className={`title-heading h4 grd-text-gray-800 grd-drop-shadow-lg grd-mb-6 ${
            !data?.titleStyle?.fontSize ? "grd-text-2xl" : ""
          }`}
          dangerouslySetInnerHTML={{ __html: data?.title }}
          style={{ fontSize: "24px", ...data?.titleStyle }}
        />
        <Swiper
          {...{
            className: `grd-w-full grd-overflow-hidden grd-mt-6 swiper-${swiperId}`,
            spaceBetween: 12,
            speed: 700,
            slidesPerView: "auto",
            freeMode: true,
            grabCursor: true,
            wrapperClass:
              children && children.length < 6
                ? "grd-justify-center"
                : pagination && children?.length >= 6
                ? "grd-pb-10"
                : "",
            modules: [Pagination, Navigation],
            navigation: {
              enabled: displayArrows,
              prevEl: `.swiper-${swiperId} .swiper-navigation .swiper-button-prev`,
              nextEl: `.swiper-${swiperId} .swiper-navigation .swiper-button-next`,
            },
            pagination: pagination
              ? {
                  clickable: true,
                  dynamicBullets: true,
                  dynamicMainBullets: 4,
                }
              : false,
          }}
        >
          {children?.map((child: any, _index: number) => {
            return (
              <SwiperSlide
                className="grd-max-w-[106px] @sm:grd-max-w-[160px] grd-select-none"
                key={_index}
              >
                <AdvancedLink
                  className={`icon-box grd-group grd-w-full grd-flex grd-flex-col grd-items-center grd-border grd-border-gray-200 grd-bg-white grd-text-sm grd-font-medium grd-text-color-800 
                      grd-cursor-pointer grd-overflow-hidden !grd-transition-all hover:grd-shadow-xl hover:grd-text-blue-500 grd-px-2 grd-py-4`}
                  style={{
                    ...child?.data?.style,
                    borderRadius: design?.borderRadius,
                  }}
                  href={child?.data?.url || undefined}
                  target={child?.data?.target || "_blank"}
                >
                  <img
                    className="grd-w-12 grd-h-12 grd-object-center grd-object-contain"
                    src={(child?.data && child?.data?.mediaPath) || noImage()}
                    alt={""}
                  />
                  <span
                    style={{
                      textDecoration: design?.link?.style,
                    }}
                    className={`grd-block grd-mt-1 grd-truncate grd-max-w-full`}
                  >
                    {child?.data && child?.data?.text}
                  </span>
                </AdvancedLink>
              </SwiperSlide>
            );
          })}
        </Swiper>

        {displayArrows && (
          <div
            className="swiper-navigation"
            style={{ ...visual?.arrowVisualStyle }}
          >
            <div className="swiper-button-prev">
              <LIcon name="ArrowLeft" />
            </div>
            <div className="swiper-button-next">
              <LIcon name="ArrowRight" />
            </div>
          </div>
        )}
      </Container>
    </Wrapper>
  );
};

export default IconList;
