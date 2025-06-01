"use client";

import { TypeAnimation } from "react-type-animation";
import { StacksContainer } from "./stacksContainer";
import { motion } from "framer-motion";

export default function LogoHome() {
  const CURSOR_CLASS_NAME = "custom-type-animation-cursor";

  return (
    <>
      <section
        className="m-0 flex h-[650px] w-full items-center justify-center p-0 sm:h-[875px] lg:h-[1000px]"
        id="home"
      >
        <div className="absolute top-[250px] w-[280px] sm:w-[600px] lg:w-[750px]">
          <TypeAnimation
            cursor={false}
            sequence={["", 600, "ILLUMINA"]}
            speed={{ type: "keyStrokeDelayInMs", value: 150 }}
            wrapper="h1"
            className="bg-gradient-to-b from-orange-50 via-orange-500 to-orange-800 bg-clip-text text-center font-quicksand text-[58px] font-semibold leading-[90px] text-transparent selection:text-color-7 sm:text-[120px] lg:text-[156px] sm:leading-[195px]"
          />
          <motion.p
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.8, ease: "easeOut" }}
            className="mt-1 text-center font-nunito text-[16px] leading-[24px] text-color-7 sm:text-[20px] sm:leading-[30px] lg:text-[24px] lg:leading-[36px]"
          >
            Your trusted partner in structured, risk-aware, and legally secure contract solutions for growing businesses.
          </motion.p>
          <TypeAnimation
            cursor={false}
            className={CURSOR_CLASS_NAME}
            style={{ fontSize: "52px", marginTop: "20px"}}
            sequence={[
              (el) => el!.classList.remove(CURSOR_CLASS_NAME),
              "",
              2550,
              (el) => el!.classList.add(CURSOR_CLASS_NAME),
              "Coming Soon",
            ]}
            speed={{ type: "keyStrokeDelayInMs", value: 40 }}
            wrapper="p"
            repeat={0}
          />
          <StacksContainer />
        </div>
      </section>
    </>
  );
}