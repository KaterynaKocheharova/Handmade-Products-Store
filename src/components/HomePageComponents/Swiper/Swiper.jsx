import { Navigation, EffectCreative, EffectFade, EffectCube } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSelector } from "react-redux";
import { selectAllProducts } from "../../../redux/products/selectors";
import SwiperTextBox from "../SwiperTextBox/SwiperTextBox";

import css from "./Swiper.module.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-creative";
import "swiper/css/effect-fade";
import "swiper/css/effect-cube";

const ImagesSwiper = () => {
  const slides = useSelector(selectAllProducts);

  return (
    <div className={css["product-swiper"]}>
      <Swiper
        effect={"cube"}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        // effect={"creative"}
        // creativeEffect={{
        //   prev: {
        //     shadow: true,
        //     translate: [0, 0, -400],
        //   },
        //   next: {
        //     translate: ['100%', 0, 0],
        //   },
        // }}
        grabCursor={true}
        // effect={'fade'}
        modules={[EffectCreative, EffectFade, EffectCube, Navigation]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {slides.map(({ id, image }) => {
          return (
            <SwiperSlide className={css["product-swiper-slide"]} key={id}>
              <div className={css["product-swiper-image-container"]}>
                <img
                  className={css["product-swiper-image"]}
                  src={image}
                  alt="product"
                />
                <SwiperTextBox />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default ImagesSwiper;
