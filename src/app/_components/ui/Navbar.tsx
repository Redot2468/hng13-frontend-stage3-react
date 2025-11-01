"use client";

import Logo from "@/app/_components/ui/Logo";
import { useCloseModal } from "@/app/_hooks/useCloseModal";
import { DESKTOP_MENU_LINKS, MENU_LINKS } from "@/app/_utils/constant";
import Cart from "@/public/cart.svg";
import Menu from "@/public/menu.svg";
import { ChevronRight, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export default function Navbar() {
  const {
    isModalOpen: isNavOpen,
    setIsModalOpen: setIsNavOpen,
    toggleModal: toggleNav,
  } = useCloseModal(".categories-menu");

  useEffect(() => {
    function closeMobileNavInDesktop() {
      if (window.innerWidth >= 1024) {
        setIsNavOpen(false);
      }
    }

    window.addEventListener("resize", closeMobileNavInDesktop);

    return () => window.removeEventListener("resize", closeMobileNavInDesktop);
  }, [setIsNavOpen]);

  return (
    <nav className="top-0 z-10 w-full items-center bg-[#191919] px-6">
      <div className="block__container flex h-20 w-full items-center border-b border-neutral-700">
        <div className="flex w-full items-center justify-between">
          <div className="md:flex md:items-center md:gap-8">
            <button aria-label="menu" className="lg:hidden" onClick={toggleNav}>
              <Image
                src={Menu}
                alt="The navigation bar menu button"
                quality={100}
              />
            </button>

            <div className="hidden md:block">
              <Logo />
            </div>
          </div>

          <div className="md:hidden">
            <Logo />
          </div>

          <ul className="hidden flex-row items-center justify-center gap-[34px] lg:flex">
            {DESKTOP_MENU_LINKS.map((menulink) => (
              <Link href={menulink.link} key={menulink.name}>
                <li className="hover:text-brown-dark text-[13px] font-bold tracking-[2px] text-white capitalize transition-all">
                  {menulink.name}
                </li>
              </Link>
            ))}
          </ul>

          <button>
            <Image
              src={Cart}
              alt="The navigation bar menu button"
              quality={100}
            />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isNavOpen && (
          <motion.div
            initial={{
              width: 0,
              opacity: 0,
            }}
            animate={{
              width: "100%",
              opacity: 1,
            }}
            exit={{
              width: 0,
              opacity: 0,
            }}
            className="fixed top-0 left-0 z-50 h-full w-full overflow-hidden bg-black/40 backdrop-blur-xs"
          >
            <div className="flex h-20 w-full items-center justify-end px-6">
              <button aria-label="close nav" onClick={toggleNav}>
                <X className="text-white" />
              </button>
            </div>
            <aside
              className={`categories-menu z-50 flex w-full flex-col items-center justify-center gap-20 rounded-b-lg bg-white px-6 pt-20 pb-10 transition-all duration-1000 sm:flex-row sm:gap-4`}
            >
              {MENU_LINKS?.map((menulink, idx) => (
                <div
                  key={idx}
                  className="bg-white-3 relative flex w-full flex-col items-center rounded-lg"
                >
                  <Image
                    src={menulink.src}
                    alt={menulink.alt}
                    quality={100}
                    priority={true}
                    className="absolute -top-12"
                  />

                  <div className="flex flex-col items-center justify-center gap-3 pt-20 pb-4">
                    <p className="font-bold tracking-[1.07px] uppercase">
                      {menulink.name}{" "}
                    </p>
                    <Link href={menulink.link}>
                      <button className="flex items-center gap-1 text-[13px] font-bold tracking-[1px] text-black/50 uppercase">
                        shop{" "}
                        <span>
                          <ChevronRight className="text-brown-dark size-4" />
                        </span>
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </aside>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
