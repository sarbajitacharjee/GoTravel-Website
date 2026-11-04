import { DM_Serif_Display, Manrope } from "next/font/google";
import "./globals.css";

const dmSerif = DM_Serif_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
});

const manrope = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata = {
  title: "GoTravel — Discover Your Next Journey",
  description:
    "Discover beautiful destinations, inspiring experiences and unforgettable journeys with GoTravel.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${dmSerif.variable} ${manrope.variable}`}>
        {children}
      </body>
    </html>
  );
}