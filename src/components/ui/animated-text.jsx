import { motion, useReducedMotion } from "motion/react";

export default function AnimatedText({
  text,
  className = "",
  animationType = "letters",
  duration = 0.6,
  delay = 0,
  staggerDelay = 0.05,
  initialY = 10,
  initialOpacity = 0,
  animateY = 0,
  animateOpacity = 1,
}) {
  const words = text.split(" ");
  const shouldReduceMotion = useReducedMotion();

  const getTransition = (index) => ({
    duration,
    delay: delay + index * staggerDelay,
    repeat: shouldReduceMotion ? 0 : Infinity,
    repeatDelay: 1.5,
    ease: "easeInOut",
  });

  const getAnimation = () => ({
    y: shouldReduceMotion ? animateY : [animateY, animateY - 6, animateY],
    opacity: animateOpacity,
  });

  return (
    <span className={`block ${className}`}>
      {animationType === "letters"
        ? words.map((word, wordIndex) => (
            <span
              key={`word-${wordIndex}`}
              className="inline-block whitespace-nowrap"
            >
              {word.split("").map((letter, letterIndex) => {
                const index =
                  words.slice(0, wordIndex).join("").length +
                  wordIndex +
                  letterIndex;

                return (
                  <motion.span
                    key={`letter-${index}`}
                    className="inline-block"
                    initial={{ y: initialY, opacity: initialOpacity }}
                    animate={getAnimation()}
                    transition={getTransition(index)}
                  >
                    {letter}
                  </motion.span>
                );
              })}
              {wordIndex < words.length - 1 && " "}
            </span>
          ))
        : words.map((word, index) => (
            <motion.span
              key={`word-${index}`}
              className="mr-2 inline-block whitespace-nowrap"
              initial={{ y: initialY, opacity: initialOpacity }}
              animate={getAnimation()}
              transition={getTransition(index)}
            >
              {word}
            </motion.span>
          ))}
    </span>
  );
}
