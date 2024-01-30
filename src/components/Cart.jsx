import React, { useState, useEffect } from "react";

const Cart = ({ cart, setCart }) => {


    const handleRemoveItem = (index) => {
        // Create a copy of the current cart array
        const newCart = [...cart];

        // Remove the item at the specified index
        newCart.splice(index, 1);

        // Update the cart state with the modified array
        setCart(newCart);
    };

    const changeQualityItem = (item, quality) => {
        //tim san pham trong cart va thay doi mot luong sl
        const index = cart.indexOf(item);
        const arr = [...cart];
        arr[index].amount += quality;
        if (arr[index].amount == 0) arr[index].amount = 1;
        setCart([...arr]);
    };

    const [totalPrice, setTotalPrice] = useState(0);

    const calTotalPrice = () => {
        let totalPrice = 0;
        cart.map((item) => {
            totalPrice += item.price * item.amount;
        });
        setTotalPrice(totalPrice);
    };

    useEffect(() => {
        calTotalPrice();
    });
    return (
        <>
            <div>
                {cart.map((cartItem, index) => (
                    <div key={index} className="flex justify-around items-center">
                        <div>
                            <img src={cartItem.url} className="h-14" alt="" />
                        </div>
                        <div>
                            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{cartItem.name}</h5>
                        </div>
                        <div>
                            <div>
                                <button onClick={() => changeQualityItem(cartItem, -1)} className="flex-shrink-0 bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-8 w-8 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">-</button>
                                <input type="text" value={cartItem.amount} readOnly={true} className="flex-shrink-0 text-gray-900 dark:text-white border-0 bg-transparent text-xl font-normal focus:outline-none focus:ring-0 max-w-[2.5rem] text-center" />
                                <button onClick={() => changeQualityItem(cartItem, 1)} className="flex-shrink-0 bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-8 w-8 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">+</button>
                            </div>
                        </div>
                        <div>
                            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{cartItem.price * cartItem.amount}</h5>
                        </div>
                        <div>
                            <button onClick={() => handleRemoveItem(index)} type="button" className="text-gray bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Remove</button>
                        </div>
                    </div>
                ))}
                <div>
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white text-center">Tổng tiền: {totalPrice}</h5>
                </div>
            </div>
        </>
    );
}
export default Cart;