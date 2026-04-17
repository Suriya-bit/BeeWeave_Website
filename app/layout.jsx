import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import LayoutWrapper from "./LayoutWrapper/LayoutWrapper";

export const metadata = {
  title: "BeeWeave - Your Ultimate AI Resource Hub in 2025",
  description:
    "Discover the best AI tools, resources, and insights at BeeWeave. Your ultimate destination for all things AI in 2025.",
  verification: {
    google: "De0yegm7cjCpN-tRgB5pCmB4QN7ms4PQIMuSuLYivXw",
  },
};

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-jakarta",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className={jakarta.variable} suppressHydrationWarning={true}>
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}