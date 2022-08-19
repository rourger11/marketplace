import { FaSearch,FaHeart} from "react-icons/fa";
export default function Navigation() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link " aria-current="page" href="#">MOBILE</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">TV & AV</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">APPLIANCES</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">IT</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">SHOP</a>
          </li>
        </ul>
        <div className="m-auto">
         <a className="navbar-brand" href="#"> <img className="d-block" src="./main/assets/img/logo.png" alt="pp-img" height="40"/></a>
       
      </div>	
      <form className="form-inline my-2 my-lg-0 mr-3">
         <input className="form-control " type="search" placeholder="search your keywords here" aria-label="Search"/>
         <button className=" my-2 my-sm-0" type="submit"> <FaSearch/>
 </button>
       </form>

       <div className="right-menu d-flex">
            <div className="hrt mr-3"> <FaHeart/>5</div>
            <div className="cart-count mr-2"> Cart <span className=" text-mute">10</span></div>
            <img className="d-block menu-btn" src="./main/assets/img/menu.png" alt="Second slide"/>
       </div>
      </div>
    </div>
  </nav>

  )
}
