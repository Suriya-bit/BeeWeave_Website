"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/app/assets/Images/logo.svg";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const navLinks = [
  { label: "Services", href: "/services", hasDropdown: true },
  { label: "About", href: "/about" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

const serviceItems = [
  { label: "AI with SAP", href: "/services/ai-with-sap" },
  { label: "Cloud Transformation", href: "/services/cloud-transformation" },
  { label: "Odoo ERP Software", href: "/services/odoo-erp-software" },
  { label: "RISE with SAP", href: "/services/rise-with-sap" },
  { label: "SAP S/4HANA", href: "/services/sap-s4hana" },
  { label: "SAP BTP", href: "/services/sap-btp" },
];

const arrowVariants = {
  animate: {
    x: [0, 6, 0],
    transition: {
      duration: 2.2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setServicesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
    setMobileServicesOpen(false);
  };

  return (
    <>
      <header className="w-full z-50 sticky top-0 left-0 transition-all duration-300 bg-transparent backdrop-blur-sm backdrop-brightness-100 border-b border-gray-800">
        <div className="px-6 lg:px-30">
          <div className="flex items-center h-24 gap-6">
            {!menuOpen && (
              <Link
                href="/"
                className="flex items-center shrink-0"
                onClick={closeMenu}
              >
                <div className="relative w-16 h-16">
                  <Image
                    src={logo}
                    alt="Logo"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </Link>
            )}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks?.map((link) =>
                link.hasDropdown ? (
                  <div ref={dropdownRef} key={link.href} className="relative">
                    <button
                      onClick={() => setServicesOpen(!servicesOpen)}
                      className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-white rounded-md hover:bg-white/5 transition"
                    >
                      {link.label}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={`transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                      >
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </button>
                    {servicesOpen && (
                      <div className="absolute top-full left-0 -translate-x-6 mt-3 w-56 p-3 rounded-2xl 
backdrop-blur-2xl bg-[#0D0B1E]/90 border border-white/20 
shadow-[0_8px_32px_rgba(0,0,0,0.5)] z-[9999]">
                        {serviceItems?.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setServicesOpen(false)}
                            className="block px-4 py-2 text-sm text-white/80 
hover:text-white hover:bg-white/10 
rounded-xl transition-all duration-300"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="px-4 py-2 text-sm font-medium text-white rounded-md hover:bg-white/5 transition"
                  >
                    {link.label}
                  </Link>
                ),
              )}
            </nav>

            <div className="hidden md:flex items-center gap-3 ml-auto">
              <div className="p-[1.5px] rounded-full bg-linear-to-r from-[#7400FA] to-[#BC13F7]">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#0D0B1E]">
                  <span className="text-sm font-semibold text-white">EN</span>
                </div>
              </div>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 px-5 py-2 rounded-md text-sm font-semibold text-white bg-linear-to-r from-[#7400FA] to-[#BC13F7] hover:opacity-95 active:scale-95 transition-all shadow-lg shadow-purple-900/40 overflow-hidden relative"
              >
                <span className="relative z-10">Get Started</span>
                <motion.span
                  variants={arrowVariants}
                  animate="animate"
                  className="relative z-10 flex items-center"
                >
                  <ArrowRight className="w-4 h-4" />
                </motion.span>
                <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition duration-300 blur-xl"></span>
              </Link>
            </div>

            <div className="md:hidden flex items-center gap-2 ml-auto">
              <div className="p-[1.5px] rounded-full bg-linear-to-r from-[#7400FA] to-[#BC13F7]">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#0D0B1E]">
                  <span className="text-sm font-semibold text-white">EN</span>
                </div>
              </div>

              <div className="p-[1.5px] rounded-full bg-linear-to-r from-[#7400FA] to-[#BC13F7]">
                <button
                  onClick={() => setMenuOpen(!menuOpen)}
                  aria-label={menuOpen ? "Close menu" : "Open menu"}
                  className="w-10 h-10 flex flex-col justify-center items-center gap-1.5 rounded-full bg-[#0D0B1E] hover:bg-white/5 transition z-60"
                >
                  <span
                    className={`block h-0.5 w-5 bg-gray-300 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
                  />
                  <span
                    className={`block h-0.5 w-5 bg-gray-300 transition-all duration-300 ${menuOpen ? "opacity-0 scale-x-0" : ""}`}
                  />
                  <span
                    className={`block h-0.5 w-5 bg-gray-300 transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div
        className={`md:hidden fixed inset-0 z-999 transition-all duration-300 ${menuOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
          }`}
      >
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={closeMenu}
        />
        <div
          className={`absolute top-0 right-0 h-full w-72 bg-[#0D0B1E] border-l border-white/10 shadow-2xl flex flex-col transition-transform duration-300 ${menuOpen ? "translate-x-0" : "translate-x-full"
            }`}
        >
          <div className="flex items-center justify-between px-6 h-24 border-b border-white/10 shrink-0">
            <Link href="/" onClick={closeMenu}>
              <div className="relative w-12 h-12">
                <Image src={logo} alt="Logo" fill className="object-contain" />
              </div>
            </Link>
            <button
              onClick={closeMenu}
              className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-white/5 transition text-gray-400 hover:text-white"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>

          <nav className="flex flex-col px-4 py-6 gap-1 flex-1 overflow-y-auto">
            {navLinks?.map((link) =>
              link.hasDropdown ? (
                <div key={link.href}>
                  <button
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className="w-full flex items-center justify-between px-4 py-3 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-xl transition"
                  >
                    {link.label}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={`transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`}
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </button>
                  {mobileServicesOpen && (
                    <div className="ml-4 mt-1 flex flex-col gap-0.5 border-l border-white/10 pl-4">
                      {serviceItems?.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={closeMenu}
                          className="block px-3 py-2.5 text-sm text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="px-4 py-3 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-xl transition"
                >
                  {link.label}
                </Link>
              ),
            )}
          </nav>
          <div className="px-4 pb-8 pt-4 border-t border-white/10 flex flex-col gap-3 shrink-0">
            <div className="flex items-center gap-3">
              <div className="p-[1.5px] rounded-full bg-linear-to-r from-[#7400FA] to-[#BC13F7]">
                <div className="rounded-full bg-[#0D0B1E] px-4 py-2">
                  <span className="text-sm font-semibold text-white">EN</span>
                </div>
              </div>
              <span className="text-xs text-gray-500">Language</span>
            </div>
            <Link
              href="/contact"
              onClick={closeMenu}
              className="w-full text-center px-5 py-3 rounded-xl text-sm font-semibold text-white 
  bg-linear-to-r from-[#7400FA] to-[#BC13F7] 
  hover:scale-105 active:scale-95 
  transition-all duration-300 ease-out 
  shadow-lg shadow-purple-900/40"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
