import type { Metadata } from "next";
import { Manrope, Noto_Sans } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
    subsets: ["latin"],
    variable: "--font-manrope",
    weight: ["400", "500", "700", "800"]
});

const fontSans = Noto_Sans({
    subsets: ["latin"],
    variable: "--font-noto-sans",
    weight: ["400", "500", "700"]
});

export const metadata: Metadata = {
    title: "FinanzaPro | Resumen Financiero",
    description: "Gestión financiera de alto nivel",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="es" className="dark">
            <body className={`${manrope.variable} ${fontSans.variable} font-display antialiased`}>
                {children}
            </body>
        </html>
    );
}
