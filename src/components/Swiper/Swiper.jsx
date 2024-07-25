import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSelector } from "react-redux";
import { selectAllProducts } from "../../redux/products/selectors";
import Stack from "@mui/material/Stack";
import { Button } from "@mui/material";
import css from "./Swiper.module.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const ImagesSwiper = () => {
  const slides = useSelector(selectAllProducts);

  return (
    <div className={css["product-swiper"]}>
      <Swiper
        modules={[Navigation]}
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
              </div>
              {/* <div className={css["text-container"]}>
                <Stack
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                  spacing={3}
                >
                  <Button
                    variant="contained"
                    size="small"
                    sx={{
                      backgroundColor: "var(--main-bg-color)",
                      color: "var(--main-font-color)",
                      "&:hover": {
                        backgroundColor: "var(--accent-color)",
                        color: "var(--contrast-color)"
                      },
                    }}
                  >
                    Деталі
                  </Button>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </Stack>
              </div> */}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default ImagesSwiper;
