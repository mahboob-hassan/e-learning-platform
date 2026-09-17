"use client";

import { motion } from "motion/react";

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
  const letters = text.split("");
  const words = text.split(" ");

  const animation = {
    y: [initialY, animateY, animateY, initialY],
    opacity: [initialOpacity, animateOpacity, animateOpacity, initialOpacity],
  };

  const transition = {
    duration: duration * 3,
    delay: delay,
    repeat: Infinity,
    repeatDelay: 2,
    ease: "easeInOut",
  };

  return (
    <div className={className}>
      {animationType === "letters"
        ? letters.map((char, index) => (
            <motion.span
              key={`letter-${index}`}
              className="inline-block"
              style={{
                whiteSpace: char === " " ? "pre" : "normal",
              }}
              animate={animation}
              transition={{
                ...transition,
                delay: delay + index * staggerDelay,
              }}
            >
              {char}
            </motion.span>
          ))
        : words.map((word, index) => (
            <motion.span
              key={`word-${index}`}
              className="mr-2 inline-block"
              animate={animation}
              transition={{
                ...transition,
                delay: delay + index * staggerDelay,
              }}
            >
              {word}
            </motion.span>
          ))}
    </div>
  );
}
