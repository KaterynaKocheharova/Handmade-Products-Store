import { Typography } from "@mui/material";
import { motion } from "framer-motion";

const HeroTitle = () => {
  return (
    <Typography
      sx={{
        fontSize: "20px",
        color: "var(--first-color)",
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
