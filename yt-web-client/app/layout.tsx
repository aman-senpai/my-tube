import "./globals.css";
import type { Metadata } from "next";
import Nav from "./navbar/navbar";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "My-Tube",
    description:
        "A scalable youtube application which supports youtube video uploading and anyone can watch it.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <Nav />
                {children}
                {/* <Footer /> */}
            </body>
        </html>
    );
}
