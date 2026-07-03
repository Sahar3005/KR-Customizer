import "./Footer.css";
import {
  FaInstagram,
  FaTwitter,
  FaFacebook,
  FaLinkedin,
  FaPhoneAlt,
  FaEnvelope
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer" id="footer">

      <div className="footer-top">

        <div className="footer-col logo-col">

    <img src="/logo2.png" alt="KR Customizer" className="logo" />

    <p className="address">
        8/F., CHINA HONG KONG TOWER,
        <br />
        8-12 HENNESSY ROAD,
        <br />
        WAN CHAI, HONG KONG,
        <br />
        Hong Kong
    </p>

</div>
        <div className="footer-col">

          <h3>Company</h3>

          <a href="/">About Us</a>
          <a href="/">Showcase</a>
          <a href="/">Case Studies</a>
          <a href="/">Blog</a>
          <a href="/">Become a Partner</a>

        </div>

        <div className="footer-col">

          <h3>Customizer</h3>

          <a href="/">Bakery</a>
          <a href="/">Fashion & Apparel</a>
          <a href="/">Jewelry & Accessories</a>
          <a href="/">Gifting & Occasion-Based</a>

        </div>

        <div className="footer-col">

          <h3>Contact Us</h3>

          <div className="contact">

            <FaPhoneAlt />
            <span>+91 904-530-1702</span>

          </div>

          <div className="contact">

            <FaEnvelope />
            <span>sales@krcustomizer.com</span>

          </div>

          <div className="contact">

            <FaEnvelope />
            <span>support@krcustomizer.com</span>

          </div>

          <h3 className="social-title">
            Social
          </h3>

          <div className="social">

            <FaInstagram />
            <FaTwitter />
            <FaFacebook />
            <FaLinkedin />

          </div>

        </div>

      </div>

      <hr />

      <div className="footer-bottom">

        <p>Privacy policy</p>

        <p>2025 Customizer. All rights reserved.</p>

      </div>

    </footer>
  );
}

export default Footer;