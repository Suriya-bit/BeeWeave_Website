import SmoothScrollProvider from "./common/SmoothScrollProvider";
import Footer from "./components/Common/Footer/Footer";
import Header from "./components/Common/Header/Header";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";


export const metadata = {
  title: "BeeWeave - Your Ultimate AI Resource Hub in 2025",
  description:
    "Discover the best AI tools, resources, and insights at BeeWeave. Your ultimate destination for all things AI in 2025.",
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
      <body className={jakarta.variable} suppressHydrationWarning={true}>
        <SmoothScrollProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
