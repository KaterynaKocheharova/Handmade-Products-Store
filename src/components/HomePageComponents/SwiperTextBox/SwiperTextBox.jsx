import Stack from "@mui/material/Stack";
import HeroTitle from "../HeroTitle/HeroTitle";
import css from "./SwiperTextBox.module.css";

const SwiperTextBox = () => {
  return (
    <div className={css["swiper-text-box"]}>
      <Stack
        direction="column"
        justifyContent="center"
        spacing={1}
      >
        <HeroTitle />
      </Stack>
    </div>
  );
};

export default SwiperTextBox;
