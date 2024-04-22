import { useQuery } from "@apollo/client";
import { QUERY_USER } from "../utils/queries";
import Auth from '../utils/auth';
import { Link } from "react-router-dom";




const UserProducts = (props) => {
    const  { loading, data } = useQuery(QUERY_USER);
    const userData = data?.user || {};
   
   
   

    return (
        <main>
          <div className="flex flex-col justify-center pl-[200px]">
          {Auth.loggedIn() ? (
            <>
            <div className="p-8">
              <p className="text-[40px] text-white text-center p-6" >Welcome {userData.username}</p>
            </div>
            
            <div className="col-12 col-md-8 mb-3 flex flex-row justify-center flex-wrap">
            
            {userData.products &&
          userData.products.map((product) => (
           
            <div  className="m-5 h-[70%]" key={product._id}>
              <div className="max-w-xs max-h-xs w-full bg-black shadow-lg rounded-xl p-6">
                <div className="flex flex-col ">
                <Link to={`/product/${product._id}`}>
                  <div className="">
                    <div className="relative h-62 w-full mb-3">
                      <div className="absolute flex flex-col top-0 right-0 p-3">
                        
                      </div>
                      <img
                        src={product.image}
                        alt="Just a flower"
                        className=" w-full   object-fill  rounded-2xl"
                      ></img>
                    </div>
                    <div className="flex-auto justify-evenly">
                      <div className="flex flex-wrap ">
                        <div className="w-full flex-none text-sm flex items-center text-gray-600">
                         
                        </div>
                        <div className="flex items-center w-full justify-between min-w-0 ">
                          <h2 className="text-lg mr-auto cursor-pointer text-gray-200 hover:text-red-500 truncate ">
                            {product.name}
                          </h2>
                          
                        </div>
                      </div>
                      <div className="text-xl text-white font-semibold mt-1">
                        ${product.price}.00
                      </div>
                      <div className="lg:flex  py-4  text-sm text-white">{product.description}
                      </div>
                     
                    </div>
                    
                  </div>
                </Link>
                </div>
                <div className="flex space-x-2 text-sm font-medium justify-start">
                        <button className="cart-btn transition ease-in duration-300 inline-flex items-center text-sm font-medium mb-2 md:mb-0 px-5 py-2 hover:shadow-lg tracking-wider text-white rounded-full hover:bg-white hover:text-black ">
                          <span>Delete</span>
                        </button>
                        
                      </div>
              </div>
            </div>
            
          ))}
               
              
            </div>
            </>
          ) : (
            <h3>You're Not Logged in</h3>)}
          </div>


        </main>
      )
    
}

export default UserProducts;