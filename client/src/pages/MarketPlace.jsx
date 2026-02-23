import React from "react";
import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import { QUERY_ALL_PRODUCTS } from "../utils/queries";

import ProductCard from "../components/ui/product-card/ProductCard";

const MarketPlace = () => {
  const { loading, data } = useQuery(QUERY_ALL_PRODUCTS);

  if (loading) {
    return <p>Loading...</p>
  }
  const products = data?.products || [];

  if (!products.length) {
    return <h3>No items in this category</h3>;
  }

  return (
    <>
      <h2 className="text-[50px] font-bold text-center p-10">
        Welcome to the Store
      </h2>
      
      <div className="w-full flex flex-wrap justify-center gap-5">
        {products.map((product) => {
         return <ProductCard key={product._id} product={product} />
        })}
      </div>
    </>
  );
};

export default MarketPlace;
