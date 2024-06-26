import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/Organisms/Navbar";
import { ThemeProvider } from "next-themes";
import Providers from "./providers";
import Footer from "./_components/Organisms/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jerrie Jayadi",
  description: "Jerrie Jayadi's personal space",
};

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <html lang={locale}>
      <body className={`max-w-7xl bg-[#F4F4F4] mx-auto dark:bg-[#101010]`}>
        <Providers>
          <Navbar />
          <main className="max-w-7xl mx-auto bg-[#FFFFFF] dark:bg-[#242424] px-8 md:px-16 lg:px-32 pb-12 pt-48">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
