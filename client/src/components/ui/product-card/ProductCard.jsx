import Product from "./product-information/Product";
import UserActions from "./product-information/UserActionsRow";

export default function ProductCard() {
    return (
        <div className="product-card-container max-w-xs max-h-xs w-full bg-black shadow-lg rounded-xl p-6 flex flex-col gap-2">
            <Product />
            <UserActions />
        </div>
            
       
    )
} 