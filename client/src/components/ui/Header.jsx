import React from "react";
import { Link } from "react-router-dom";
import Auth from "../../utils/auth";
import SearchBar from "./SearchBar";
import Cart from "./Cart";

export default function Header() {
  const [isOpen, setIsOpen] = React.useState("");

  const navMenu = [
    {
      id: 0,
      title: "Instruments",
      dropdownList: [
        "Guitars and Basses",
        "Percussion",
        "Piano",
        "String",
        "Brass",
      ],
    },
    {
      id: 1,
      title: "Equipment",
      dropdownList: [
        "DJ Equipment",
        "Lighting",
        "Microphones",
        "Headphones",
        "Cables",
        "Accessories",
      ],
    },
    {
      id: 2,
      title: "Music",
      dropdownList: [
        "Rock", "Pop", "Rap", "Hip Hop", "Electronic",
        "Jazz", "Classical", "Folk", "Country", "Latin", "Reggae",
      ],
    },
    {
      id: 3,
      title: "Merch",
      dropdownList: ["T-Shirts", "Hoodies", "Caps", "Bags", "Accessories"],
    },
  ];

  return (
    <>
      <nav className="nav-menu">
        <Link to="/">
          <h1 className="text-white font-semibold text-xl tracking-tight" id="title">
            The Mash Up
          </h1>
        </Link>

        <ul className="nav-list">
          {navMenu.map((item) => (
            <li key={item.id} className="nav-menu-dropdown-parent">
              <div className="nav-menu-dropdown-parent-item text-white px-2 py-1">
                {item.title}
                {item.dropdownList && (
                  <i className="fa-solid fa-caret-up text-[#fc2403] nav-red-arrow ml-2 dropdown-arrow"></i>
                )}
              </div>

              {item.dropdownList && (
                <ul className="nav-submenu">
                  {item.dropdownList.map((subitem) => (
                    <li key={subitem} className="nav-submenu-item py-1 px-2 hover:bg-gray-700">
                      <Link to={`/productsearch/${subitem}`}>{subitem}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        {Auth.loggedIn() ? (
          <>
            <Link to="/addProduct" className="p-2 text-white">Sell</Link>
            <Link to="/account" className="p-2 text-white">Account</Link>
            <Link to="/" onClick={Auth.logout} className="p-2 text-white">Logout</Link>
            <Link to="#" className="p-2 pr-5" onClick={() => setIsOpen("cart")}>
              <i className="fa-solid fa-cart-shopping text-[#fc2403] text-xl"></i>
            </Link>
          </>
        ) : (
          <>
            <Link to="/signup" className="text-white p-2">Sign Up</Link>
            <Link to="/" className="text-white p-2">Log In</Link>
          </>
        )}

        <SearchBar />
      </nav>

      {isOpen === "cart" && <Cart />}
    </>
  );
}
