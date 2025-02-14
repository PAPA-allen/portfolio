"use client";

import React, { FC } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

type Props = {
  children: React.ReactNode;
};

const PageTransition: FC<Props> = ({ children }) => {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">

      <motion.div
        key={pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.4, ease: "easeInOut" } }}
        exit={{ opacity: 0, transition: { duration: 0.4, ease: "easeInOut" } }}
        className="h-screen w-screen"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition;
