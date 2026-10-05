import type { Metadata } from "next";
import { Nunito } from "next/font/google";

import { ClerkProvider } from "@clerk/nextjs";

import { ExitModal } from "@/components/modals/exit-modal";
import { HeartsModal } from "@/components/modals/hearts-modal";
import { PracticeModal } from "@/components/modals/practice-modal";
import { Toaster } from "@/components/ui/sonner";

import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lingo-clone.example.com"),
  title: {
    default: "HOSPITAL SCHOOL - Language Learning App",
    template: "%s | HOSPITAL SCHOOL",
  },
  description: "Learn new languages through interactive lessons, quests, and challenges.",
  openGraph: {
    title: "HOSPITAL SCHOOL - Language Learning App",
    description: "Learn new languages through interactive lessons, quests, and challenges.",
    url: "https://lingo-clone.example.com",
    siteName: "HOSPITAL SCHOOL",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HOSPITAL SCHOOL - Language Learning App",
    description: "Learn new languages through interactive lessons, quests, and challenges.",
    creator: "@hospitalschool",
  },
};

/**
 * The root layout that wraps the entire Next.js application.
 * Server Component
 *
 * @param props - An object containing the child pages/layouts to render.
 * @param props.children - The application's child components.
 * @returns The HTML skeleton, font definitions, authentication provider, global modals, and toast notifications.
 *
 * @example
 * ```tsx
 * <RootLayout>
 *   <App />
 * </RootLayout>
 * ```
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={`${nunito.variable} h-full antialiased scroll-smooth`} lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800;900&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="flex flex-col min-h-full font-sans">
        <ClerkProvider>
          <Toaster />
          <ExitModal />
          <HeartsModal />
          <PracticeModal />
          {children}
        </ClerkProvider>
      </body>
    </html>
  );
}
