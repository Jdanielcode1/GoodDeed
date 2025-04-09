import { ThemeProvider } from "next-themes";
import { Geist } from "next/font/google";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { hasEnvVars } from "@/utils/supabase/check-env-vars";
import "./globals.css";

const geistSans = Geist({
  display: "swap",
  subsets: ["latin"],
});

export const metadata = {
  title: "GoodDeed - Help for Seniors",
  description: "Connecting seniors with trusted helpers for everyday tasks",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={geistSans.className} suppressHydrationWarning>
      <body className="bg-background text-foreground min-h-screen flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="flex-1 w-full flex flex-col items-center">
            <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
              {children}
            </div>
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}