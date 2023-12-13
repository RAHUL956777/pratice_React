import { useParams } from "react-router-dom";

const Product = () => {
  const params = useParams();

  const fecthProcuct = async()=>{
    const response = await fecthProcuct(`https://dummyjson.com/products/${productId}`)
    const data = await response.json();
    return data;
  }

  return <div></div>;
};

export default Product;
