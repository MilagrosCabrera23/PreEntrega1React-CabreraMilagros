import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

import '../CartWidget/CartWidget.css'
const CartWidget = () => {
    return (
        <div className="Cart" >
            <FontAwesomeIcon icon={faCartShopping} />
            <h4 className="ms-1">1</h4>
        </div>
    )
}

export default CartWidget; 