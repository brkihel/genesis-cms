import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "../styles/Main.css";

const nunito = Nunito({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  style: "normal",
});

export const metadata: Metadata = {
  title: "Genesis Azeroth",
  description: "Uma nova experiência blizzlike única no Brasil!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={nunito.className}>{children}</body>
    </html>
  );
}
