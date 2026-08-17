import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The AI Colony Academy",
  description: "AI education and fully funded scholarships.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}