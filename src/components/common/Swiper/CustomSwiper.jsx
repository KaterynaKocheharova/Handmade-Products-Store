import { Navigation, Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSelector } from "react-redux";
import css from "./Swiper.module.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";


const CustomSwiper = ({slidesSelector, }) => {
  const slides = useSelector(slidesSelector);

  return (
    <div className={css["product-swiper"]}>
      <Swiper
        effect={"fade"}
        fadeEffect={{
          crossFade: true,
        }}
        modules={[Autoplay, EffectFade, Navigation]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
        }}
        spaceBetween={50}
        slidesPerView={1}
        scrollbar={{ draggable: true }}
        speed={1500}
        // onSwiper={(swiper) => handleSlideChange(swiper)}
        // onSlideChange={(swiper) => handleSlideChange(swiper)}
        loop={ true}
      >
        {slides.map(({ id, image }) => (
          <SwiperSlide className={css["product-swiper-slide"]} key={id}>
            <div className={css["product-swiper-image-container"]}>
              <img
                className={css["product-swiper-image"]}
                src={image}
                alt="product"
              />
              <SwiperTextBox />
              <SwiperCustomNavBtns
                // disabledRight={disabledRight}
                // disabledLeft={disabledLeft}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CustomSwiper;
