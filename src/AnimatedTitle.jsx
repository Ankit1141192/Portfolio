import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const titles = ["Full Stack Developer", "Software Developer", "UI/UX Designer"];

const AnimatedTitle = () => {
  const [index, setIndex] = useState(0); 
  const [text, setText] = useState(""); 
  const [isDeleting, setIsDeleting] = useState(false); 
  const [charIndex, setCharIndex] = useState(0);
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const delay = 1500; 

  useEffect(() => {
    const currentTitle = titles[index];

    if (!isDeleting && charIndex <= currentTitle.length) {
      // Typing effect
      setTimeout(() => {
        setText(currentTitle.slice(0, charIndex));
        setCharIndex((prev) => prev + 1);
      }, typingSpeed);
    } else if (isDeleting && charIndex >= 0) {
      // Deleting effect
      setTimeout(() => {
        setText(currentTitle.slice(0, charIndex));
        setCharIndex((prev) => prev - 1);
      }, deletingSpeed);
    } else if (!isDeleting) {
      // Pause before deleting
      setTimeout(() => setIsDeleting(true), delay);
    } else {
      // Move to the next word
      setIsDeleting(false);
      setCharIndex(0);
      setIndex((prev) => (prev + 1) % titles.length);
    }
  }, [charIndex, isDeleting, index]);

  return (
    <motion.span
      className="animated-text"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      {text}
      {/* <span className="cursor">|</span> */}
    </motion.span>
  );
};

export default AnimatedTitle;
