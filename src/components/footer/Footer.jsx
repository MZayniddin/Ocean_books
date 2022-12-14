import c from "./Footer.module.css";
import { Link } from "react-router-dom";
//icons
import {
  FaFacebook,
  FaTelegram,
  FaInstagram
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className={c["footer-info"]}>
          <div>
            <strong className={c["footer-info-title"]}>Ma'lumot</strong>
            <ul>
              <li className={c["footer-info__list-item"]}>
                <Link className={c["footer-info-link"]} to="/about">
                  Biz haqimizda
                </Link>
              </li>
              <li className={c["footer-info__list-item"]}>
                <Link className={c["footer-info-link"]} to="/donate">
                  Donate
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <strong className={c["footer-info-title"]}>Biz bilan bog'laning</strong>
            <ul>
              <li className={c["footer-info__list-item"]}>
                <a href="tel:+998338835383" className={c["footer-info-link"]}>
                +998 33 883 53 83
                </a>
              </li>
              <li className={c["footer-info__list-item"]}>
                <a href="tel:+998970077007" className={c["footer-info-link"]}>
                +998 97 007 70 07
                </a>
              </li>
              <li className={c["footer-info__list-item"]}>
                <a
                  href="mailto:oceanbooksuz@gmail.com"
                  className={c["footer-info-link"]}
                >
                  oceanbooksuz@gmail.com
                </a>
              </li>
            </ul>
          </div>
          <div>
            <strong className={c["footer-info-title"]}>
              Bizning ijtimoiy tarmoqlar
            </strong>
            <div className={c["social-networks"]}>
              <a className={c.telegram} href="https://t.me/kiut_official" target="_blank" rel="noreferrer">
                <FaTelegram/>
              </a>
              <a className={c.instagram} href="https://www.instagram.com/world_record_egg/" target="_blank" rel="noreferrer">
                <FaInstagram/>
              </a>
              <a className={c.facebook} href="https://facebook.com" target="_blank" rel="noreferrer">
                <FaFacebook/>
              </a>
            </div>
          </div>
        </div>
        <div className={c["footer-text"]}>
          <p>
            2022 © Internet-shop oceanbooks.uz: We can give you opportunity
            download Online Books faster and with higher quality only with me.
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
