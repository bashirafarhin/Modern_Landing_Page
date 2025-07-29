import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer";
import { SmoothScrollProvider } from "@/lib/Providers/SmoothScrollProvider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"], // Include the font weights you need
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "AddMyBrand",
  description: "Modern Landing Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} flex flex-col min-h-screen w-screen justify-end items-center font-sans antialiased`}
      >
        <Toaster position="top-right" />
        {/* <SmoothScrollProvider options={{ smooth: true }}> */}
        <Header />
        <main data-scroll-container className="mt-20">
          {children}
        </main>
        <Footer />
        {/* </SmoothScrollProvider> */}
      </body>
    </html>
  );
}
