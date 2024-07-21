import { Typography } from "@mui/material";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { titleVariants } from "../../../../animationConfig";

const StyledHeroTitle = styled(Typography)(({ theme }) => ({
  fontSize: "40px",
  color: theme.palette.customColors.accentColor,
  "@media screen and (min-width: 760px)": {
    textAlign: "right",
    fontSize: "50px",
  },
}));


const HeroTitle = () => {
  const { ref, inView } = useInView({
    triggerOnce: false, 
    threshold: 0.1, 
  });

  return (
    <StyledHeroTitle
      component={motion.h1}
      ref={ref}
      animate={inView ? "animate" : "initial"}
      variants={titleVariants}
    >
      Вироби ручної роботи на кожен смак
    </StyledHeroTitle>
  );
};

export default HeroTitle;
