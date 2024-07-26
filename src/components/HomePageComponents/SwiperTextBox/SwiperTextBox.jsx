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
        alignItems="flex-end"
        spacing={3}
      >
        <HeroTitle />
        <HeroButton />
      </Stack>
    </div>
  );
};

export default SwiperTextBox;
