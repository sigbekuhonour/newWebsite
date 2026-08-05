import { Libre_Barcode_39_Text, Lexend_Tera } from "next/font/google";

export const libreBarcode = Libre_Barcode_39_Text({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-barcode",
});

export const lexendTera = Lexend_Tera({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});