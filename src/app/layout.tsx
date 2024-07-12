import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HJ Law Firm",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} sm:m-16 bg-main overflow-x-hidden`}>
        <div className="sm:flex sm:justify-center">
          <div className="sm:max-w-screen-2xl max-w-screen-lg w-full">
            <Header />
            {children}
          </div>
        </div>
      </body>
      <Footer />
    </html>
  );
}
