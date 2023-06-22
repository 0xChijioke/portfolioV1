'use client'
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(true);
    const heroRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
          const heroSection = document.getElementById("hero");
          if (heroSection) {
              const rect = heroSection.getBoundingClientRect();
              console.log(rect.top)
            setIsVisible(rect.top <= 0);
          }
        };
    
        window.addEventListener("scroll", handleScroll);
    
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);
    

  const scrollToTop = () => {
    const section = document.getElementById("hero");

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <motion.button
      className={`fixed bottom-4 left-4 bg-gray-800 flex w-10 justify-center items-center h-10 text-white py-2 px-4 rounded-full z-50 transition-opacity ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      onClick={scrollToTop}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
        <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18" />
        </svg>
    </motion.button>
  );
}

export default ScrollToTop;
