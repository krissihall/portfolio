import type { Metadata } from "next";
import { Open_Sans, Italiana, Great_Vibes } from "next/font/google";
import "./globals.css";
import "./assets/scss/global.scss";

const openSans = Open_Sans({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  variable: '--kh-font-family',
});

const header = Italiana({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--kh-header-font",
});

// const script = Lavishly_Yours({
//   weight: ["400"],
//   subsets: ["latin"],
//   variable: "--kh-script-font",
// });

// *** Looks Nice
// const script = Beau_Rivage({
//   weight: ["400"],
//   subsets: ["latin"],
//   variable: "--kh-script-font",
// });
// ***

// const script = Carattere({
//   weight: ["400"],
//   subsets: ["latin"],
//   variable: "--kh-script-font",
// });

// const script = Whisper({
//   weight: ["400"],
//   subsets: ["latin"],
//   variable: "--kh-script-font",
// });

// const script = Birthstone_Bounce({
//   weight: ["400"],
//   subsets: ["latin"],
//   variable: "--kh-script-font",
// });

// const script = Bilbo_Swash_Caps({
//   weight: ["400"],
//   subsets: ["latin"],
//   variable: "--kh-script-font",
// });

// const script = Arizonia({
//   weight: ["400"],
//   subsets: ["latin"],
//   variable: "--kh-script-font",
// });

// const script = Parisienne({
//   weight: ["400"],
//   subsets: ["latin"],
//   variable: "--kh-script-font",
// });

const script = Great_Vibes({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--kh-script-font",
});

export const metadata: Metadata = {
  title: "Homepage",
  description: "Portfolio for UI/UX Developer and front-end engineer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${openSans.variable} ${header.variable} ${script.variable} app-body`}>
        <div className="application-root">
          {children}
        </div>
      </body>
    </html>
  );
}
