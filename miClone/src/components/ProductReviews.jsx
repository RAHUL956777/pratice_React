import "../styles/ProductReviews.css";
import ProductReviewCard from "./ProductReviewCard";

const ProductReviews = ({productReviews}) => {
  return (
    <div className="ProductReviews">
      {productReviews.map((item, index) => (
        <ProductReviewCard
          price={item.price}
          name={item.name}
          image={item.image}
          review={item.review}
          index={index}
          key={item.image}
        />
      ))}
    </div>
  );
};

export default ProductReviews;
