import type { Metadata } from "next";
import "../src/globals.css";
import Header from "@/header";
import Footer from "@/footer";
import StyledComponentsRegistry from "./registry";




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
        <StyledComponentsRegistry>
          <Header />
          {children}
          <Footer />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}

