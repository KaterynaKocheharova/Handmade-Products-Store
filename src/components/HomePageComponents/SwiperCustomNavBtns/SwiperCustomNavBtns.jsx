import { useSwiper } from 'swiper/react';
import { GrPrevious, GrNext } from 'react-icons/gr';
import clsx from 'clsx';
import css from './SwiperCustomNavBtns.module.css'; // Adjust the import according to your setup

const SwiperCustomNavBtns = ({ disabledRight = false, disabledLeft = false }) => {
  const swiper = useSwiper();
  return (
    <div className={css["nav-btn-container"]}>
      <button
        className={clsx(css.button, { [css["button-disabled"]]: disabledLeft })}
        onClick={() => swiper.slidePrev()}
        disabled={disabledLeft}
      >
        <GrPrevious className={css.icon} />
      </button>
      <button
        className={clsx(css.button, { [css["button-disabled"]]: disabledRight })}
        onClick={() => swiper.slideNext()}
        disabled={disabledRight}
      >
        <GrNext className={css.icon} />
      </button>
    </div>
  );
};

export default SwiperCustomNavBtns;
