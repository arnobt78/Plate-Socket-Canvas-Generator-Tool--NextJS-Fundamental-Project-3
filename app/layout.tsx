import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://plate-socket-generator-tool.vercel.app"),
  title: {
    default: "Plate, Socket & Canvas Generator Tool | German Electrical Plate Designer",
    template: "%s | Plate, Socket & Canvas Generator Tool",
  },
  description:
    "Interactive German electrical plate and socket configuration tool with drag-and-drop positioning, real-time validation, and responsive design. Build custom electrical plate layouts (Rückwände) with precise centimeter-based measurements and socket groups (Steckdosengruppen).",
  keywords: [
    "plate generator",
    "socket generator",
    "electrical plates",
    "Rückwand",
    "Steckdose",
    "socket positioning",
    "drag and drop",
    "electrical design",
    "interactive canvas",
    "responsive design",
    "touch interaction",
    "plate configuration",
    "German electrical standards",
    "canvas generator",
    "electrical plate designer",
  ],
  authors: [
    {
      name: "Arnob Mahmud",
      url: "https://www.arnobmahmud.com",
    },
  ],
  creator: "Arnob Mahmud",
  publisher: "Arnob Mahmud",
  applicationName: "Plate, Socket & Canvas Generator Tool",
  category: "Electrical Design Tools",
  openGraph: {
    title: "Plate, Socket & Canvas Generator Tool | German Electrical Plate Designer",
    description:
      "Interactive German electrical plate and socket configuration tool with drag-and-drop positioning, real-time validation, and responsive design.",
    url: "https://plate-socket-generator-tool.vercel.app",
    siteName: "Plate, Socket & Canvas Generator Tool",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Plate, Socket & Canvas Generator Tool | German Electrical Plate Designer",
    description:
      "Interactive German electrical plate and socket configuration tool with drag-and-drop positioning and real-time validation.",
    creator: "@arnob_t78",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="author" content="Arnob Mahmud (https://www.arnobmahmud.com, contact@arnobmahmud.com)" />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        {children}
        <Toaster position="bottom-right" />
      </body>
    </html>
  );
}
