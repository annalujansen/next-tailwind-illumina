"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  FaFacebookSquare,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";

export default function FindUs() {
  return (
    <>
      <motion.div
        initial={{ opacity: "var(--opacity-from)", y: "var(--y-from)" }}
        whileInView={{ opacity: "var(--opacity-to)", y: "var(--y-to)" }}
        exit={{ opacity: "var(--opacity-from)", y: "var(--y-to)" }}
        transition={{ ease: "easeInOut", duration: 1, delay: 0.4 }}
        viewport={{ once: true }}
        className="h-[332px] w-[280px] rounded-lg bg-fundo-0/75 p-4 [--opacity-from:1%] [--opacity-to:100%] [--y-from:75px] [--y-to:0px] sm:h-[598px] sm:w-[496px] sm:p-6"
      >
        {/* Título */}
        <h3 className="mb-3 text-center font-oxanium text-[14px] font-bold leading-[18px] sm:mb-6 sm:text-[32px] sm:leading-[40px]">
          How to Find Us
        </h3>
        <div className="flex flex-col justify-center rounded-lg">
          {/* Mapa */}
          <div className="z-10">
            <iframe
              className="h-[248px] w-[248px] border-none sm:h-[448px] sm:w-[448px]"
              loading="lazy"
              allowFullScreen
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d89427.97304789158!2d-81.45649277313617!3d28.48108415558025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e773cc1b5b2a8d%3A0x9e9e9f4c52167d97!2sOrlando%2C%20FL!5e0!3m2!1sen!2sus!4v1717171717171"
            ></iframe>
          </div>
          {/* Redes Sociais */}
          <div className="relative bottom-6 z-20 mx-auto sm:bottom-11">
            <div className="flex justify-center gap-3 rounded-lg bg-fundo-2 p-3 sm:gap-5 sm:p-5">
              <Link
                href="https://www.facebook.com"
                target="_blank"
                className="rounded-lg bg-fundo-0 p-[6px] sm:p-3"
              >
                <FaFacebookSquare className="size-[16px] text-color-7 transition ease-in-out hover:scale-[1.05] hover:text-color-1 sm:size-[26px]" />
              </Link>
              <Link
                href="https://www.linkedin.com"
                target="_blank"
                className="rounded-lg bg-fundo-0 p-[6px] sm:p-3"
              >
                <FaLinkedin className="size-[16px] text-color-7 transition ease-in-out hover:scale-[1.05] hover:text-color-1 sm:size-[26px]" />
              </Link>
              <Link
                href="https://www.instagram.com"
                target="_blank"
                className="rounded-lg bg-fundo-0 p-[6px] sm:p-3"
              >
                <FaInstagram className="size-[16px] text-color-7 transition ease-in-out hover:scale-[1.05] hover:text-color-1 sm:size-[26px]" />
              </Link>
              <Link
                href="https://wa.me/14075550198"
                target="_blank"
                className="rounded-lg bg-fundo-0 p-[6px] sm:hidden sm:p-3"
              >
                <FaWhatsapp className="size-[16px] text-color-7 transition ease-in-out hover:scale-[1.05] hover:text-color-1 sm:size-[26px]" />
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}