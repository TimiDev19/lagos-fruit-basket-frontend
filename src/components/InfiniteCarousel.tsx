"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const InfiniteCarousel = () => {
  const images = [
    "/images/leap.png",
    "/images/trinity.png",
    "/images/boi.jpg",
    "/images/zenith.png",
    "/images/access.jpg",
    "/images/amaanah.png",
    "/images/sproutly.png",
    "/images/hacey.png",
    "/images/piggytech.jpg",
    "/images/x3m.png",

    "/images/leap.png",
    "/images/trinity.png",
    "/images/boi.jpg",
    "/images/zenith.png",
    "/images/access.jpg",
    "/images/amaanah.png",
    "/images/sproutly.png",
    "/images/hacey.png",
    "/images/piggytech.jpg",
    "/images/x3m.png",

    "/images/leap.png",
    "/images/trinity.png",
    "/images/boi.jpg",
    "/images/zenith.png",
    "/images/access.jpg",
    "/images/amaanah.png",
    "/images/sproutly.png",
    "/images/hacey.png",
    "/images/piggytech.jpg",
    "/images/x3m.png",

    "/images/leap.png",
    "/images/trinity.png",
    "/images/boi.jpg",
    "/images/zenith.png",
    "/images/access.jpg",
    "/images/amaanah.png",
    "/images/sproutly.png",
    "/images/hacey.png",
    "/images/piggytech.jpg",
    "/images/x3m.png",

    "/images/leap.png",
    "/images/trinity.png",
    "/images/boi.jpg",
    "/images/zenith.png",
    "/images/access.jpg",
    "/images/amaanah.png",
    "/images/sproutly.png",
    "/images/hacey.png",
    "/images/piggytech.jpg",
    "/images/x3m.png",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[40vh] min-h-[320px] overflow-hidden rounded-[32px] bg-transparent">
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt={`showcase-${currentIndex}`}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="
                        absolute inset-0
                        w-full h-full
                        object-contain
                        p-10
                    "
        />
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none" />
    </div>
  );
};

export default InfiniteCarousel;
