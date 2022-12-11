import c from './Footer.module.css'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className={c["footer-info"]}>
          <div>
            <strong className={c["footer-info-title"]}>Information</strong>
            <ul>
              <li>
                <Link className={c["footer-info-link"]} to="/">About Us</Link>
              </li>
            </ul>
          </div>
          <div>
            <strong className={c["footer-info-title"]}>Contact Us</strong>
          </div>
          <div>
            <strong className={c["footer-info-title"]}>Our Social Networks</strong>
          </div>
        </div>
        <div className={c["footer-text"]}>
        <p>
          2022 © Internet-shop oceanbooks.uz: We can give you opportunity download Online Books faster and with higher quality only with me. All rights reserved.
        </p>
      </div>
      </div>
    </footer>
  )
}

export default Footer