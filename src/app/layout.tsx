import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google"
import "./globals.css";

const ibmMono = IBM_Plex_Mono({
  weight: ["100", "400"],
  subsets: ["latin"],
  variable: "--font-plex"
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
        className={`${ibmMono.variable} antialiased bg-slate-950 text-slate-300`}
      >
        {children}
      </body>
    </html>
  );
}
