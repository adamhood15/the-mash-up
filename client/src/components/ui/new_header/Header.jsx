import Logo from "./top_header/top_header_components/Logo";
import SearchBar from "./top_header/top_header_components/search_bar/SearchBar";

export default function Header() {
    return (
        <div 
            className="header-container">
            <Logo />
            <SearchBar />
       </div>
    );
}