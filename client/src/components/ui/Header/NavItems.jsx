export default function NavItems({ navMenu }) {
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
};