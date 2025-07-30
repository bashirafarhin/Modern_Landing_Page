import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer";

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
        className={`${poppins.className} border border-pink-500 flex flex-col justify-between min-h-screen font-sans antialiased`}
      >
        <Header />
        <main className="mt-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
