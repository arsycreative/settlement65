import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://settlement65.com";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Settlement65 — Final Settlement and Distribution Portal",
    template: "%s | Settlement65",
  },
  description:
    "Official portal for the final settlement and distribution phase. Settlement65.com provides a central online point of access for members during the concluding stage of the program.",
  keywords: [
    "Settlement65",
    "final settlement",
    "distribution portal",
    "member access",
    "settlement portal",
    "member verification",
    "settlement distribution",
  ],
  authors: [{ name: "Settlement65" }],
  creator: "Settlement65",
  publisher: "Settlement65",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Settlement65",
    title: "Settlement65 — Final Settlement and Distribution Portal",
    description:
      "Official portal for the final settlement and distribution phase. Central access point for members during the concluding stage of the program.",
    images: [
      {
        url: "/s65-logo.jpg",
        width: 1024,
        height: 1024,
        alt: "Settlement65 Official Logo",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Settlement65 — Final Settlement and Distribution Portal",
    description:
      "Official portal for the final settlement and distribution phase.",
    images: ["/s65-logo.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico?v=2" },
      { url: "/icon.png?v=2", type: "image/png", sizes: "32x32" },
      { url: "/icon-192.png?v=2", type: "image/png", sizes: "192x192" },
    ],
    shortcut: "/favicon.ico?v=2",
    apple: [
      { url: "/apple-touch-icon.png?v=2", sizes: "180x180", type: "image/png" },
    ],
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} h-full`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var s=localStorage.getItem('s65-theme');var t=s||(window.matchMedia('(prefers-color-scheme: light)').matches?'light':'dark');document.documentElement.setAttribute('data-theme',t);}catch(e){}})();
            (function(){try{var obs=new MutationObserver(function(){var el=document.querySelector('iframe[src*="netlify"], iframe#netlify-drawer, #netlify-hud, [id*="netlify-drawer"], [data-netlify-drawer], [class*="netlify-hud"]');if(el){el.style.display='none';el.remove();}});obs.observe(document.documentElement,{childList:true,subtree:true});}catch(e){}})();`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
