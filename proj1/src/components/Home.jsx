import vg from "../assets/2.webp";
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from "react-icons/ai"

const Home = () => {
  return (
    <>
      <div className="home">
        <main>
          <h1>TechStar</h1>
          <p>Solution to all your problems</p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="graphics" />

        <div>
          <p>
            We are your only solution to tech problem you face every day. We are
            leading company whose aim is to increase the problem solving ability
            in children.
          </p>
        </div>
      </div>

    <div className="home3">
        <div>
            <h1>Who we are?</h1>
            <h3>Let&apos;s build a brighter digital future together.</h3>
            <p>
                Our mission is to empower businesses and individuals with the latest
                web technologies, providing them with the tools and knowledge they
                need to thrive in the digital age. We&apos;re here to turn your visions
                into reality and make your online ventures a resounding success.
                Join us on this exciting journey as we push the boundaries of what&apos;s
                possible in web development. We&apos;re more than just a team; we&apos;re your
                partners in digital transformation.
            </p>
        </div>
    </div>

    <div className="home4">
        <div>
          <h1>Brands</h1>

          <article>
              <div style={{
                animationDelay:"0.3s"
              }}>
                <AiFillGoogleCircle/>
                <p>Google</p>
              </div>
              <div style={{
                animationDelay:"0.5s"
              }}>
                <AiFillAmazonCircle/>
                <p>Amazon</p>
              </div>
              <div style={{
                animationDelay:"0.7s"
              }}>
                <AiFillYoutube/>
                <p>Youtube</p>
              </div>
              <div style={{
                animationDelay:"1s"
              }}>
                <AiFillInstagram/>
                <p>Instagram</p>
              </div>
          </article>
        </div>
    </div>
    </>
  );
};

export default Home;
