import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { SITE_URL, SITE_NAME, SITE_TAGLINE, SITE_META_DESCRIPTION, SITE_DESCRIPTION } from "@/lib/utils";
import { GoogleAnalytics } from "@next/third-parties/google";

// NOTE: next/font/google (Sora + JetBrains Mono) needs network access to
// fonts.google.com at build time. Re-enable it in your own environment with:
//   import { Sora, JetBrains_Mono } from "next/font/google";
//   const sora = Sora({ variable: "--font-sora", subsets: ["latin"], weight: ["400","500","600","700","800"] });
//   const mono = JetBrains_Mono({ variable: "--font-mono", subsets: ["latin"] });
// and add `${sora.variable} ${mono.variable}` to the <html> className below.
// This build uses a safe system font stack (see globals.css) so it works offline.

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — ${SITE_TAGLINE}`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_META_DESCRIPTION,
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    title: `${SITE_NAME} — ${SITE_TAGLINE}`,
    description: SITE_META_DESCRIPTION,
    url: SITE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — ${SITE_TAGLINE}`,
    description: SITE_META_DESCRIPTION,
  },
  alternates: {
    canonical: SITE_URL,
    types: { "application/rss+xml": `${SITE_URL}/rss.xml` },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Blog",
              name: SITE_NAME,
              url: SITE_URL,
              description: SITE_DESCRIPTION,
            }),
          }}
        />
      </head>
      <body className="flex min-h-screen flex-col antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}/>
    </html>
  );
}
