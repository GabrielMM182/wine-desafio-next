// src/app/not-found.tsx
import Link from "next/link";
import { Button } from "../components/ui/button";

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen gap-4 bg-background">
      <h1 className="text-5xl font-bold text-wine">404</h1>
      <p className="text-lg text-gray-600">Página não encontrada</p>
      <Button asChild variant="default">
        <Link href="/">Voltar para a Home</Link>
      </Button>
    </main>
  );
}
