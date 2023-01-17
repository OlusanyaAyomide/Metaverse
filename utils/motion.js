import { animate } from "framer-motion";

export const navVariants = {
  hidden: {
    opacity: 0,
    y: -50,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 140,
    },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      delay: 1,
    },
  },
};

export const slideIn = (direction, type, delay, duration) => ({
  hidden: {
    x: direction === "left" ? "-150%" : direction === "right" ? "150%" : 0,
    y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
  },
  show: {
    x: 0,
    y: 0,
    transition: {
      type,
      delay,
      duration,
      ease: "easeOut",
    },
  },
});

export const staggerContainer = (staggerChildren, delayChildren) => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

export const textVariant = (delay) => ({
  hidden: {
    y: 50,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 1.25,
      delay,
    },
  },
});

export const textContainer = {
  hidden: {
    opacity: 0,
  },
  show: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: i * 0.1 },
  }),
};

export const textVariant2 = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
      ease: "linear",
    },
  },
};

export const fadeIn = (direction, type, delay, duration) => {
  return {
    hidden: {
      x: direction === "left" ? 100 : direction === "right" ? -30 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type,
        delay,
        duration,
        ease: "easeOut",
      },
    },
  };
};

export const planetVariants = (direction) => ({
  hidden: {
    x: direction === "left" ? "-100%" : "100%",
    rotate: 120,
  },
  show: {
    x: 0,
    rotate: 0,
    transition: {
      type: "spring",
      duration: 1.8,
      delay: 0.5,
    },
  },
});

export const zoomIn = (delay, duration) => ({
  hidden: {
    scale: 0,
    opacity: 0,
  },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "tween",
      delay,
      duration,
      ease: "easeOut",
    },
  },
});

export const footerVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 140,
    },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      delay: 0.5,
    },
  },
};
export const madness = {
  hidden: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 1.2,
      duration: 2,
    },
  },
};
export const AboutF = {
  initial: {
    opacity: 0,
    y: 100,
    scale: 0,
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: 0.2,
      duration: 1.5,
      type: "tween",
    },
  },
};
export const FadeIn = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 1,
      duration: 1,
    },
  },
};
export const fadeUp = {
  initial: {
    y: 100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 1,
    },
  },
};
export const GetStartedImg = {
  initial: {
    x: -700,
    rotate: 120,
    y: 1000,
    opacity: 0,
  },
  animate: {
    x: 0,
    rotate: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 2.5,
      type: "tween",
    },
  },
};
export const RollIn = {
  initial: {
    rotate: 720,
    x: 800,
  },
  animate: {
    rotate: 0,
    x: 0,
    transition: {
      delay: 1,
      duration: 3,
      type: "tween",
    },
  },
};
export const Spinner = (side) => {
  return {
    initial: {
      x: side === "left" ? 800 : -800,
      y: side === "center" ? -500 : 500,
      rotate: 720,
      opacity: 0,
    },
    animate: {
      x: 0,
      y: 0,
      rotate: 0,
      opacity: 1,
      transition: {
        delay: side === "left" ? 1 : side === "center" ? 1.5 : 2,
        duration: 2,
        type: "tween",
      },
    },
  };
};
export const planet = (side) => {
  return {
    initial: {
      y: side === "up" ? -50 : 50,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        delay: side === "up" ? 2.5 : 3,
        duration: 1,
      },
    },
  };
};

export const insightMotion = (value) => {
  const delay = (value + 1) * 0.5;
  console.log(delay);
  return {
    initial: {
      y: -500,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
    },
    transition: {
      delay,
      duration: 2,
      type: "tween",
    },
  };
};

export const GlassMotion = (side) => {
  return {
    initial: {
      x: side === "left" ? -150 : 150,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        delay: 1,
        duration: 1.5,
      },
    },
  };
};

export const loading = {
  animate: {
    scale: [1, 1.2, 1.2, 0.8, 0.4, 0.2, 0.1],
    rotate: [0, -180, -360, -270, -180, -90, 0],
    transition: {
      delay: 5,
      duration: 1,
      ease: "linear",
    },
  },
};
