"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import ProductCard from "./ProductCard";
import { Product } from "@/pages/types";

const Menu = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [cart, setCart] = useState<Product[]>([]);
    const [showCart, setShowCart] = useState(false);
    const [isCheckout, setIsCheckout] = useState(false);
    const router = useRouter();

    useEffect(() => {
        async function fetchProducts() {
            try {
                const response = await fetch("/api/product");
                if (!response.ok) throw new Error("Failed to fetch products");
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        }
        fetchProducts();

        const savedCart = localStorage.getItem("cart");
        if (savedCart) {
            setCart(JSON.parse(savedCart));
        }
    }, []);

    const addToCart = (product: Product) => {
        setCart((prevCart) => {
            const updatedCart = [...prevCart, product];
            localStorage.setItem("cart", JSON.stringify(updatedCart));
            return updatedCart;
        });
    };

    const toggleCart = () => {
        setShowCart((prev) => !prev);
    };

    const goToCheckout = () => {
        setIsCheckout(true);
        router.push("/checkout");
    };

    const clearCart = () => {
        setCart([]);
        localStorage.removeItem("cart");
    };

    return (
        <div className="relative min-h-screen py-6">
            {/* Background */}
            <div
                className="absolute inset-0 bg-cover bg-center opacity-10 animate-background"
                style={{
                    backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrpenUoyAigX1gTv-vNnnag5En1WOliXLTiA&s')",
                }}
            ></div>

            {/* Content */}
            <div className="relative z-10">
                {/* Header */}
                <div className="max-w-6xl mx-auto text-center mb-8">
                    <h1 className="text-4xl font-bold text-pink-800 mb-4">Delicious Dessert in Our Menu</h1>
                    <p className="text-xl text-pink-800">Explore our section of mouth-watering Dessert</p>
                </div>

                {/* Product Grid */}
                <div className="max-w-6xl mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-red-600">
                    {products.map((product) => (
                        <ProductCard key={product.id} {...product} onAddToCart={addToCart} />
                    ))}
                </div>

                {/* Cart Section */}
                <div className="text-center mt-8">
                    <button
                        onClick={toggleCart}
                        className="bg-pink-600 text-white py-3 px-6 rounded-lg shadow-md hover:bg-pink-800 transition duration-300 ease-out transform"
                    >
                        {showCart ? "Hide Cart" : "View Cart"} ({cart.length} items)
                    </button>

                    {showCart && (
                        <div className="mt-6 bg-white p-6 rounded-lg shadow-lg">
                            <h2 className="text-4xl font-bold mb-4 text-pink-600">Your Cart Items</h2>
                            {cart.length > 0 ? (
                                <div>
                                    <ul>
                                        {cart.map((product, index) => (
                                            <li
                                                key={index}
                                                className="flex items-center justify-between mb-4 transition-transform duration-300 ease-in-out"
                                            >
                                                <img
                                                    src={product.image}
                                                    alt={product.name}
                                                    className="w-20 h-20 sm:w-24 sm:h-24 rounded"
                                                />
                                                <span className="ml-4 text-lg font-medium text-slate-600">
                                                    {product.name} - ${product.price.Fixed(2)}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="flex justify-between items-center mt-6 text-black">
                                        <span className="font-semibold text-xl">
                                            Total: ${cart.reduce((total, product) => total + product.price, 0).toFixed(2)}
                                        </span>
                                    </div>

                                    <div className="mt-6">
                                        <button
                                            onClick={goToCheckout}
                                            className="bg-green-600 py-3 px-8 rounded-lg text-lg shadow-md hover:bg-green-700 transition duration-300 ease-in-out text-white transform hover:scale-110"
                                        >
                                            Proceed to Checkout
                                        </button>
                                        <button
                                            onClick={clearCart}
                                            className="bg-red-600 py-3 px-8 ml-4 rounded-lg text-lg shadow-md hover:bg-red-700 transition duration-300 ease-in-out text-white transform hover:scale-110"
                                        >
                                            Clear Cart
                                        </button>
                                    </div>
                                </div>
                            ) : (
                                <p className="text-lg text-slate-600">Your cart is empty.</p>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Menu;
