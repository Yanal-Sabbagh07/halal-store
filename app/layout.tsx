import "./globals.css";
import { Roboto_Slab } from "next/font/google";

const Roboto = Roboto_Slab({ subsets: ["latin"] });

export const metadata = {
  title: "Halal Corners",
  description: "An Islamic Store",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={Roboto.className}>{children}</body>
    </html>
  );
}
