import Button from '../../../shared/Button';
import Icon from '../../../shared/Icon';

export default function UserActionsRow() {
    return (
        <div className="product-card-user-action-container flex flex-row gap-2">
            <Button 
                type="button"
                variant="default"
                className="add-cart-btn"
            >
                Add to Cart
            </Button>
            <Icon className="watch-btn fa-solid fa-eye"/>
        </div>
    )
}