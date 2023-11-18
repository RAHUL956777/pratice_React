import Videocard from "./Videocard"
import "../styles/videos.css"

const Videos = ({videos}) => {
  return (
    <div className="videos">
      {
        videos.map((item,index)=>(
          <Videocard index={index} key={item.image} name={item.name}/>
        ))
      }
    </div>
  )
}

export default Videos
