import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/common/Navbar";
// import "./custom.css";


const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "Viatours | Book Tours, Activities & Things to Do",
  description: "Find and book incredible travel experiences, tours, and luxury destinations worldwide with Viatours.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body>

        <Navbar/>

        {children}
      
      
      
      </body>
      {/* <body className="flex flex-col mx-auto">{children}</body> */}

    </html>
  );
}
