import './Home.css'
import PropTypes from "prop-types";

const Home = ({setLoginUser}) => {
  Home.propTypes = {
    setLoginUser: PropTypes.func.isRequired,
  };
  return (
    <div className='homePage'>
      <h1>Welcome to home page</h1>
      <button className='button' onClick={()=>setLoginUser({})}>Logout</button>
    </div>
  )
}

export default Home
