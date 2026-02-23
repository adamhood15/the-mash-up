import ProductDetails from './sub-components/ProductDetails';
import ProductImage from './sub-components/ProductImage';
import SellerDetails from './sub-components/SellerDetails';

export default function Product({ product }) {

    return (
        <>
            <ProductImage 
                product={product}
                />
            <SellerDetails 
                product={product}
                />
            <ProductDetails 
                product={product}
                />

        </>
    )
}