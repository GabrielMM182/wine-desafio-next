import { ShoppingCart } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import { useCartStore } from "../../store/cart";

export function CartButton() {
  const itemsCount = useCartStore((s) =>
    s.items.reduce((acc, item) => acc + item.quantity, 0)
  );

  return (
    <Link href="/carrinho" className="relative">
      <Button variant="outline" size="icon" className="rounded-full">
        <ShoppingCart className="h-5 w-5" />
        {itemsCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-wine text-white rounded-full text-xs px-1.5 py-0.5 min-w-[20px] text-center">
            {itemsCount}
          </span>
        )}
      </Button>
    </Link>
  );
}
