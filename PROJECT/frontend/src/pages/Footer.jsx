import {
  FaFacebook,
  FaInstagramSquare,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="sb_footer section_padding">
        <div className="sb__footer-links">
          <div className="sb__footer-links_div">
            <h4>About Us</h4>
          </div>
          <div className="sb__footer-links_div">
            <h4>Testimonials</h4>
          </div>
          <div className="sb__footer-links_div">
            <h4>Blog</h4>
          </div>
          <div className="sb__footer-links_div">
            <h4>Corporate Office</h4>
            <div className="Details">
              <span>
                <p>Infinitive Holidays OPC Limited</p>
                <p>Address: DS Shivshakti Near Vidhyanakunj</p>
                <p>School Adajan, Surat Gujrat 395009</p>
                <p>Toll Free: +91 84678648000</p>
              </span>
            </div>
          </div>
          <div className="sb__footer-links_div">
            <h4>Contact With Us On</h4>
            <div className="socialmedia">
              <div className="icon">
                <p className="style">
                  <FaFacebook />
                </p>
                <p className="style">
                  <FaInstagramSquare />
                </p>
                <p className="style">
                  <FaTwitter />
                </p>
                <p className="style">
                  <FaWhatsapp />
                </p>
              </div>
            </div>
          </div>
          <div className="sb__footer-links_div">
            <div className="another-details">
              <span>
                <p>Phone: 9090909000</p>
                <p>Mail: info.infinitiveholidays.com</p>
              </span>
            </div>
          </div>
        </div>

        <hr></hr>

        <div className="sb__footer-below">
          <div className="sb_footer-copyright">
            <p>@{new Date().getFullYear()} company. All right reserved.</p>
          </div>
          <div className="sb__footer-below-links">
            <a href="/terms">
              <div>
                <p>Terms & Conditions</p>
              </div>
            </a>
            <a href="/privacy">
              <div>
                <p>Privacy</p>
              </div>
            </a>
            <a href="/security">
              <div>
                <p>Security</p>
              </div>
            </a>
            <a href="/cookie">
              <div>
                <p>Cookie Declaration</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
