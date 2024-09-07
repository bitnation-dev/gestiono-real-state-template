import type { Metadata } from "next";
import "../src/globals.css";
import { Container } from "@bitnation-dev/components";



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
      <Container>
        <body>
          {children}
        </body>
      </Container>
    </html>
  );
}
