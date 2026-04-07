"use client";

import Image from "next/image";
import Link from "next/link";
import footerLogo from "@/app/assets/Images/footer-logo.svg";
import { FaFacebookF, FaInstagram, FaYoutube, FaGlobe } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

const services = [
  { label: "Core ERP Services", href: "#" },
  { label: "SAP S/4HANA", href: "#" },
  { label: "RISE with SAP", href: "#" },
  { label: "Digital Services", href: "#" },
  { label: "Cloud Transformation", href: "#" },
];

const legal = [
  { label: "Terms of Services", href: "#" },
  { label: "Privacy Policy", href: "#" },
  { label: "Cookie Policy", href: "#" },
];

const socials = [
  { icon: FaFacebookF, href: "#" },
  { icon: FaInstagram, href: "#" },
  { icon: FaYoutube, href: "#" },
  { icon: FaXTwitter, href: "#" },
  { icon: FaGlobe, href: "#" },
];

const Footer = () => {
  return (
    <footer className="bg-black px-6 lg:px-30 py-16 border-t border-white/10">
     <div className="flex flex-col md:flex-row md:justify-between gap-12">
        <div className="flex flex-col gap-6">
          <div className="relative w-16 h-16">
            <Image
              src={footerLogo}
              alt="Footer Logo"
              fill
              className="object-contain"
            />
          </div>
          <p className="text-sm text-white/50 leading-relaxed max-w-[220px]">
            Our SAP implementation services in India bring the skills,
            experience and local presence your business needs to succeed.
          </p>
          <div className="flex items-center gap-3">
            {socials.map((social, i) => (
              <Link
                key={i}
                href={social.href}
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/50 transition"
              >
                <social.icon size={16} />
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="text-xs font-semibold tracking-widest text-white uppercase">
            Quick Links
          </h4>
          <ul className="flex flex-col gap-3">
            {quickLinks?.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-sm text-white/50 hover:text-white transition"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="text-xs font-semibold tracking-widest text-white uppercase">
            Services
          </h4>
          <ul className="flex flex-col gap-3">
            {services?.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-sm text-white/50 hover:text-white transition"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="text-xs font-semibold tracking-widest text-white uppercase">
            Legal
          </h4>
          <ul className="flex flex-col gap-3">
            {legal?.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-sm text-white/50 hover:text-white transition"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
