"use client";
import React, { ReactNode, useState } from "react";
import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";

export const AnimatedTooltip = ({ children }: { children: ReactNode }) => {
  const [isHovered, setIsHovered] = useState(false);
  const springConfig = { stiffness: 100, damping: 10 };
  const x = useMotionValue(0);
  const rotate = useSpring(useTransform(x, [-100, 100], [-15, 15]), springConfig);
  const translateX = useSpring(useTransform(x, [-100, 100], [-30, 30]), springConfig);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const halfWidth = event.currentTarget.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth);
  };

  return (
    <div
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
    >
      {children}
      <AnimatePresence mode="popLayout">
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.6 }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              transition: { type: "spring", stiffness: 260, damping: 10 },
            }}
            exit={{ opacity: 0, y: 20, scale: 0.6 }}
            style={{ translateX: translateX, rotate: rotate, whiteSpace: "nowrap" }}
            className="absolute -top-15 left-1/2 -translate-x-1/2 flex text-xs flex-col items-center justify-center rounded-md bg-black z-50 shadow-md px-4 py-2"
          >
            <div className="absolute inset-x-10 z-30 w-[20%] -bottom-px bg-gradient-to-r from-transparent via-100 to-transparent h-px " />
            <div className="absolute left-10 w-[40%] z-30 -bottom-px bg-gradient-to-r from-transparent via-100 to-transparent h-px " />
            <div className="font-bold relative z-30 text-base">I'm 18 Y.O</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
