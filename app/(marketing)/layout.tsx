import { Footer } from "./footer";
import { Header } from "./header";

/**
 * Layout wrapper for all marketing pages (e.g., home page).
 * Server Component
 *
 * @param props - An object containing the child components to render.
 * @param props.children - The specific marketing page content to render between the header and footer.
 * @returns The page structure including the Header, main content area, and Footer.
 *
 * @example
 * ```tsx
 * <MarketingLayout>
 *   <HomePage />
 * </MarketingLayout>
 * ```
 */
const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 text-slate-900">
      {children}
    </div>
  );
};

export default MarketingLayout;
