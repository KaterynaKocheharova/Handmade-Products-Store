import { Swiper, SwiperSlide } from "swiper/react";
import css from "./CustomSwiper.module.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const CustomSwiper = ({
  slides,
  handleOnSwiper,
  handleSlideChange,
  configs,
  children,
}) => {
  return (
    <div className={css["product-swiper"]}>
      <Swiper
        effect={configs.effect} // Apply the effect here
        fadeEffect={configs.fadeEffect}
        modules={configs.modules}
        autoplay={configs.autoplay}
        spaceBetween={configs.spaceBetween}
        slidesPerView={configs.slidesPerView}
        scrollbar={{
          draggable: configs.scrollbar.draggable, // Corrected spelling
        }}
        speed={configs.speed}
        loop={configs.loop} // Make sure loop is configurable if needed
        onSwiper={handleOnSwiper}
        onSlideChange={handleSlideChange}
      >
        {slides.map(({ id, image }) => (
          <SwiperSlide className={css["product-swiper-slide"]} key={id}>
            <div className={css["product-swiper-image-container"]}>
              <img
                className={css["product-swiper-image"]}
                src={image}
                alt="product"
              />
              {children}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CustomSwiper;
