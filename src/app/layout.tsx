import type { Metadata } from "next";
import { Alexandria } from "next/font/google";
import "./globals.css";

const alexandria = Alexandria({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-alexandria",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ambition",
  description: "Ambition helps organizations grow through design, senior expertise, and learning that truly sticks.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${alexandria.variable}`}>
      <body>{children}</body>
    </html>
  );
}
