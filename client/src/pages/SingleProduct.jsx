import drums from "../assets/images/drums.jpg";
import Comments from "../components/ui/Comments";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useQuery } from "@apollo/client";
import { QUERY_SINGLE_PRODUCT } from "../utils/queries";
import { Link } from 'react-router-dom';


export default function ProductDetails() {
  const [openTab, setOpenTab] = useState("Description");
  const { productId } = useParams();

  const { data } = useQuery(QUERY_SINGLE_PRODUCT, {
    variables: { productId: productId },
  });
  console.log(data);
  const product = data?.product || {};

  function handleTabChange(tab) {
    setOpenTab(tab);
    console.log(tab);
  }

  function Description() {
    return (
      <div>
        <h4 className="text-xl font-black mb-3">{product.name}</h4>
        <p className="text-lg font-bold">{product.description}</p>
      </div>
    );
  }

  function addToCart() {
    console.log('hello');
  }

  return (
    <>
      <section className="py-20">
        <div className="container bg-gray-200 rounded p-8 mx-auto">
          <div className="max-w-xl lg:max-w-6xl mx-auto">
            <div className="flex flex-wrap -mx-4 mb-12">
              <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
                <div className="w-full h-[100%]">
                  <a
                    className="relative group block mb-6 h-full w-full bg-blueGray-900 rounded-md"
                    href="#"
                  >
                    <div className="absolute top-0 left-0 h-full w-full transform -translate-y-1 -translate-x-1 group-hover:translate-y-0 group-hover:translate-x-0 transition duration-300">
                      <img
                        className="img-fluid w-full h-full object-cover rounded-md border-2 border-black"
                        src={product.image}
                        alt=""
                      ></img>
                    </div>
                  </a>
                </div>
              </div>
              <div className="w-full lg:w-1/2 px-4">
                <div className="max-w-lg">
                  <h2 className="text-4xl font-black mb-1">{product.name}</h2>
                  <span className="block text-sm font-bold mb-5">
                    Offered by: {product.seller}
                  </span>
                  <div className="flex items-center mb-4">
                    <button className="inline-block mr-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-red-500 mr-1"
                        viewBox="0 0 17 17"
                        transform="scale(1.3)"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="text-gray-400 whitespace-nowrap mr-3">
                        4.60
                      </span>
                    </button>
                  </div>
                  <span className="block text-2xl font-black text-green-700 mb-4">
                    ${product.price}.00
                  </span>
                  <p className="font-bold mb-2">{product.description}</p>
                 
                  <div className="flex flex-wrap mb-4">
                 
                    <div className="w-full sm:w-auto">

                    </div>
                  </div>
                  <div className="flex flex-wrap sm:flex-nowrap items-center -mx-2 mb-6 mt-20">
                    <div className="flex-grow-1 w-full px-2 mb-4">
                      <Link
                        className="group relative inline-block h-12 w-full -mb-2 bg-blueGray-900 rounded-md"
                        to="#"
                        onClick={addToCart}
                      >
                        <div className="absolute top-0 left-0 transform -translate-y-1 -translate-x-1 w-full h-full group-hover:translate-y-0 group-hover:translate-x-0 transition duration-300">
                          <div className="flex h-full w-full items-center justify-center bg-[#fc2403] border-2 border-black rounded-md hover:bg-black hover:border-[#fc2403]">
                            <span className="text-base font-black text-white">
                              Add to Cart
                            </span>
                          </div>
                        </div>
                      </Link>
                    </div>
                    {/* Tie logic that saves an item to a user's wishlist */}
                    <div className="w-auto px-2 mb-4">
                      <a
                        className="inline-flex items-center justify-center w-12 h-12 text-black hover:text-indigo-500 border-2 border-black hover:border-indigo-500 rounded-md transition duration-200"
                        href="#"
                      >
                        <svg
                          width="20"
                          height="18"
                          viewBox="0 0 20 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M14.44 0.0999756C12.63 0.0999756 11.01 0.979976 10 2.32998C8.99 0.979976 7.37 0.0999756 5.56 0.0999756C2.49 0.0999756 0 2.59998 0 5.68998C0 6.87998 0.19 7.97998 0.52 8.99998C2.1 14 6.97 16.99 9.38 17.81C9.72 17.93 10.28 17.93 10.62 17.81C13.03 16.99 17.9 14 19.48 8.99998C19.81 7.97998 20 6.87998 20 5.68998C20 2.59998 17.51 0.0999756 14.44 0.0999756Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Add conditional rendering logic that loads the Description, Customer Reviews or Shipping & Returns sections depending on what the user clicks */}
            <div className="mb-8 border-b-2 border-black">
              <div className="flex flex-col md:flex-row -mb-px">
                <h2
                  className="inline-block px-2 pb-2 mb-3 md:mb-0 text-lg font-black text-[#fc2403] border-b-4 border-[#fc2403]"
                >
                  Seller Reviews
                </h2>
               
              </div>
             
                <Comments />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
