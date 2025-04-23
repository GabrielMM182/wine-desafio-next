import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { Button } from "../ui/button";

const navLinks = [
  { label: "Clube", href: "/clube" },
  { label: "Loja", href: "/" },
  { label: "Produtores", href: "/produtores" },
  { label: "Ofertas", href: "/ofertas" },
  { label: "Eventos", href: "/eventos" },
];

export function Header() {
  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="container flex items-center justify-between h-16 mx-auto px-4">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl text-wine">
          <img src="/logo.svg" alt="Wine" className="h-8 w-auto" />
          Wine
        </Link>
        <nav className="hidden md:flex gap-6">
          {navLinks.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="text-base font-medium text-gray-700 hover:text-wine transition-colors"
              prefetch={false}
            >
              {label}
            </Link>
          ))}
        </nav>
        <Link href="/carrinho" className="relative">
          <Button variant="outline" size="icon" className="rounded-full">
            <ShoppingCart className="h-5 w-5" />
            {/* TODO: Badge do número de itens no carrinho */}
          </Button>
        </Link>
      </div>
    </header>
  );
}
