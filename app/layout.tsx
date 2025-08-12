import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import { Eczar, Lora, Marcellus, Poppins } from "next/font/google";
import "./globals.css";

const fontMarcellus = Marcellus({
  variable: "--font-marcellus",
  weight: "400", // Puedes ajustar el peso según tus necesidades
  subsets: ["latin", "latin-ext"], // Aquí puedes agregar los subconjuntos que necesites
  preload: true, // Asegúrate de que esté habilitado si lo deseas
});

const fontEczar = Eczar({
  variable: "--font-eczar", // Puedes ajustar el peso según tus necesidades
  subsets: ["latin", "latin-ext"], // Aquí puedes agregar los subconjuntos que necesites
  preload: true, // Asegúrate de que esté habilitado si lo deseas
});

const fontLora = Lora({
  variable: "--font-lora",
  subsets: ["latin", "latin-ext"], // Aquí puedes agregar los subconjuntos que necesites
  preload: true, // Asegúrate de que esté habilitado si lo deseas
});

const fontPoppins = Poppins({
  variable: "--font-poppins",
  weight: ["300", "400", "500", "700", "900"],
  subsets: ["latin", "latin-ext"], // Aquí puedes agregar los subconjuntos que necesites
  preload: true, // Asegúrate de que esté habilitado si lo deseas
});

export const metadata: Metadata = {
  title: {
    default: "Hotel Amazing",
    template: "%s - Hotel Amazing",
  },
  description:
    "Descubre el Hotel Amazing, tu refugio de lujo en la ciudad. Disfruta de habitaciones elegantes, servicios excepcionales y una ubicación inmejorable. ¡Reserva ahora y vive una experiencia inolvidable!",
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
        className={`${fontMarcellus.variable} ${fontEczar.variable} ${fontPoppins.variable} ${fontLora.variable} antialiased min-h-screen bg-white`}
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
