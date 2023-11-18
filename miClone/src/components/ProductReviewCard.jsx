import "../styles/ProductReviewCard.css";

const ProductReviewCard = ({ image, index, review, name, price }) => {
  return (
    <div className="ProductReviewCard">
      <img src={image} alt={`${index} Review`} />
      <h5>{review}</h5>
      <span>{name}</span>
      <b>{price}</b>
    </div>
  );
};

export default ProductReviewCard;
