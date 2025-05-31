"use client";
import { motion } from "framer-motion";

export default function WhoWeAreCard() {
    return (
        <>
            <motion.div
                initial={{ opacity: "var(--opacity-from)", y: "var(--y-from)" }}
                whileInView={{ opacity: "var(--opacity-to)", y: "var(--y-to)" }}
                exit={{ opacity: "var(--opacity-from)", y: "var(--y-to)" }}
                transition={{ ease: "easeInOut", duration: 1, delay: 0 }}
                viewport={{ once: true }}
                className=" [--opacity-from:1%] [--opacity-to:100%] [--y-from:75px] [--y-to:0px] "
            >
                <h2 className="text-center font-oxanium text-[24px] font-bold leading-[30px] sm:text-[32px] sm:leading-[48px] lg:text-[48px] lg:leading-[60px]">
                    Who We Are
                </h2>
            </motion.div>
            <motion.div
                initial={{ opacity: "var(--opacity-from)", y: "var(--y-from)" }}
                whileInView={{ opacity: "var(--opacity-to)", y: "var(--y-to)" }}
                exit={{ opacity: "var(--opacity-from)", y: "var(--y-to)" }}
                transition={{ ease: "easeInOut", duration: 1, delay: 0.2 }}
                viewport={{ once: true }}
                className=" [--opacity-from:1%] [--opacity-to:100%] [--y-from:75px] [--y-to:0px] "
            >
                {/* Caixa Quem Somos */}
                <div className="flex w-[280px] flex-col rounded-2xl bg-fundo-1/50 sm:w-[580px] sm:justify-center lg:w-[1024px]">
                    {/* Texto e números */}
                    <div className="m-3 mr-4 w-[256px] sm:m-8 sm:w-auto">
                        {/* Texto */}
                        <p className="mb-4 text-[14px] sm:mb-8 sm:text-base">
                            ILLUMINA is a contract management consulting company based in Orlando, FL, committed to helping businesses navigate contracts with clarity, confidence, and control. We specialize in advisory, compliance, and training for small and mid-sized businesses in the cleaning, security, and facilities sectors.
                        </p>
                    </div>
                    {/* MVV */}
                    <div className="m-3 px-6 lg:m-8 px-8 rounded-lg shadow-[0_1px_12px_rgb(8,20,38,0.75)]">                        {/* Título */}
                        <h4 className="mb-2 mt-3 flex justify-center font-oxanium text-[20px] font-bold text-color-2 sm:mt-4 sm:text-[24px]">
                            MVV
                        </h4>
                        {/* Missão, Valores e Visão */}
                        <div className="flex flex-col sm:grid sm:grid-cols-2 sm:gap-4 mb-2">
                            <div>
                                <div className="text-center sm:text-left">
                                    <h5 className="font-oxanium text-[16px] font-semibold sm:text-[22px]">
                                        Mission
                                    </h5>
                                    <p className="text-[12px] sm:text-[16px]">
                                        To simplify and safeguard contractual processes, empowering clients through expert guidance tailored to their needs.
                                    </p>
                                </div>
                                <div className="my-2 text-center sm:text-left">
                                    <h5 className="font-oxanium text-[16px] font-semibold sm:text-[22px]">
                                        Vision
                                    </h5>
                                    <p className="text-[12px] sm:text-left sm:text-[16px]">
                                        To be the leading partner for businesses seeking structure, transparency, and success through strategic contract management.
                                    </p>
                                </div>
                            </div>
                            <div className="px-4">
                                <div className="text-center sm:text-left">
                                    <h5 className="font-oxanium text-[16px] font-semibold sm:text-[22px]">
                                        Values
                                    </h5>
                                    <div className="flex flex-col gap-1 p-2 text-[12px] font-bold sm:gap-2 sm:text-[16px]">
                                        <p>
                                            <span className="font-oxanium text-color-1">A</span>
                                            ccessibility - Clear solutions for every client

                                        </p>
                                        <p>
                                            <span className="font-oxanium text-color-1">C</span>
                                            reativity - Smart, flexible thinking
                                        </p>
                                        <p>
                                            <span className="font-oxanium text-color-1">I</span>
                                            ntegrity - Advice you can trust
                                        </p>
                                        <p>
                                            <span className="font-oxanium text-color-1">P</span>
                                            racticality - Solutions that work
                                        </p>
                                        <p>
                                            <span className="font-oxanium text-color-1">C</span>
                                            lient Focus - Your business is our priority
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    );
}