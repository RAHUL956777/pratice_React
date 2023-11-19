import Videocard from "./Videocard"
import "../styles/videos.css"

const Videos = ({videos}) => {
  return (
    <div className="videos">
      {
        videos.map((item,index)=>(
          <Videocard index={index} key={index} name={item.name} image={item.image}/>
        ))
      }
    </div>
  )
}

export default Videos
