import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { MobileActions } from "@/components/layout/MobileActions";
import { ToastProvider } from "@/components/ui/Toast";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://username.github.io/helicopter"),
  title: {
    default: "ГРАНАТ — вертолетные услуги",
    template: "%s | ГРАНАТ",
  },
  description:
    "Демо-сайт авиакомпании ГРАНАТ: аренда вертолетов, авиационные работы, ТО, базирование, документы и заявки.",
  openGraph: {
    title: "ГРАНАТ — вертолетные услуги",
    description: "Современная демонстрационная версия сайта авиакомпании.",
    type: "website",
  },
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body>
        <ToastProvider>
          <Header />
          {children}
          <Footer />
          <MobileActions />
        </ToastProvider>
      </body>
    </html>
  );
}
