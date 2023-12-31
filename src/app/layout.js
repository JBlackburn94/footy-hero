import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navigation/Navbar";
import Footer from "./components/navigation/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Footy Hero",
  description: "All the Premier League and Championship fixtures and results",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
