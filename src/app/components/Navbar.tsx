import React from 'react'
import Link from 'next/link'

export default function Navbar() {
  return (
<nav className="bg-gradient-to-r from-gradColor1 from-60% to-gradColor2">
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-3">
        <a href="" className="flex items-center">
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-black">🌻Crafty WildFlower Store🌼</span>
        </a>
    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-textboldlight rounded-lg md:hidden hover:bg-#fbe7e0 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
        </svg>
    </button>
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-#fbe7e0 rounded-lg bg-#fbe7e0 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-#fbe7e0 dark:bg-#fbe7e0 md:dark:bg--#fbe7e0 dark:border-#fbe7e0">
            <li>
                <Link href="/" className="block py-2 pl-3 pr-4 text-textlight bg-yellow-500 rounded md:bg-transparent md:text-yellow-500 md:p-0 dark:text-black md:dark:text-yellow-500" aria-current="page">Home</Link>
            </li>
            <li>
                <Link href="/Shop" className="block py-2 pl-3 pr-4 text-textboldlight rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-yellow-400 md:p-0 dark:text-black md:dark:hover:text-yellow-600 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Shop</Link>
            </li>
            <li>
                <Link href="/About" className="block py-2 pl-3 pr-4 text-textboldlight rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-yellow-400 md:p-0 dark:text-black md:dark:hover:text-yellow-600 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</Link>
            </li>
        </ul>
    </div>
    </div>
</nav>
  )
}
