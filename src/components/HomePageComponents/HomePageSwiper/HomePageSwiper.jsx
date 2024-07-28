import { Navigation, Autoplay, EffectFade } from "swiper/modules";
import { useSelector } from "react-redux";
import { selectAllProducts } from "../../../redux/products/selectors";
import CustomSwiper from "components/common/CustomSwiper/CustomSwiper";
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
    disableOnInteraction: false,
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
  const [sliderMode, setSliderMode] = useState("clicking"); // autoplay / clicking

  const filetredConfigs = sliderMode === "autoplay" ? {...HomePageSwiperConfigs} : {...HomePageSwiperConfigs, autoplay: false, speed: 300}

  return (
    <CustomSwiper slides={slides} configs={filetredConfigs}>
      <SwiperTextBox />
      <SwiperCustomNavBtns />
    </CustomSwiper>
  );
};

export default HomePageSwiper;
