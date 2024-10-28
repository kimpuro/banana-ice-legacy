import "./globals.css";
import {Analytics} from "@vercel/analytics/react";

export const metadata = {
  title: "BANANA ICE",
  description: "BANANA ICE",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
    <Analytics/>
      <body
      >
        {children}
      </body>
    </html>
  );
}
