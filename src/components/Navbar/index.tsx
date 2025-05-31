"use client";
import { MenuIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Link } from "react-scroll";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "../ui/accordion";
import { useScrollProgress } from "../../hooks/useScrollNavbar";

export default function Navbar() {
    const [navbaropen, setNavbaropen] = useState<boolean>(false);
    const scrollProgress = useScrollProgress();

    const router = useRouter();

    return (
        <nav
            className={`fixed z-40 flex w-screen items-center justify-center transition-all ease-in ${scrollProgress > 1 && "h-[72px] bg-fundo-transparente/80 backdrop-blur-sm"} ${scrollProgress <= 1 && " h-[96px]"} ${scrollProgress > 1 && navbaropen && "bg-fundo-transparente/0"}`}
        >
            <ul className="hidden items-center gap-[4vw] font-quicksand text-[20px] text-xl font-semibold text-color-7 sm:flex">
                <li className="text-[36px] font-bold text-color-7">
                    <Link
                        to="home"
                        className="cursor-pointer"
                        spy={true}
                        smooth={true}
                        duration={700}
                        onClick={() => router.push("/#home")}
                    >
                        <span className="hover:[text-shadow:_0_0_5px_rgb(255_255_255_/_40%)]">
                            illumina
                        </span>
                    </Link>
                </li>
                <li>
                    <Link
                        className="cursor-pointer transition delay-75 ease-in hover:text-color-1"
                        to="services"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={700}
                        onClick={() => router.push("/#services")}
                    >
                        Services
                    </Link>
                </li>
                <li>
                    <Link
                        className="cursor-pointer transition delay-75 ease-in hover:text-color-1"
                        to="aboutus"
                        spy={true}
                        smooth={true}
                        offset={-10}
                        duration={700}
                        onClick={() => router.push("/#aboutus")}
                    >
                        About Us
                    </Link>
                </li>
                <li>
                    <Link
                        className="cursor-pointer transition delay-75 ease-in hover:text-color-1"
                        to="packages"
                        spy={true}
                        smooth={true}
                        offset={50}
                        duration={700}
                        onClick={() => router.push("/#packages")}
                    >
                        Packages
                    </Link>
                </li>
                <li>
                    <Link
                        className="cursor-pointer transition delay-75 ease-in hover:text-color-1"
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={100}
                        duration={700}
                        onClick={() => router.push("/#contact")}
                    >
                        Contact
                    </Link>
                </li>
            </ul>
            <Accordion
                className="flex w-full justify-between border-none sm:hidden"
                type="single"
                collapsible
            >
                <AccordionItem className="w-full border-none" value="menu">
                    <div className="flex items-center justify-between font-quicksand font-bold">
                        <div className="ml-6 text-[36px] text-color-7">
                            <Link
                                to="home"
                                className="cursor-pointer"
                                spy={true}
                                smooth={true}
                                duration={700}
                                onClick={() => router.push("/#home")}
                            >
                                <span className="transition delay-75 ease-in-out hover:[text-shadow:_0_0_5px_rgb(255_255_255_/_40%)]">
                                    illumina
                                </span>
                            </Link>
                        </div>
                        <AccordionTrigger
                            className="mr-6 text-color-7"
                            onClick={() => setNavbaropen(true)}
                        >
                            <MenuIcon size={42} />
                        </AccordionTrigger>
                    </div>
                    <AccordionContent className="w-full bg-fundo-transparente/60">
                        <ul className="flex flex-col items-center font-quicksand text-[14px] font-semibold text-color-7">
                            <li className="text-[28px] font-bold text-color-7">
                                <Link
                                    to="home"
                                    className="cursor-pointer"
                                    spy={true}
                                    smooth={true}
                                    duration={700}
                                    onClick={() => router.push("/#home")}
                                >
                                    <span className="text-color-2">{"{"}</span>
                                    <span className="transition delay-75 ease-in-out hover:[text-shadow:_0_0_5px_rgb(255_255_255_/_40%)]">
                                        illumina
                                    </span>
                                    <span className="text-color-2">{"}"}</span>
                                </Link>
                            </li>
                            <li className="mt-4">
                                <Link
                                    className="cursor-pointer transition delay-75 ease-in-out hover:text-color-1"
                                    to="services"
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    duration={700}
                                    onClick={() => router.push("/#services")}
                                >
                                    Services
                                </Link>
                            </li>
                            <li className="mt-4">
                                <Link
                                    className="cursor-pointer transition delay-75 ease-in-out hover:text-color-1"
                                    to="aboutus"
                                    spy={true}
                                    smooth={true}
                                    offset={-10}
                                    duration={700}
                                    onClick={() => router.push("/#aboutus")}
                                >
                                    About Us
                                </Link>
                            </li>
                            <li className="mt-4">
                                <Link
                                    className="cursor-pointer transition delay-75 ease-in-out hover:text-color-1"
                                    to="packages"
                                    spy={true}
                                    smooth={true}
                                    offset={50}
                                    duration={700}
                                    onClick={() => router.push("/#packages")}
                                >
                                    Packages
                                </Link>
                            </li>
                            <li className="mt-4">
                                <Link
                                    className="cursor-pointer transition delay-75 ease-in-out hover:text-color-1"
                                    to="contact"
                                    spy={true}
                                    smooth={true}
                                    offset={100}
                                    duration={700}
                                    onClick={() => router.push("/#contact")}
                                >
                                    Contact
                                </Link>
                            </li>
                            <li className="mt-2">
                                <AccordionTrigger
                                    className="text-color-7"
                                    onClick={() => setNavbaropen(false)}
                                ></AccordionTrigger>
                            </li>
                        </ul>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
            {!navbaropen && (
                <div
                    style={{ width: `${scrollProgress > 1 ? scrollProgress : 0}%` }}
                    className="transition-width absolute bottom-0 left-0 z-50 h-1 w-full bg-color-7/30 duration-75 ease-in-out"
                ></div>
            )}
        </nav>
    );
}