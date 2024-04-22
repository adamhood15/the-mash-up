import drums from '../../assets/images/drums.jpg'
import { Link } from "react-router-dom";

export default function Cart() {

  function checkout() {
    console.log("checkout");
  }


  return (
    <div className="relative font-poppins">
      <div className="AZfixed inset-0 bg-gray-700 opacity-25"></div>
      <div className="fixed top-0 bottom-0 right-0 z-10 w-full max-w-xl overflow-y-scroll bg-white ">
        <div className="p-6 bg-neutral-400 h-screen md:pt-20 md:pb-6 md:px-12 ">
          <div className="text-right">
            <button className="text-gray-700 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-x-lg"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"
                />
                <path
                  fillRule="evenodd"
                  d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"
                />
              </svg>
            </button>
          </div>
          <div className="flex items-center mb-10">
            <h2 className="text-3xl font-bold  ">
              Shopping Cart
            </h2>
            <span className="inline-flex items-center justify-center w-8 h-8 ml-4 text-base font-bold bg-white rounded-full text-[#fc2403]">
              1
            </span>
          </div>
          <div className="block pb-6 mb-6 -mx-4 border-b border-gray-200 md:flex">
            <div className="w-full px-4 mb-6 md:w-1/3 md:mb-0">
              <div className="flex w-full h-96 md:h-32 md:w-32">
                <img
                  src={drums}
                  alt=""
                  className="object-cover w-full h-full rounded-md"
                ></img>
              </div>
            </div>
            <div className="w-full px-4 md:2/3">
              <div className="flex justify-between">
                <div className="">
                  <h2 className="mb-2 text-xl font-bold ">
                    Product Name
                  </h2>
                  <p className="mb-4 text-sm font-medium text-white  ">
                    {" "}
                    Quantity: 4
                  </p>
                  <div>
                    <button className="px-4 py-2 mb-4 mr-4 font-medium text-center bg-zinc-900 text-white rounded-md md:mb-0    hover:bg-[#fc2403] hover:text-gray-100">
                      Edit
                    </button>
                    <button className="px-4 py-2 font-medium text-center bg-zinc-900 text-white rounded-md   hover:bg-[#fc2403] hover:text-gray-100">
                      Remove
                    </button>
                  </div>
                </div>
                <div>
                  <p className="text-lg font-bold text-black ">
                    $299.00
                  </p>
                </div>
              </div>
            </div>
          </div>
         
          <div className="flex justify-between text-base ">
            <p>Subtotal</p>
            <p>$299.00</p>
          </div>
          <p className="mt-4 text-sm text-black ">
            Shipping calculated at checkout period.
          </p>
          <div className="flex items-center justify-center mt-6">
            <button className="w-full py-3 text-lg font-medium bg-[#fc2403] rounded-md text-gray-50 hover:bg-black"
            onClick={checkout}>
              <Link to="/checkout">
              Checkout
              </Link>
            </button>
          </div>
          <div className="flex items-center justify-center mt-6">
            <p>
              <span className="">or,</span>
              <button className="pl-1 text-[#fc2403] hover:underline ">
                Continue Shopping
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
