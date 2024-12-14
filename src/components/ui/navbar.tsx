'use client';
import React from "react";
import Link from "next/link";
import { NavigationMenuDemo } from "./navLinks";
import { RxHamburgerMenu } from "react-icons/rx";
import Image from "next/image";
import { useAppSelector } from "@/app/store/hooks";


const Navbar = () => {
  const cart = useAppSelector((state) => state.cart);
  return (
    <div className="navbar text-myBlue bg-myPeach/45 h-20">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="p-0 text-2xl lg:hidden">
            <RxHamburgerMenu />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[-50]
             mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li tabIndex={0}>
              <details>
                <summary>Women</summary>
                <ul className="p-2">
                  <li>
                    <Link href={"/tops"}>Tops</Link>
                  </li>
                  <li>
                    <Link href={"/categorey2"}>Pants</Link>
                  </li>
                  <li>
                    <Link href={"/categorey3"}>Accesories/Jewerly</Link>
                  </li>
                  <li>
                    <Link href={"/categorey4"}>Shoes</Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <Link href={"/about"}>About Us</Link>
            </li>
            <li>
              <Link href={"/contact"}>Contact</Link>
            </li>
          </ul>
          <ul className="menu hidden menu-horizontal px-1">
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li tabIndex={0}>
              <details>
                <summary>Women</summary>
                <ul className="p-2">
                  <li>
                    <Link href={"/tops"}>Tops</Link>
                  </li>
                  <li>
                    <Link href={"/pants"}>Pants</Link>
                  </li>
                  <li>
                    <Link href={"/accessories"}>Accesories/Jewerly</Link>
                  </li>
                  <li>
                    <Link href={"/shoes"}>Shoes</Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <Link href={"/about"}>About Us</Link>
            </li>
            <li>
              <Link href={"/contact"}>Contact</Link>
            </li>
          </ul>
        </div>
        <Image
          src={"/picture/f-logo-transformed.webp"}
          alt="Logo"
          className="hidden lg:block ml-4"
          height={100}
          width={100}
        />
      </div>
      <div className="navbar-center">
        <Image
          src={"/picture/f-logo-transformed.webp"}
          alt="Logo"
          className="block lg:hidden"
          height={100}
          width={100}
        />
        <div className="hidden lg:flex">
          <NavigationMenuDemo />
        </div>
      </div>
      <div className="navbar-end">
        <Link href={'/cart'}>
          <div tabIndex={0} role="button" className="pr-4 cursor-pointer group">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7 group-hover:text-myPeach duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              {cart.length > 0 && (
                <span
                className="badge badge-sm font-semibold indicator-item text-myBlue 
          group-hover:text-myWhite group-hover:bg-myBlue"
              >
               {cart.length}
              </span>
              )}
              
            </div>
          </div>
          </Link>
      </div>
    </div>
  );
};

export default Navbar;
