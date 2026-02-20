import Text from "../../../../shared/Text";

export default function ProductDetails() {
    return (
        <div className="product-details-container flex flex-col gap-2">
            <div className="product-details-row flex justify-between items-center">
                <Text
                    variant="lead"
                    as="p"
                    className="product-card-title text-white"

                >
                    Product Title
                </Text>
                <Text
                    variant="small"
                    as="p"
                    className="product-card-condition text-black-800 bg-blue-400/60 rounded-xs border-solid border-2 border-blue-500 p-1"

                >
                    Like New
                </Text>
            </div>
            <Text
                    variant="large"
                    as="p"
                    className="product-card-title text-green-500"

                >
                    $199.99
            </Text>
        </div>
    )
}