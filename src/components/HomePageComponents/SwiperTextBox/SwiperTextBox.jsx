import Stack from "@mui/material/Stack";
import HeroTitle from "../HeroTitle/HeroTitle";
import HeroButton from "../HeroButton/HeroButton";
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
        <HeroButton />
      </Stack>
    </div>
  );
};

export default SwiperTextBox;
