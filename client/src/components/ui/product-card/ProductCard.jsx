import Product from "./product-information/Product";
import UserActions from "./product-information/UserActionsRow";

export default function ProductCard({ product }) {
    return (
        <div className="product-card-container max-w-xs h-fit max-h-xs w-full bg-black shadow-lg rounded-xl p-6 flex flex-col gap-2">
            <Product product={product} />
            <UserActions />
        </div>
            
       
    )
} 