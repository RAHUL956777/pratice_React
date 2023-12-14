import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "react-router-dom";

const Product = () => {
  const params = useParams();

  // mutation
  const mutation = useMutation({
    mutationFn: (newProduct) => {
      const res = axios.put(`https://dummyjson.com/products/1`, newProduct);
      return res;
    },
  });

  const fetchProduct = async () => {
    try {
      const response = await axios.get(
        `https://dummyjson.com/products/${params.productId}`
      );

      return response;
    } catch (error) {
      throw new Error(error.message);
    }
  };

  const {
    isLoading,
    error,
    data: product,
  } = useQuery({
    queryKey: ["product", params.productId],
    queryFn: fetchProduct,
  });

  if (error) {
    return <h3>Error: {error.message}</h3>;
  }

  if (isLoading) {
    return <h3>Loading...</h3>;
  }

  return (
    <>
      <div>{product.title}</div>;
      <button
        onClick={() => {
          mutation.mutate({ title: "Update Product" });
        }}
      ></button>
    </>
  );
};

export default Product;
