import type { Metadata } from "next";
import { Geist, Geist_Mono, DM_Serif_Text } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const demSerifText = DM_Serif_Text({
  variable: "--font-dm-serif-text",
  subsets: ["latin"],
  weight: "400",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Eva Þóra Karlsdóttir",
  description: "Forritari",
};

import { config } from "@fortawesome/fontawesome-svg-core";
import { ThemeProvider } from "next-themes";
import { Navbar } from "./components/navbar";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="is" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${demSerifText.variable} antialiased overflow-y-auto bg-stone-100 dark:bg-gradient-to-r from-slate-800 to-neutral-900`}
      >
        <ThemeProvider attribute="data-mode">
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
