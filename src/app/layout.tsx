import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ViewModeProvider } from "@/context/ViewModeContext";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Earl Hickson - Front-End Developer",
  description: "Front-End Developer specializing in healthcare CMS platforms, responsive email campaigns, and accessible user interfaces.",
  keywords: ["front-end developer", "healthcare", "CMS", "email development", "accessibility", "React", "TypeScript"],
  authors: [{ name: "Earl Hickson" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <ViewModeProvider>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </ViewModeProvider>
      </body>
    </html>
  );
}
