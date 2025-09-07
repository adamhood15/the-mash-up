import React from "react";
import { Link } from "react-router-dom";
import Auth from "../../utils/auth";
import SearchBar from "./SearchBar";
import Cart from "./Cart";

function Logo() {
  return(
    <>
      <h1 
        className="logo"
      >
          <Link 
            to="/" 
            className="text-white"
            id="title"
            >
              The Mash Up
            </Link>
      </h1>
    </>
  )
}

function NavItems({ navMenu }) {
      return (
        <>
            <ul className="nav-list">
                {navMenu.map((item) => (
                    <li key={item.id} 
                        className="nav-menu-dropdown-parent text-white px-2">
                        {item.title}
                        {item.dropdownList && (
                            <>
                                <i className="fa-solid fa-caret-up text-[#fc2403] nav-red-arrow ml-2 dropdown-arrow"></i>
                                <ul className="nav-submenu">
                                    {item.dropdownList.map((subitem) => (
                                    <li key={subitem} className="nav-submenu-item py-1 px-2 hover:bg-gray-700">
                                        <Link to={`/productsearch/${subitem}`}>{subitem}</Link>
                                    </li>
                                    ))}
                                </ul>
                            </>
 
                        )}
                    </li>
                ))}
            </ul>
        </>
      )
}

export default function Header() {
  const [isOpen, setIsOpen] = React.useState("");

  const navMenu = [  
        {
          id: 2,
          title: "Instruments",
          link: "/instruments",
          needLogIn: false,
          align: 'center',
          dropdownList: [
            "Guitars and Basses",
            "Percussion",
            "Piano",
            "String",
            "Brass",
          ],
        },
        {
          id: 3,
          title: "Equipment",
          link: "/equipment",
          needLogIn: false,
          align: 'center',
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
          id: 4,
          title: "Music",
          link: "/music",
          needLogIn: false,
          align: 'center',
          dropdownList: [
            "Rock", "Pop", "Rap", "Hip Hop", "Electronic",
            "Jazz", "Classical", "Folk", "Country", "Latin", "Reggae",
          ],
        },
        {
          id: 5,
          title: "Merch",
          link: "/merch",
          needLogIn: false,
          align: 'center',
          dropdownList: ["T-Shirts", "Hoodies", "Caps", "Bags", "Accessories"],
        },
        {
            id: 6,
            title: "Sell",
            needLogIn: true,
            align: 'center'

        },
         {
            id: 7,
            title: "Account",
            needLogIn: true,
            align: 'center'

        },
         {
            id: 8,
            title: "Log Out",
            needLogIn: true,
            align: 'center'

        },
        {
            id: 10,
            title: "Cart",
            needLogIn: true,
            align: 'center'

        }
     ];
 

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
