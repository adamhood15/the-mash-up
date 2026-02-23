export default function ProductImage({product}) {
    const { image, name } = product;
    return (
    <img 
        className="product-img rounded-md" 
        src={image} 
        alt={name} 
        />
    )
}