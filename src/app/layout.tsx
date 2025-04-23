// src/app/layout.tsx
import "../globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className="bg-background text-foreground min-h-screen">
        {children}
      </body>
    </html>
  );
}