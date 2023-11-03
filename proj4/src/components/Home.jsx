import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

const Home = () => {
  const productList = [
    {
      name: "Mackbook Pro",
      price: "$2000",
      id: "abcd",
      imgSrc:
        "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=60&w=900&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFjYm9vayUyMHByb3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      name: "White Shooes",
      price: "$70",
      id: "bjhc",
      imgSrc:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/93d1d751-84ff-41ab-b15c-cf68eb417682/jordan-nu-retro-1-low-shoes-8294mJ.png",
    },
  ];

  const dispacth = useDispatch();

  const addToCardHandler = (options) => {
    // console.log(options);
    dispacth({ type: "addToCart", payload: options });
    toast.success("Added to cart");
  };

  return (
    <div className="home">
      {productList.map((product) => (
        <ProductCard
          key={product.id}
          name={product.name}
          price={product.price}
          id={product.id}
          imgSrc={product.imgSrc}
          handler={addToCardHandler}
        />
      ))}
    </div>
  );
};

// eslint-disable-next-line react/prop-types
const ProductCard = ({ name, id, price, handler, imgSrc }) => (
  <div className="productCard">
    <img src={imgSrc} alt={name} />
    <p>{name}</p>
    <h4>${price}</h4>
    <button onClick={() => handler({ name, price, id, quantity: 1, imgSrc })}>
      Add to cart
    </button>
  </div>
);

export default Home;
