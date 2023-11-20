import "../styles/NavCard.css"

const NavCard = ({name,price,image,index}) => {
  return (
    <div className="navCard">
      <img src={image} alt={`${index} phone`} />
      <p>{name}</p>
      <span>{price}</span>
    </div>
  )
}

export default NavCard
