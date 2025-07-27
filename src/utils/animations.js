
// common amimations variants

export const fadeUp = {
  initial: {
    y: 20,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
  },
};

export const fadeIn = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
};

export const transition = {
  default: {
    duration: 0.5,
  },
  delayed: {
    duration: 0.5,

    delay: 0.2,
  },
  slow: {
    duration: 0.8,
  },
};

// name tag animation
export const nameTag = {
  initial: {
    x: -20,
    opacity: 0,
    rotate: -10,
  },
  animate: {
    x: 0,
    opacity: 1,
    rotate: -10,
    y: [-2, 2, -2],
  },
};
// Transition for nameTag (to be used as prop)
export const nameTagTransition = {
  x: { duration: 0.5, delay: 0.3 },
  y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
};

// Button animation (customized)
export const buttonHover = {
  whileHover: {
    scale: 1.08,
    backgroundColor: "#23272f",
    color: "#fff",
    borderColor: "#a3a3a3",
    transition: { duration: 0.2 },
  },
  whileTap: {
    scale: 0.96,
    backgroundColor: "#111215",
    color: "#e5e5e5",
    borderColor: "#525252",
    transition: { duration: 0.1 },
  },
};

// Profile image fade-in
export const profileImage = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.7, ease: "easeOut" },
};
