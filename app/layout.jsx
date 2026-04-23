import "./globals.css";
export const metadata = {
  title: "Ilene Kitchen",
  description: "Clean, reliable, no-BS production space for food operators.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}