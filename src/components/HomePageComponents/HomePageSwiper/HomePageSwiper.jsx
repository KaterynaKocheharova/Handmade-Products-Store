import { Navigation, Autoplay, EffectFade } from "swiper/modules";
import { useSelector } from "react-redux";
import { selectAllProducts } from "../../../redux/products/selectors";
import BaseSwiper from "../../common/CustomSwiper/BaseSwiper";
import SwiperTextBox from "../SwiperTextBox/SwiperTextBox";
import SwiperCustomNavBtns from "../SwiperCustomNavBtns/SwiperCustomNavBtns";
import { useState } from "react";

const HomePageSwiperConfigs = {
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  modules: [Autoplay, EffectFade, Navigation],
  autoplay: {
    delay: 3000,
    disableOnInteraction: true,
  },
  spaceBetween: 50,
  slidesPerView: 1,
  scrollbar: {
    draggable: true,
  },
  speed: 1500,
};

const HomePageSwiper = () => {
  const slides = useSelector(selectAllProducts);
  const [sliderMode, setSliderMode] = useState("autoplay"); 

  const handleNavButtonClick = () => {
    if (sliderMode !== "clicking") setSliderMode("clicking");
  };

  const filetredConfigs =
    sliderMode === "autoplay"
      ? { ...HomePageSwiperConfigs }
      : { ...HomePageSwiperConfigs, autoplay: false, speed: 300 };

  return (
    <BaseSwiper slides={slides} configs={filetredConfigs}>
      <SwiperTextBox />
      <SwiperCustomNavBtns onClick={handleNavButtonClick} />
    </BaseSwiper>
  );
};

export default HomePageSwiper;
