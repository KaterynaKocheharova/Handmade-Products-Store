import { useState } from "react";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSelector } from "react-redux";
import { selectAllProducts } from "../../../redux/products/selectors";
import SwiperTextBox from "../SwiperTextBox/SwiperTextBox";
import SwiperCustomNavBtns from "../SwiperCustomNavBtns/SwiperCustomNavBtns";
import css from "./Swiper.module.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";


const ImagesSwiper = () => {
  const slides = useSelector(selectAllProducts);
  // const [disabledRight, setDisabledRight] = useState(false);
  // const [disabledLeft, setDisabledLeft] = useState(false);

  // const handleSlideChange = (swiper) => {
  //   setDisabledLeft(swiper.activeIndex === 0);
  //   setDisabledRight(swiper.activeIndex === slides.length - 1);
  // };

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
        loop={true}
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
              {/* <SwiperCustomNavBtns
                disabledRight={disabledRight}
                disabledLeft={disabledLeft}
              /> */}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImagesSwiper;
