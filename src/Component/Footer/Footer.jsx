import { FaFacebook,FaTwitter,FaLinkedin,FaInstagram} from "react-icons/fa";
export default function Footer() {
  return (
      <>
      <footer className="container-fluid py-5">
          <div className="footer-inner">
            <div className="row">
              <div className="col-12 col-md">
                <img
                  className="d-block"
                  src="./main/assets/img/logo.png"
                  alt="pp-img"
                />
                <small className="d-block mb-3 text-muted">
                  &copy;© Copyright e-commerce
                </small>
              </div>
              <div className="col-12 col-md">
                <h5>Customer Service</h5>
                <ul className="pl-3 text-small">
                  <li>
                    <a className="text-muted" href="">
                      Help & Contact Us
                    </a>
                  </li>
                  <li>
                    <a className="text-muted" href="">
                      Returns & Refunds
                    </a>
                  </li>
                  <li>
                    <a className="text-muted" href="">
                      Team feature
                    </a>
                  </li>
                  <li>
                    <a className="text-muted" href="">
                      Online Stores
                    </a>
                  </li>
                  <li>
                    <a className="text-muted" href="">
                      Terms & Conditions
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-12 col-md">
                <h5>Company</h5>
                <ul className="pl-3 text-small">
                  <li>
                    <a className="text-muted" href="">
                      What We Do
                    </a>
                  </li>
                  <li>
                    <a className="text-muted" href="">
                      {" "}
                      Available Services
                    </a>
                  </li>
                  <li>
                    <a className="text-muted" href="">
                      Latest Posts
                    </a>
                  </li>
                  <li>
                    <a className="text-muted" href="">
                      FAQs
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-12 col-md">
                <h5>Profile</h5>
                <ul className="pl-3 text-small">
                  <li>
                    <a className="text-muted" href="#">
                      My Account
                    </a>
                  </li>
                  <li>
                    <a className="text-muted" href="#">
                      {" "}
                      Checkout
                    </a>
                  </li>
                  <li>
                    <a className="text-muted" href="#">
                      {" "}
                      Order Tracking
                    </a>
                  </li>
                  <li>
                    <a className="text-muted" href="#">
                      {" "}
                      Help & Support
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-12 col-md-3">
                <form className=" my-2 my-lg-0 d-flex mail-sec">
                  <input
                    className="form-control "
                    type="search"
                    placeholder="your email address"
                    aria-label="Search"
                  />
                  <button className=" my-2 my-sm-0 btn btn-primary" type="submit">
                    sucbribe
                  </button>
                </form>
                <div className="s-icon">
                    {/* social icon  */}
                  <i><FaFacebook/></i>
                  <i><FaTwitter/></i>
                  <i><FaLinkedin/></i>
                  <i><FaInstagram/></i>
                </div>
              </div>
            </div>
          </div>
        </footer>
        <div className="f-bottom">
          <img
            className="d-block"
            src="main/assets/img/f-card.png"
            alt="Second slide"
          />
        </div>
        <div className="s-icon s-icon-list">
         <i> <FaFacebook/></i>
         <i><FaTwitter/></i>
         <i><FaLinkedin/></i>
         <i><FaInstagram/></i>
        </div>
      </>
  )
}
