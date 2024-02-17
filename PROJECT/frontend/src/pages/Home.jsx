import Card from "../components/Card";
import img1 from "../assets/images/img1.jpg";
// import "../styles/Home.css";


const Home = () => {
    const cardsData = [
      {
        img: img1,
        savings: "Save INR 30,000",
        description: "Echo Dot (3rd Gen) - Smart speaker with Alexa - Charcoal",
        price: "39.99"
      },
    ]
  return (
    <>
      {/* <Card {...cardsData[0]} /> */}
    </>
  )
}

export default Home
