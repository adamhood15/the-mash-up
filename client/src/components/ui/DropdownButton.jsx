import React from "react";

export default function DropdownButton() {

  


  
  return (
  <div className="flex flex-col">
    <button
        onClick={() => setIsOpen((prevState) => !prevState)}
        className="text-white relative bg-black-700 hover:bg-black-800 focus:ring-4 focus:outline-none focus:ring-black-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-black-600 dark:hover:bg-black-700 dark:focus:ring-black-800"
      >
        {/* Changes caret image */}
        Instruments
        {isOpen ? (
            <i className="fa-solid fa-caret-down pl-2"></i>
          ) : (
            <i className="fa-solid fa-caret-up pl-2"></i>
          )}
      </button>

        {/* Renders the Dropdown List when clicked */}
        {isOpen && (
            <>
            <div
              className="z-10 mt-11 absolute bg-white divide-y divide-gray-100 shadow w-44 dark:bg-gray-700"
            >
              <ul
                className="py-2 text-sm text-gray-700 dark:text-gray-200 flex flex-col"
                aria-labelledby="dropdownHoverButton"
              >
                
                  {dropdownMenu[0].dropdownList.map((item, i) => (
                    <li
                    key={i}
                    >
                      <a
                        href="#"
                        className="block py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        {item}
                      </a>
                    </li>
                  ))}             
              </ul>
            </div>
            </>
  
          )}
  </div>
  );
}
