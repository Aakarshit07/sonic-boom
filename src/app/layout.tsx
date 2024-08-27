import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { ThemeProvider } from "@/providers/theme-providers";
import "./globals.css";

const font = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sonic Boom",
  description: "Sonic Boom Automation Engine",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
        {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
