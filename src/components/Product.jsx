import "./Product.css";
import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../redux/cartSlice";
import { getProducts } from "../redux/productSlice";

const Product = () => {
  const navigate = useNavigate();
  const userName = JSON.parse(localStorage.getItem("user"));
  const cartProducts = useSelector((state) => state.cart);
  const { data: products, status } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  //pagination
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const addCart = (product) => {
    dispatch(add(product));
  };

  if (status === "loading") {
    return <p style={{ textAlign: "center" }}>loading........</p>;
  } else {
    <p>Products</p>;
  }
  if (status === "error") {
    return <p>Something Went Wrorng.</p>;
  }
  const selectPageHandler = (selectedPage) => {
    if (
      selectedPage >= 1 &&
      selectedPage <= products.length / 5 &&
      selectedPage !== page
    )
      setPage(selectedPage);
  };
  //logout
  const handleLogOut = () => {
    localStorage.removeItem("loggedin");
    navigate("/");
  };
  return (
    <div>
      <div>
        <p>welcome - {userName.name}</p>
        <button onClick={handleLogOut}>Logout</button>
        <br />
        <NavLink to="/">E-Shop</NavLink>
        <br />
        <NavLink to="/cart">Cart-{cartProducts.length}</NavLink>
      </div>
      <br />
      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
        {products.slice(page * 5 - 5, page * 5).map((product) => (
          <>
            <div style={{ width: "100px", height: "150px" }}>
              <img
                src={product.image}
                alt=""
                style={{ width: "100px", height: "75px" }}
              />
              <p>{product.title.slice(0, 10)}</p>
              <p>$ {product.price}</p>
              <button onClick={() => addCart(product)}>Add Cart</button>
            </div>
          </>
        ))}
      </div>

      {/* pagination */}
      {products.length > 0 && (
        <div className="pagination">
          <span
            className={page > 1 ? "" : "disable"}
            onClick={() => selectPageHandler(page - 1)}
          >
            Prev
          </span>

          {[...Array(products.length / 5)].map((elem, i) => {
            return (
              <span
                className={page === i + 1 ? "page-selected" : ""}
                onClick={() => selectPageHandler(i + 1)}
              >
                {i + 1}
              </span>
            );
          })}

          <span
            className={page < products.length / 5 ? "" : "disable"}
            onClick={() => selectPageHandler(page + 1)}
          >
            Next
          </span>
        </div>
      )}
    </div>
  );
};

export default Product;
