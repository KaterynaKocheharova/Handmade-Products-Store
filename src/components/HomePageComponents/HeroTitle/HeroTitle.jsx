import { Typography } from "@mui/material";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { titleVariants } from "../../../animationConfig";

const StyledHeroTitle = styled(Typography)(({ theme }) => ({
  fontSize: "40px",
  color: "var(--main-bg-color)",
  "@media screen and (min-width: 760px)": {
    textAlign: "right",
    fontSize: "50px",
  },
}));

const HeroTitle = () => {
  return (
    <StyledHeroTitle
      component={motion.h1}
      whileInView={titleVariants.animate}
    >
      Вироби ручної роботи на кожен смак
    </StyledHeroTitle>
  );
};

export default HeroTitle;
