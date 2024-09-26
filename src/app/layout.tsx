import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SmartBot",
  description: "Powered by OpenAI and Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Fonts Link */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-poppins antialiased">{children}</body>
    </html>
  );
}
