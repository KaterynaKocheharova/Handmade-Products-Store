// import { Typography } from "@mui/material";
// import styled from "@emotion/styled";
// import { motion } from "framer-motion";

// const StyledHeroTitle = styled(Typography)(({ theme }) => ({
//   fontSize: "40px",
//   color: theme.palette.customColors.accentColor,
//   "@media screen and (min-width: 760px)": {
//     textAlign: "right",
//     fontSize: "50px",
//   },
// }));

// const titleVariants = {
//   initial: { x: 0, opacity: 0 },
//   animate: {
//     x: [0, 10, -10, 0],
//     opacity: [0.3, 0.5, 1],
//     transition: {
//       duration: 0.6,
//       ease: "easeInOut",
//     //   repeat: Infinity,
//       repeatType: "loop",
//     },
//   },
// };

// const HeroTitle = () => {
//   return (
//     <motion.div
//       initial="initial"
//       animate="animate"
//       variants={titleVariants}
//     >
//       <StyledHeroTitle component={motion.h1}>
//         Вироби ручної роботи на кожен смак
//       </StyledHeroTitle>
//     </motion.div>
//   );
// };

// export default HeroTitle;


import { Typography } from "@mui/material";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const StyledHeroTitle = styled(Typography)(({ theme }) => ({
  fontSize: "40px",
  color: theme.palette.customColors.accentColor,
  "@media screen and (min-width: 760px)": {
    textAlign: "right",
    fontSize: "50px",
  },
}));

const titleVariants = {
  initial: { x: 0, opacity: 0 },
  animate: {
    x: [0, 10, -10, 0],
    opacity: [0.3, 0.5, 1],
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    //   repeat: Infinity,
      repeatType: "loop",
    },
  },
};

const HeroTitle = () => {
  const { ref, inView } = useInView({
    triggerOnce: false, // This ensures the animation triggers every time the component is in view
    threshold: 0.1, // Adjust this value to control when the animation starts
  });

  return (
    <motion.div
      ref={ref}
      initial="initial"
      animate={inView ? "animate" : "initial"}
      variants={titleVariants}
    >
      <StyledHeroTitle component={motion.h1}>
        Вироби ручної роботи на кожен смак
      </StyledHeroTitle>
    </motion.div>
  );
};

export default HeroTitle;
