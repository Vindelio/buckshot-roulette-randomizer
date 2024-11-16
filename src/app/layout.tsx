import type { Metadata } from "next";
import { Inter } from "next/font/google"
import "./globals.css";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter"
})
export const metadata: Metadata = {
  title: "Buckshot Roulette Picker",
  description: "Can't decide which of your friends to shoot? Let this tool help you!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
