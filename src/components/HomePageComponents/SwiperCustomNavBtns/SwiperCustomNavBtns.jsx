import { useEffect, useState } from "react";
import { useSwiper } from "swiper/react";
import { GrPrevious, GrNext } from "react-icons/gr";
import clsx from "clsx";
import css from "./SwiperCustomNavBtns.module.css";

const SwiperCustomNavBtns = ({ onClick }) => {
  const swiper = useSwiper();

  const [disabledRight, setDisabledRight] = useState(false);
  const [disabledLeft, setDisabledLeft] = useState(false);

  useEffect(() => {
    const updateButtonState = () => {
      setDisabledLeft(swiper.isBeginning);
      setDisabledRight(swiper.isEnd);
    };
    if (swiper) {
      updateButtonState();
      swiper.on('slideChange', updateButtonState);
      return () => {
        swiper.off('slideChange', updateButtonState);
      };
    }
  }, [swiper]);


  return (
    <div className={css["nav-btn-container"]}>
      <button
        className={clsx(css.button, { [css.disabled]: disabledLeft })}
        onClick={() => {
          if (!disabledLeft) {
            onClick();
            swiper.slidePrev();
          }
        }}
      >
        <GrPrevious className={css.icon} />
      </button>
      <button
        className={clsx(css.button, { [css.disabled]: disabledRight })}
        onClick={() => {
          if (!disabledRight) {
            onClick();
            swiper.slideNext();
          }
        }}
      >
        <GrNext className={css.icon} />
      </button>
    </div>
  );
};

export default SwiperCustomNavBtns;
