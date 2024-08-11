import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { type Product } from "../../../types";

import css from "./BaseSwiper.module.css";

type SwiperConfig = {
  effect: string;
  fadeEffect?: {
    crossFade: boolean;
  };
  modules: [];
  autoplay?: {
    delay?: number;
    disableOnInteraction?: boolean;
  };
  spaceBetween?: number;
  slidesPerView?: number;
  scrollbar?: {
    draggable: boolean;
  };
  speed: number;
};

type BaseSwiper = {
  slides: Product[];
  configs: SwiperConfig;
  children: React.ReactNode;
};

const BaseSwiper = ({ slides, configs, children }: BaseSwiper) => {
  return (
    <div className={css["product-swiper"]}>
      <Swiper {...configs}>
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

export default BaseSwiper;
