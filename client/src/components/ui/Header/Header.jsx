import Heading from "../../shared/Heading";
import SearchBar from "./search_bar/SearchBar";

export default function Header() {
    return (
        <header 
            className="sticky top-0 w-full flex flex-col content-center gap-2 items-center p-3 bg-black mx-auto">
            <Heading as="h1" variant="display" className="logo">The Mash Up</Heading>
            <SearchBar />
       </header>
    );
}