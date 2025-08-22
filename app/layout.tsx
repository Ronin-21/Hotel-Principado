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

const fontKarla = Karla({
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
    default: "Hotel Principado",
    template: "%s - Hotel Principado",
  },
  description:
    "Descubre el Hotel Principado, tu refugio de lujo en la ciudad. Disfruta de habitaciones elegantes, servicios excepcionales y una ubicación inmejorable. ¡Reserva ahora y vive una experiencia inolvidable!",
  twitter: {
    card: "summary_large_image",
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
        className={`${arsenica.variable} ${fontKarla.variable} ${openSans.variable} antialiased min-h-screen bg-white`}
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
