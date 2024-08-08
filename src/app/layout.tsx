import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import "./assets/scss/main.scss";
import Header from "./components/header";
import Footer from "./components/footer";

// const roboto = Roboto({
//   weight: ['100', '300', '400', '500', '700'],
//   subsets: ['latin'],
//   display: 'swap'
// });

const openSans = Open_Sans({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin']
});

export const metadata: Metadata = {
  title: "Kristinalhall.net",
  description: "Portfolio for UI/UX Developer and front-end engineer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <body className={roboto.className}>{children}</body> */}
      <body className={openSans.className}>
        <div className="application-root h-screen overflow-auto">
          <div className="flex flex-col flex-1 flex-nowrap min-h-screen min-w-full">
            <Header />

            <div className="content-container basis-full">
              {children}
            </div>

            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
