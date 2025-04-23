// src/app/layout.tsx
import { Header } from "../components/header/header";
import "../globals.css";


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="bg-background text-foreground min-h-screen">
        <Header />
        {children}
      </body>
    </html>
  );
}