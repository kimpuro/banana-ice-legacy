import "./globals.css";

export const metadata = {
  title: "BANANA ICE",
  description: "BANANA ICE",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body
      >
        {children}
      </body>
    </html>
  );
}
