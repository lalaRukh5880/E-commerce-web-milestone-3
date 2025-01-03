import React from 'react';

const products = [
  {
    id: 1,
    title: "Chocolate Ice-cream",
    category: "Dessert",
    price: "200.00",
    imageUrl: "https://static.vecteezy.com/system/resources/thumbnails/025/063/627/small/ice-cream-sundae-with-ai-generated-free-png.png",
    bgColor: "bg-pink-200"
  },
  {
    id: 2,
    title: "Vanilla Ice-cream",
    category: "Dessert",
    price: "150.00",
    imageUrl: "https://png.pngtree.com/png-vector/20240917/ourmid/pngtree-assorted-ice-cream-delights-png-image_13848378.png",
    bgColor: "bg-pink-200"
  },
  {
    id: 3,
    title: "Strawberry Ice-cream",
    category: "Dessert",
    price: "180.00",
    imageUrl: "https://png.pngtree.com/png-vector/20240506/ourmid/pngtree-berry-bonanza-waffles-with-fruit-syrup-and-luscious-blueberries-png-image_12286704.png",
    bgColor: "bg-pink-200"
  },
];

export default function ProductList() {
  return (
    <div className="p-6 flex flex-wrap justify-center gap-6">
      {products.map((product) => (
        <div key={product.id} className={`flex flex-col items-center ${product.bgColor} rounded-lg shadow-lg p-4 w-64`}>
          {/* Image Section */}
          <div className="relative flex items-center justify-center">
            <img className="relative w-40 h-40 object-contain" src={product.imageUrl} alt={product.title} />
          </div>
          {/* Text Section */}
          <div className="text-black px-4 mt-4">
            <span className="block opacity-75 text-sm">{product.category}</span>
            <div className="flex justify-between items-center mt-2">
              <span className="block font-semibold text-lg">{product.title}</span>
              <span className="block bg-black text-orange-500 text-xs font-bold px-3 py-1 rounded-full">
                ${product.price}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
