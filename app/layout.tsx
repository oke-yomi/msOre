import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";

const generalSans = localFont({
  src: [
    {
      path: "../fonts/GeneralSans-Extralight.otf",
      weight: "200",
    },
    {
      path: "../fonts/GeneralSans-Light.otf",
      weight: "300",
    },
    {
      path: "../fonts/GeneralSans-Regular.otf",
      weight: "400",
    },
    {
      path: "../fonts/GeneralSans-Medium.otf",
      weight: "500",
    },
    {
      path: "../fonts/GeneralSans-Semibold.otf",
      weight: "600",
    },
    {
      path: "../fonts/GeneralSans-Bold.otf",
      weight: "700",
    },
  ],
  variable: "--font-general-sans",
});

interface Props {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: "Sabo Website",
  description: "",
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body
        className={`${generalSans.variable} font-sans`}
        suppressHydrationWarning={true}
      >
        <main className="w-full flex justify-center items-center">
          <div className="w-full mx-auto max-w-screen-3xl">
            <Navbar />
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
