import AccountSideBar from "../components/ui/AccountSideBar";
import React from "react";
import { useQuery } from "@apollo/client";
import ProductOrders from "../components/ui/ProductOrders";
import PurchaseHistory from "../components/ui/PurchaseHistory";
import UserProducts from "./UserProducts";
import { useState } from "react";

import { QUERY_ALL_PRODUCTS } from "../utils/queries";

export default function Account() {
  const [accountPage, setAccountPage] = useState("Product Orders");

  const { loading, data } = useQuery(QUERY_ALL_PRODUCTS);
  const products = data?.products || [];

  if (!products.length) {
    return <h3>No items in this category</h3>;
  }

  return (
    <>
      <AccountSideBar
        accountPage={accountPage}
        setAccountPage={setAccountPage}
      />
      {accountPage === "Product Orders" ? (
        <ProductOrders />
      ) : accountPage === "User Profile" ? (
        <UserProducts />
      ) : (
        <PurchaseHistory />
      )}
    </>
  );
}
