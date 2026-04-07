import SmoothScrollProvider from "./common/SmoothScrollProvider";
import Footer from "./components/Common/Footer/Footer";
import Header from "./components/Common/Header/Header";
import "./globals.css";

export const metadata = {
  title: "BeeWeave - Your Ultimate AI Resource Hub in 2025",
  description:
    "Discover the best AI tools, resources, and insights at BeeWeave. Your ultimate destination for all things AI in 2025.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <SmoothScrollProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
