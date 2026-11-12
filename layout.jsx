import "./globals.css";

export const metadata = {
  title: "DWINDELL",
  description: "Learn what Dwindell can do for you."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
