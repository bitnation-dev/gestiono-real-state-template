import type { Metadata } from "next";
import "../src/globals.css";
import Header from "@/menu";
import Footer from "@/footer";




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
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

