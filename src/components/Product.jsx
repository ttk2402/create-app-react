import React from "react";
import { useState, useEffect } from "react";
const Product = ({ cart, setCart }) => {
    const products = [
        {
            id: "1",
            name: "Sandwich gà giòn",
            url: "https://jollibee.com.vn/media/catalog/product/cache/9011257231b13517d19d9bae81fd87cc/9/2/92d27d47dadbfc-hambugerlon.jpg",
            price: "45000",
            description: "Sandwich, gà chiên, xà lách, cà chua, dưa leo"
        },
        {
            id: "2",
            name: "Sandwich gà giòn",
            url: "https://jollibee.com.vn/media/catalog/product/cache/9011257231b13517d19d9bae81fd87cc/9/2/92d27d47dadbfc-hambugerlon.jpg",
            price: "50000",
            description: "Sandwich, gà chiên, xà lách, cà chua, dưa leo"
        },
        {
            id: "3",
            name: "Sandwich gà giòn",
            url: "https://jollibee.com.vn/media/catalog/product/cache/9011257231b13517d19d9bae81fd87cc/9/2/92d27d47dadbfc-hambugerlon.jpg",
            price: "55000",
            description: "Sandwich, gà chiên, xà lách, cà chua, dưa leo"
        },
        {
            id: "4",
            name: "Sandwich gà giòn",
            url: "https://jollibee.com.vn/media/catalog/product/cache/9011257231b13517d19d9bae81fd87cc/9/2/92d27d47dadbfc-hambugerlon.jpg",
            price: "60000",
            description: "Sandwich, gà chiên, xà lách, cà chua, dưa leo"
        },
        {
            id: "5",
            name: "Sandwich gà giòn",
            url: "https://jollibee.com.vn/media/catalog/product/cache/9011257231b13517d19d9bae81fd87cc/9/2/92d27d47dadbfc-hambugerlon.jpg",
            price: "65000",
            description: "Sandwich, gà chiên, xà lách, cà chua, dưa leo"
        },
        {
            id: "6",
            name: "Sandwich gà giòn",
            url: "https://jollibee.com.vn/media/catalog/product/cache/9011257231b13517d19d9bae81fd87cc/9/2/92d27d47dadbfc-hambugerlon.jpg",
            price: "45000",
            description: "Sandwich, gà chiên, xà lách, cà chua, dưa leo"
        },
        {
            id: "7",
            name: "Sandwich gà giòn",
            url: "https://jollibee.com.vn/media/catalog/product/cache/9011257231b13517d19d9bae81fd87cc/9/2/92d27d47dadbfc-hambugerlon.jpg",
            price: "50000",
            description: "Sandwich, gà chiên, xà lách, cà chua, dưa leo"
        },
        {
            id: "8",
            name: "Sandwich gà giòn",
            url: "https://jollibee.com.vn/media/catalog/product/cache/9011257231b13517d19d9bae81fd87cc/9/2/92d27d47dadbfc-hambugerlon.jpg",
            price: "55000",
            description: "Sandwich, gà chiên, xà lách, cà chua, dưa leo"
        },
        {
            id: "9",
            name: "Sandwich gà giòn",
            url: "https://jollibee.com.vn/media/catalog/product/cache/9011257231b13517d19d9bae81fd87cc/9/2/92d27d47dadbfc-hambugerlon.jpg",
            price: "60000",
            description: "Sandwich, gà chiên, xà lách, cà chua, dưa leo"
        },
        {
            id: "10",
            name: "Sandwich gà giòn",
            url: "https://jollibee.com.vn/media/catalog/product/cache/9011257231b13517d19d9bae81fd87cc/9/2/92d27d47dadbfc-hambugerlon.jpg",
            price: "65000",
            description: "Sandwich, gà chiên, xà lách, cà chua, dưa leo"
        }
    ]

    const onAddtoCartHandler = (product) => {
        if (cart.indexOf(product) !== -1) return null;
        const arr = [...cart];
        product.amount = 1;
        arr.push(product);
        setCart([...arr]);
    };

    useEffect(() => {
        // console.log(cart);
    });

    return (
        <>
            <div className='flex justify-center flex-wrap'>
                {products.map((product, index) => (
                    <div key={index} className="w-full max-w-72 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-2.5">
                        <a href="#">
                            <img className="p-8 rounded-t-lg" src={product.url} alt="product image" />
                        </a>
                        <div className="px-5 pb-5">
                            <a href="#">
                                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{product.name}</h5>
                            </a>
                            <div className="flex items-center justify-between">
                                <span className="text-xl font-bold text-gray-900 dark:text-white">{product.price}</span>
                            </div>
                            <div className="flex items-center mt-2.5 mb-5">
                                <div className="flex items-center space-x-1 rtl:space-x-reverse">
                                    <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                    <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                    <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                    <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                    <svg className="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                </div>
                                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">5.0</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <button onClick={() => onAddtoCartHandler(product)} type="button" className="w-full text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Add To Cart</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
export default Product;