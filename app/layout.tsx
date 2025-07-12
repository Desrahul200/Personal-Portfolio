import { relative } from "path";
import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/header";
import { Analytics } from "@vercel/analytics/react";
import GoogleAnalytics from "@/components/google-analytics";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Rahul | Personal Portfolio",
  description: "Rahul is a Data Scientist and Software Engineer with experience building ML systems, full-stack tools, and scalable pipelines for enterprise and research use cases.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36`}
      >
        <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>
        <div
          className="bg-[#dbd7fb] -z-10 absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] 
        w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"
        ></div>
        <Header />
        {children}
        <Analytics />
        <GoogleAnalytics />
      </body>
    </html>
  );
}
