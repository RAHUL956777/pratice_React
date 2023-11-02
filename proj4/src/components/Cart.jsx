import { AiFillDelete } from "react-icons/ai";

const img1 =
  "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=60&w=900&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFjYm9vayUyMHByb3xlbnwwfHwwfHx8MA%3D%3D";



const Cart = () => {
  return (
    <div className="cart">
      <main>
        <CartItem
          imgSrc={img1}
          name={"Mac Book"}
          price={"21345"}
          qty={1}
          id="abcd"
        />
      </main>

      <aside>
        <h2>Subtotal:${20000}</h2>
        <h2>Shipping:${200}</h2>
        <h2>Tax:${20}</h2>
      </aside>
    </div>
  );
};

const CartItem = ({
  imgSrc,
  name,
  price,
  qty,
  decrement,
  increment,
  deleteHandler,
  id,
}) => (
  <div className="cartItem">
    <img src={imgSrc} alt="image" />
    <article>
      <h3>{name}</h3>
      <p>${price}</p>
    </article>

    <div>
      <button onClick={() => decrement(id)}>-</button>
      <p>{qty}</p>
      <button onClick={() => increment(id)}>+</button>
    </div>

    <AiFillDelete onClick={() => deleteHandler(id)} />
  </div>
);

export default Cart;
