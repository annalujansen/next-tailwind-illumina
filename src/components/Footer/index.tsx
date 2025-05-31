import Link from "next/link";
import {
  FaEnvelope,
  FaInstagram,
  FaLinkedin,
  FaPhoneAlt,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="absolute z-40 flex h-[96px] w-full items-center justify-center gap-4 bg-transparent text-color-7 sm:justify-center sm:gap-10">
      <div className="font-quicksand text-[28px] font-bold sm:text-[36px]">
        <Link href="/">
          <span className="hover:[text-shadow:_0_0_5px_rgb(255_255_255_/_40%)]">
            illumina
          </span>
        </Link>
      </div>
      <div className="flex flex-col gap-[6px]">
        <div className="flex justify-center gap-[20px]">
          <Link
            href="https://www.linkedin.com"
            target="_blank"
          >
            <FaLinkedin
              size={20}
              className="text-color-7 transition ease-in-out hover:scale-[1.05] hover:text-color-1"
            />
          </Link>
          <Link href="https://www.instagram.com" target="_blank">
            <FaInstagram
              size={20}
              className="text-color-7 transition ease-in-out hover:scale-[1.05] hover:text-color-1"
            />
          </Link>
          <Link href="tel:+14075550198" target="_blank">
            <FaPhoneAlt
              size={20}
              className="text-color-7 transition ease-in-out hover:scale-[1.05] hover:text-color-1"
            />
          </Link>
          <Link href="mailto:contact@illuminaconsulting.com" target="_blank">
            <FaEnvelope
              size={20}
              className="text-color-7 transition ease-in-out hover:scale-[1.05] hover:text-color-1"
            />
          </Link>
        </div>
        <p className="text-center font-nunito text-[8px] sm:text-[10px]">
          Copyright © 2025 | Created by Illumina
        </p>
      </div>
    </footer>
  );
}