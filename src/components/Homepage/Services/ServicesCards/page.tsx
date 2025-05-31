import { motion } from "framer-motion";
import { ClipboardList, Scale, FolderOpen, FileSignature, AlertTriangle, Cog } from "lucide-react";

export default function ServicesCards() {
    return (
        <>
            <motion.div
                initial={{ opacity: "var(--opacity-from)", y: "var(--y-from)" }}
                whileInView={{ opacity: "var(--opacity-to)", y: "var(--y-to)" }}
                exit={{ opacity: "var(--opacity-from)", y: "var(--y-to)" }}
                transition={{ duration: 1, delay: 0.3 }}
                viewport={{ once: true }}
                className="h-[165px] w-[280px] rounded-lg bg-fundo-2/50 [--opacity-from:1%] [--opacity-to:100%] [--y-from:100px] [--y-to:0px] sm:h-[200px] sm:w-[400px] lg:h-[252px] lg:w-[365px]"
            >
                <div className="mx-5 mb-1 mt-3 flex sm:mx-5 sm:mb-1.5 sm:mt-5 lg:mx-6 lg:mb-2 lg:mt-6">
                    <FileSignature className="mx-1.5 my-1.5 h-[18px] w-[18px] text-color-7 transition ease-in-out hover:scale-[1.04] hover:text-color-1 sm:mx-1.5 sm:my-2 sm:h-[20px] sm:w-[20px] lg:mx-1.5 lg:my-[11px] lg:mr-2 lg:h-[22px] lg:w-[22px]" />
                    <h3 className="text-[18px] font-bold leading-relaxed sm:text-[26px] lg:text-[32px]">
                        Contract Formation
                    </h3>
                </div>
                <p className="mx-6 text-[12px] sm:mx-7 sm:text-sm lg:mx-8">
                    Legal review and preparation of contract drafts and supporting documents (LOIs, MOUs, guarantees, milestones, and more).

                </p>
            </motion.div>
            <motion.div
                initial={{ opacity: "var(--opacity-from)", y: "var(--y-from)" }}
                whileInView={{ opacity: "var(--opacity-to)", y: "var(--y-to)" }}
                exit={{ opacity: "var(--opacity-from)", y: "var(--y-to)" }}
                transition={{ duration: 1, delay: 0.45 }}
                viewport={{ once: true }}
                className="h-[165px] w-[280px] rounded-lg bg-fundo-2/50 [--opacity-from:1%] [--opacity-to:100%] [--y-from:100px] [--y-to:0px] sm:h-[200px] sm:w-[400px] lg:h-[252px] lg:w-[365px]"
            >
                <div className="mx-5 mb-1 mt-3 flex sm:mx-5 sm:mb-1.5 sm:mt-5 lg:mx-6 lg:mb-2 lg:mt-6">
                    <ClipboardList className="mx-1.5 my-1 h-[20px] w-[20px] text-color-7 transition ease-in-out hover:scale-[1.04] hover:text-color-1 sm:mx-1.5 sm:my-[7px] sm:h-[28px] sm:w-[28px] lg:mx-1.5 lg:my-[9px] lg:h-[32px] lg:w-[32px]" />
                    <h3 className="text-[18px] font-bold sm:text-[26px] lg:text-[32px]">
                        Contract Execution Management
                    </h3>
                </div>
                <p className="mx-6 text-[12px] sm:mx-7 sm:text-sm lg:mx-8">
                    Hands-on support for obligation tracking, deadline monitoring, and compliance to reduce risks and avoid disputes.

                </p>
            </motion.div>
            <motion.div
                initial={{ opacity: "var(--opacity-from)", y: "var(--y-from)" }}
                whileInView={{ opacity: "var(--opacity-to)", y: "var(--y-to)" }}
                exit={{ opacity: "var(--opacity-from)", y: "var(--y-to)" }}
                transition={{ duration: 1, delay: 0.6 }}
                viewport={{ once: true }}
                className="h-[165px] w-[280px] rounded-lg bg-fundo-2/50 [--opacity-from:1%] [--opacity-to:100%] [--y-from:100px] [--y-to:0px] sm:h-[200px] sm:w-[400px] lg:h-[252px] lg:w-[365px]"
            >
                <div className="mx-5 mb-1 mt-3 flex sm:mx-5 sm:mb-1.5 sm:mt-5 lg:mx-6 lg:mb-2 lg:mt-6">
                    <AlertTriangle className="mx-1.5 my-1 h-[18px] w-[18px] text-color-7 transition ease-in-out hover:scale-[1.04] hover:text-color-1 sm:mx-1.5 sm:my-[7px] sm:h-[24px] sm:w-[24px] lg:mx-1.5 lg:my-[9px] lg:h-[28px] lg:w-[28px]" />
                    <h3 className="text-[18px] font-bold sm:text-[26px] lg:text-[32px]">
                        Claims & Delay Analysis
                    </h3>
                </div>
                <p className="mx-6 text-[12px] sm:mx-7 sm:text-sm lg:mx-8">
                    Strategic advice, document preparation, risk evaluation, and feasibility studies for EoT and cost trade-offs.
                </p>
            </motion.div>
            <motion.div
                initial={{ opacity: "var(--opacity-from)", y: "var(--y-from)" }}
                whileInView={{ opacity: "var(--opacity-to)", y: "var(--y-to)" }}
                exit={{ opacity: "var(--opacity-from)", y: "var(--y-to)" }}
                transition={{ duration: 1, delay: 0.75 }}
                viewport={{ once: true }}
                className="h-[165px] w-[280px] rounded-lg bg-fundo-2/50 [--opacity-from:1%] [--opacity-to:100%] [--y-from:100px] [--y-to:0px] sm:h-[200px] sm:w-[400px] lg:h-[252px] lg:w-[365px]"
            >
                <div className="mx-5 mb-1 mt-3 flex sm:mx-5 sm:mb-1.5 sm:mt-5 lg:mx-6 lg:mb-2 lg:mt-6">
                    <FolderOpen className="mx-1.5 my-1 h-[18px] w-[18px] text-color-7 transition ease-in-out hover:scale-[1.04] hover:text-color-1 sm:mx-1.5 sm:my-[7px] sm:h-[24px] sm:w-[24px] lg:mx-1.5 lg:my-[9px] lg:h-[28px] lg:w-[28px]" />
                    <h3 className="text-[18px] font-bold sm:text-[26px] lg:text-[32px]">
                        Document Management
                    </h3>
                </div>
                <p className="mx-6 text-[12px] sm:mx-7 sm:text-sm lg:mx-8">
                    Smart solutions for organizing, tracking, and controlling all contract-related documents and communications.
                </p>
            </motion.div>
            <motion.div
                initial={{ opacity: "var(--opacity-from)", y: "var(--y-from)" }}
                whileInView={{ opacity: "var(--opacity-to)", y: "var(--y-to)" }}
                exit={{ opacity: "var(--opacity-from)", y: "var(--y-to)" }}
                transition={{ duration: 1, delay: 0.9 }}
                viewport={{ once: true }}
                className="h-[165px] w-[280px] rounded-lg bg-fundo-2/50 [--opacity-from:1%] [--opacity-to:100%] [--y-from:100px] [--y-to:0px] sm:h-[200px] sm:w-[400px] lg:h-[252px] lg:w-[365px]"
            >
                <div className="mx-5 mb-1 mt-3 flex sm:mx-5 sm:mb-1.5 sm:mt-5 lg:mx-6 lg:mb-2 lg:mt-6">
                    <Scale className="mx-1.5 my-1 h-[18px] w-[18px] text-color-7 transition ease-in-out hover:scale-[1.04] hover:text-color-1 sm:mx-1.5 sm:my-[7px] sm:h-[24px] sm:w-[24px] lg:mx-1.5 lg:my-[9px] lg:h-[28px] lg:w-[28px]" />
                    <h3 className="text-[18px] font-bold sm:text-[26px] lg:text-[32px]">
                        Negotiation & Compliance
                    </h3>
                </div>
                <p className="mx-6 text-[12px] sm:mx-7 sm:text-sm lg:mx-8">
                    Support during deal formation, conflict resolution, amendments, and compliance for lasting business partnerships.
                </p>
            </motion.div>
            <motion.div
                initial={{ opacity: "var(--opacity-from)", y: "var(--y-from)" }}
                whileInView={{ opacity: "var(--opacity-to)", y: "var(--y-to)" }}
                exit={{ opacity: "var(--opacity-from)", y: "var(--y-to)" }}
                transition={{ duration: 1, delay: 0.9 }}
                viewport={{ once: true }}
                className="h-[165px] w-[280px] rounded-lg bg-fundo-2/50 [--opacity-from:1%] [--opacity-to:100%] [--y-from:100px] [--y-to:0px] sm:h-[200px] sm:w-[400px] lg:h-[252px] lg:w-[365px]"
            >
                <div className="mx-5 mb-1 mt-3 flex sm:mx-5 sm:mb-1.5 sm:mt-5 lg:mx-6 lg:mb-2 lg:mt-6">
                    <Cog className="mx-1.5 my-1 h-[18px] w-[18px] text-color-7 transition ease-in-out hover:scale-[1.04] hover:text-color-1 sm:mx-1.5 sm:my-[7px] sm:h-[24px] sm:w-[24px] lg:mx-1.5 lg:my-[9px] lg:h-[28px] lg:w-[28px]" />
                    <h3 className="text-[18px] font-bold sm:text-[26px] lg:text-[32px]">
                        O&M Support & Governance
                    </h3>
                </div>
                <p className="mx-6 text-[12px] sm:mx-7 sm:text-sm lg:mx-8">
                    Advisory for operational continuity, asset preservation, and corporate compliance tailored to legal and industry standards.
                </p>
            </motion.div>
        </>
    );
}