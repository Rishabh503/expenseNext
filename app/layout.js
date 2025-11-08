import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import NavBar from "@/components/NavBar";
import { ThemeProvider } from '@/contexts/ThemeContext';
import Footer from "@/components/Footer";
import LiquidNavbarWrapper from "@/components/LiquidNavbarWrapper";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Expense Tracker",
  description: "Intelligent financial management powered by AI. Track your expenses, manage your budget, and gain insights into your spending patterns.",
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>

        <ClerkProvider>
          {/* <LiquidNavbarWrapper/> */}
          <NavBar/>
           {children}
          {/* <Footer/>/ */}
        </ClerkProvider>
        </ThemeProvider>
       
      </body>
    </html>
  );
}
