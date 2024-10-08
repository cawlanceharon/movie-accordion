import type { Metadata } from "next";
import ReduxProvider from "../utils/reduxProvider";
import "../styles/globals.css";

// Metadata for the application, used for SEO and document settings
export const metadata: Metadata = {
  title: "Next.js",  // Title of the application
  description: "Generated by Next.js",  // Description for SEO and meta tags
};

// RootLayout component that serves as the main layout for the application
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;  // Children components to be rendered within this layout
}) {
  return (
    <html lang="en">  // Root HTML element with English language set
      <body>
        <ReduxProvider>
          {children}  // Render children within the ReduxProvider to provide Redux store access
        </ReduxProvider>
      </body>
    </html>
  );
}
