
const CartProductList = ({products}) => {
  return (
    <div>
        <ul>
          {products.map(product => (
            <li key={product.id}>{product.name}</li> 
          ))}
        </ul>
    </div>
  );
}

export default CartProductList;

