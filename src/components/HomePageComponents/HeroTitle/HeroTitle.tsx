import { Typography } from "@mui/material";
import { motion } from "framer-motion";
import css from "./HeroTitle.module.css";

const HeroTitle = () => {
  return (
    <Typography
      className={css["title"]}
      sx={{
        fontSize: "20px",
        color: "var(--main-bg-color)",
        "@media screen and (min-width: 760px)": {
          textAlign: "right",
          fontSize: "50px",
        },
      }}
      component={motion.h1}
    >
      Вироби ручної роботи
    </Typography>
  );
};

export default HeroTitle;
