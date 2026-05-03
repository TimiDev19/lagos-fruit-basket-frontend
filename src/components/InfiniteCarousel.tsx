"use client";

import { motion } from "framer-motion";

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

const InfiniteCarousel = () => {
    return (
        <div className="relative w-full overflow-hidden">
            <motion.div
                className="flex space-x-4"
                initial={{ x: 0 }}
                animate={{ x: "-100%" }}
                transition={{
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 10, // Adjust for speed
                    ease: "linear",
                }}
            >
                {[...images, ...images].map((src, index) => (
                    <div key={index} className="w-64 h-[260px] flex items-center justify-center flex-shrink-0 overflow-hidden relative py-2">
                        <img
                            src={src}
                            alt={`carousel-image-${index}`}
                            width={80}
                            height={80}
                            className="w-[100px] h-auto mb-2 object-cover border-[#EEAD0E] mx-[3px]"
                        />
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default InfiniteCarousel;
