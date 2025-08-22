import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import { Karla, Open_Sans } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const arsenica = localFont({
  src: "../public/Arsenica-Medium.ttf",
  variable: "--font-arsenica",
  display: "swap",
});

const karla = Karla({
  variable: "--font-karla",
  subsets: ["latin", "latin-ext"], // Aquí puedes agregar los subconjuntos que necesites
  preload: true, // Asegúrate de que esté habilitado si lo deseas
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-open-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Grand Hotel Principado | Hotel 4 Estrellas en Termas",
    template: "%s | Grand Hotel Principado",
  },
  description:
    "Grand Hotel Principado, un hotel 4 estrellas en Termas, ideal para disfrutar de confort y elegancia. Habitaciones modernas, restaurante gourmet, spa y ubicación privilegiada cerca de los principales atractivos. Reserva online y viví una estadía inolvidable.",
  keywords: [
    "hotel en Termas",
    "Grand Hotel Principado",
    "hotel 4 estrellas",
    "habitaciones de lujo",
    "reserva de hotel",
    "hotel céntrico Termas",
    "spa y restaurante hotel",
  ],
  openGraph: {
    type: "website",
    url: "https://www.tudominio.com",
    title: "Grand Hotel Principado | Hotel 4 Estrellas en Termas",
    description:
      "Descubre el Grand Hotel Principado en Termas. Habitaciones elegantes, spa, restaurante gourmet y la mejor ubicación para tu estadía.",
    images: [
      {
        url: "/portada.webp",
        width: 1200,
        height: 630,
        alt: "Grand Hotel Principado - Fachada y entrada principal",
      },
    ],
    siteName: "Grand Hotel Principado",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grand Hotel Principado | Hotel 4 Estrellas en Termas",
    description:
      "Elegancia, confort y ubicación privilegiada en Termas. Reservá ahora tu estadía en el Grand Hotel Principado.",
    images: ["/portada.webp"],
  },
  alternates: {
    canonical: "https://www.tudominio.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${arsenica.variable} ${karla.variable} ${openSans.variable} antialiased min-h-screen bg-white`}
      >
        <Navbar />
        {children}
        <Footer />
        <script
          defer
          src="https://unpkg.com/tailwindcss-intersect@2.x.x/dist/observer.min.js"
        ></script>
      </body>
    </html>
  );
}
