import React from "react";
import SearchBar from "../SearchBar";
import Cart from "../Cart";
import navMenu from "./navigationMenu.js";
import Logo from "./Shared/Logo.jsx";
import NavItems from "./NavItems.jsx";
import { useMediaQuery } from 'react-responsive';



export default function Header() {
  const [isOpen, setIsOpen] = React.useState("");
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <>
      <nav className="nav-menu">
        <Logo />
        <NavItems navMenu={navMenu} />
        <SearchBar />
      </nav>

      {isOpen === "cart" && <Cart />}
    </>
  );
}
