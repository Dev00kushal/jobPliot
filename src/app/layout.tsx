import Footer from "@/components/ui/Footer";
import Header from "@/components/ui/Header";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], 
  weight:["300", "400", "500", "600", "700"]
});

export const metadata: Metadata = {
  title: "JobPliot",
  icons: [
   "briefcase.svg"
  ],
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"> 
      <body className={inter.className}>
        <Header />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
