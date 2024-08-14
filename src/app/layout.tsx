import type { Metadata } from "next";
import { Poppins as FontSans } from "next/font/google";
import "./globals.css";

import { cn } from "@/lib/utils";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["800", "700", "500"],
});
export const metadata: Metadata = {
  title: "Md. Nazmus Shakib",
  description: "made by LOVE",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <head>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
      </head>
      <body
        className={cn(
          "max-h-screen bg-background font-sans antialiased dark bg-[#222222]",
          fontSans.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
