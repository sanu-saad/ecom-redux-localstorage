import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { remove } from "../redux/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.cart);

  const removeItem = (id) => {
    dispatch(remove(id));
  };
  return (
    <>
      <NavLink to="/product">Back to shopping</NavLink>
      <br />
      <NavLink>Cart-{cartProducts.length}</NavLink>
      <div>
        {cartProducts.map((cartProduct) => (
          <>
            <div style={{ display: "flex", gap: "1rem", marginTop: "2rem" }}>
              <img
                src={cartProduct.image}
                alt=""
                style={{ width: "50px", height: "25px" }}
              />
              <p>{cartProduct.title}</p>
              <p>$ {cartProduct.price}</p>
              <button onClick={() => removeItem(cartProduct.id)}>remove</button>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default Cart;
