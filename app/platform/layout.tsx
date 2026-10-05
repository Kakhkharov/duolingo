import { Footer } from "@/app/(marketing)/footer";
import { Header } from "@/app/(marketing)/header";

/**
 * Layout wrapper for the Hospital School platform's main entry page.
 */
export default function PlatformLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex flex-col flex-1 justify-center items-center">
        {children}
      </main>
      <Footer />
    </div>
  );
}
