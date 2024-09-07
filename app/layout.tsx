import type { Metadata } from "next";
import "../src/globals.css";
import Footer from "@/footer";
import Menu from "@/menu";



export const metadata: Metadata = {
  title: "Emira",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Menu/>
      <body>
        {children}
      </body>
      <Footer />
    </html>
  );
}
