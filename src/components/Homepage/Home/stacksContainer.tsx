"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function StacksContainer({ children }: React.PropsWithChildren) {
    return (
        <div className="flex w-full flex-col items-center sm:top-[360px]">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ ease: "easeInOut", duration: 1, delay: 3.5 }}
                viewport={{ once: true }}
                className="flex w-full flex-col items-center"
            >
                <Image
                    src="/light-effect_avcltf.png"
                    alt="Efeito de luz"
                    width={600}
                    height={600}
                    draggable={false}
                    priority
                    className="absolute top-[300px] select-none"
                />
            </motion.div>
        </div>
    );
}