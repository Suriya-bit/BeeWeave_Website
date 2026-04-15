"use client";

import { usePathname } from "next/navigation";
import Header from "../components/Common/Header/Header";
import Footer from "../components/Common/Footer/Footer";
import ScrollToTop from "../common/ScrollToTop";

export default function LayoutWrapper({ children }) {
    const pathname = usePathname();
    const isLaunchPage = pathname === "/launch";

    return (
        <>
            <ScrollToTop />
            {!isLaunchPage && <Header />}
            <main>{children}</main>
            {!isLaunchPage && <Footer />}
        </>
    );
}