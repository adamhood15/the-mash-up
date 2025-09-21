import React from "react";
import { Link } from "react-router-dom";
import Auth from /.../../../utils/auth";
import SearchBar from "../SearchBar";
import Cart from "../Cart";
import navMenu from "./NavMenu.js";
import Logo from "./Logo.jsx";
import NavItems from "./NavItems.jsx";




export default function Header() {
  const [isOpen, setIsOpen] = React.useState("");

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
