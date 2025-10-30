import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "sonner";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

export const metadata: Metadata = {
  title: "Env Vault",
  description: "Store and manage your environment variables securely.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider appearance={{ baseTheme: dark }}>
      <html lang="en">
        <body className="dark antialiased">{children}</body>
      </html>
      <Toaster position="top-right" duration={2500} richColors />
    </ClerkProvider>
  );
}
