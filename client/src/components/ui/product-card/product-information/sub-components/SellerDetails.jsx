import Text from "../../../../shared/Text";
import Icon from "../../../../shared/Icon";

export default function SellerInformation() {
    return (
            <div className="flex gap-2">
                <div className="seller-rating flex gap-1">
                    <i className="fa-solid fa-star text-red-500" />
                    <Text 
                        variant="small"
                        as="p"
                        className="product-card-seller-rating text-white"
                    >
                        4.60
                    </Text>
                    
                </div>
                 <Text 
                        variant="small"
                        as="p"
                        className="product-card-seller-name text-white"
                    >
                        tosimau
                    </Text>
            </div>
    )
}