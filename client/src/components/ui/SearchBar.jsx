import React from 'react';
import { useState } from "react";
import { useNavigate } from "react-router-dom";



export default function SearchBar() {

    const [search, setSearch] = useState("");

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate(`/productsearch/${search}`);

        setSearch("");
    };
    const handleChange = (event) => {
        setSearch(event.target.value);
    }
    
    

    return (
        <>
            <form onSubmit={handleSubmit} className='max-w-xl pl-2 search-bar'>
                <div className="rounded-md relative flex items-center w-full h-10 focus-within:shadow-lg bg-white overflow-hidden">
                    <button type="submit" className="grid place-items-center h-full w-12 text-gray-300 bg-[#fc2403]">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </button>

                    <input
                    onChange={handleChange}
                    
                    className="peer h-full w-full outline-none text-sm text-gray-700 p-2"
                    type="text"
                    id="search"
                    name="name"
                    placeholder="Search something.." />
                    
                </div>
            </form>
        </>
    )
}