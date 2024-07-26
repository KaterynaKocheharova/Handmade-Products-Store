import { useSwiper } from "swiper/react";

const SwiperCustomNavBtns = () => {
  const swiper = useSwiper();
  return (
    <div>
      <button onClick={() => swiper.slideNext()}>PREV</button>
      <button onClick={() => swiper.slidePrev()}>NEXT</button>
    </div>
  );
};

export default SwiperCustomNavBtns;
