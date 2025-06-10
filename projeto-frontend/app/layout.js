import "./globals.css";
import ThemeEffect from "../src/components/ThemeEffect";

export const metadata = {
  title: "Projeto Front-End",
  description: "Projeto Urban Valle",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ThemeEffect />
        {children}
      </body>
    </html>
  );
}
