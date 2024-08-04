import { useSelector } from "react-redux"
import { selectFinalCartProducts } from "../../redux/cart/cartSelectors";

const CartTab = () => {
    const cartProducts = useSelector(selectFinalCartProducts);

  return (
    <div>
      
    </div>
  )
}

export default CartTab
