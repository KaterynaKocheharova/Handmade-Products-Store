import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

import css from "./CustomSwiper.module.css";

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
      {...configs}
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
