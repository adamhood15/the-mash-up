import Logo from "./top_header/top_header_components/Logo";
import SearchBar from "./top_header/top_header_components/search_bar/SearchBar";

export default function Header() {
    return (
        <header 
            className="sticky top-0 w-full flex flex-col content-center gap-2 items-center p-3 bg-black mx-auto">
            <Logo />
            <SearchBar />
       </header>
    );
}