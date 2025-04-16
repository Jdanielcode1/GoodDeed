import { Geist } from "next/font/google";
import Header from "@/components/home/header";
import Footer from "@/components/layout/footer";
import "./globals.css";

const geistSans = Geist({
  display: "swap",
  subsets: ["latin"],
});

export const metadata = {
  title: "GoodDeed - Help for Seniors",
  description: "Connecting seniors with trusted helpers for everyday tasks",
};

export function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full">
      {children}
    </div>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={geistSans.className}>
      <body className="bg-white text-gray-800 min-h-screen flex flex-col">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}