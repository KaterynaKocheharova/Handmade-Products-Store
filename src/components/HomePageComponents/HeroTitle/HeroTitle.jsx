import { Typography } from "@mui/material";
import { motion } from "framer-motion";
import { titleVariants } from "../../../animationConfig";

const HeroTitle = () => {
  return (
    <Typography
      sx={{
        fontSize: "40px",
        color: "var(--main-bg-color)",
        "@media screen and (min-width: 760px)": {
          textAlign: "right",
          fontSize: "50px",
        },
      }}
      component={motion.h1}
      whileInView={titleVariants.animate}
    >
      Вироби ручної роботи
    </Typography>
  );
};

export default HeroTitle;
