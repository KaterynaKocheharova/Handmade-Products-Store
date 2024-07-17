

// import { motion, useAnimation } from "framer-motion";
// import { useEffect } from "react";
// import { useInView } from "react-intersection-observer";

// const AnimatedTitle = ({ children }) => {
//   const controls = useAnimation();
//   const [ref, inView] = useInView({
//     triggerOnce: false, // Animate every time the element comes into view
//     threshold: 0.1, // Percentage of the element in view to trigger the animation
//     trackVisibility: true, // Track visibility
//     delay: 100 // Delay to debounce visibility changes
//   });

//   useEffect(() => {
//     if (inView) {
//       controls.start({ x: 100 });
//     } else {
//       controls.start({ x: 0 });
//     }
//   }, [controls, inView]);

//   return (
//     <motion.h2
//       ref={ref}
//       initial={{ x: 0 }}
//       animate={controls}
//       transition={{ duration: 1 }}
//     >
//       {children}
//     </motion.h2>
//   );
// };

// export default AnimatedTitle;


import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const AnimatedTitle = ({ children }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false, // Animate every time the element comes into view
    threshold: 0.1, // Percentage of the element in view to trigger the animation
    trackVisibility: true, // Track visibility
    delay: 100 // Delay to debounce visibility changes
  });

  useEffect(() => {
    if (inView) {
      controls.start({ x: [0, 100, 90] });
    } else {
      controls.start({ x: 0 });
    }
  }, [controls, inView]);

  return (
    <motion.h2
      ref={ref}
      initial={{ x: 0 }}
      animate={controls}
      transition={{ duration: 1 }}
    >
      {children}
    </motion.h2>
  );
};

export default AnimatedTitle;
