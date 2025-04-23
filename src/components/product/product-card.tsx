import { useCartStore } from "../../store/cart";
import { Button } from "../ui/button";

type ProductCardProps = {
  id: number;
  name: string;
  price: number;
  image: string;
};

export function ProductCard({ id, name, price, image }: ProductCardProps) {
  const add = useCartStore((s) => s.add);

  return (
    <div className="bg-white rounded-lg shadow-md flex flex-col items-center p-4">
      <img src={image} alt={name} className="w-32 h-32 object-cover rounded mb-2" />
      <h3 className="font-bold text-lg text-center mb-1">{name}</h3>
      <span className="text-wine font-semibold text-xl mb-2">R$ {price.toFixed(2)}</span>
      <Button onClick={() => add({ id, name, price, image })} className="w-full mt-auto">
        Adicionar ao carrinho
      </Button>
    </div>
  );
}
