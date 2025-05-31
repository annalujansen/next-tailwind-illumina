import PackagesCards  from "./PackagesCard"
import { motion } from "framer-motion";

export default function Packages() {
  return (
    <section id="packages" className="m-0 flex w-full items-center justify-center p-0">
      <div className="w-[85%] py-8 sm:py-16 lg:py-32">
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-center font-oxanium text-[24px] font-bold leading-[30px] sm:text-[32px] sm:leading-[48px] lg:text-[48px] lg:leading-[60px]">
              Packages
            </h2>
            <p className="my-1 w-[20px] border-b-2 border-color-1 sm:my-2 sm:w-[52px] lg:my-4 lg:w-[84px]"></p>
            <p className="text-center font-nunito text-[12px] max-sm:w-[280px] sm:text-[14px] lg:text-[16px]">
              Tailored <span className="font-oxanium font-bold">contract management</span> solutions to fit your business needs.
            </p>
          </div>
        <div className="my-6 flex flex-wrap justify-center gap-4 font-nunito sm:mx-12 sm:my-8 sm:gap-6 lg:gap-8">
          <PackagesCards />
        </div>
      </div>
    </section>
  );
}
