import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Illumina - Bringing clarity and light",
  description:
    "ILLUMINA is a consulting firm specialized in contract management, providing formation, execution, risk analysis, compliance, and operational support to ensure clarity, security, and excellence in corporate contracts.",
  icons: [
    { rel: "icon", url: "/logo3.png" }, 
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className="relative bg-fundo-0 text-color-7 antialiased">
            <Navbar />
            {children}
            <Footer />
      </body>
    </html>
  );
}