import React from "react";
import cartIcon from '../assets/images/cart.png'

const Header = ({ cart }) => {

    return (
        <>
            <header>
                <div>
                    <nav className="bg-white border-gray-200 dark:bg-gray-900">
                        <div className="w-full flex flex-wrap items-center justify-between mx-auto p-4">
                            <a href="" className="flex items-center space-x-3 rtl:space-x-reverse">
                                <img src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3RvcmUlMjBmb29kfGVufDB8fDB8fHww" className="h-8" alt="" />
                                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">ORDER FOOD</span>
                            </a>
                            <div>
                                <ul className="flex flex-col font-medium p-4 md:p-0 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                                    <li>
                                        <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 text-xl">Trang chủ</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 text-xl">Thực đơn</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 text-xl">Khuyến mãi</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 text-xl">Dịch vụ</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 text-xl">Liên hệ</a>
                                    </li>
                                </ul>
                            </div>

                            <div className="flex justify-center">
                                <div className="pr-8">
                                    <a href="" className="flex justify-end">
                                        <span>
                                            <img src={cartIcon} alt="" />
                                        </span>
                                        {/* Quantity of item in cart */}
                                        <span>
                                            <sup className="border rounded-lg p-2 text-base">{cart.length}</sup>
                                        </span>
                                    </a>

                                </div>
                                {/* <div className="">
                                    <a href="" className="text-xl pt-2.5">Đăng ký</a>
                                    <span className="mx-2.5">/</span>
                                    <a href="" className="text-xl pt-2.5">Đăng nhập</a>
                                </div> */}
                            </div>
                        </div>
                    </nav>
                </div >
                <div className="flex items-center bg-center bg-no-repeat h-96 bg-[url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-gray-700 bg-blend-multiply">
                    <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
                        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">We invest in the world’s potential</h1>
                        <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
                        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
                            <button type="button" className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">BUY NOW</button>
                        </div>
                    </div>
                </div>
            </header >
        </>
    );
}
export default Header;