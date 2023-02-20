import { Link } from "react-router-dom";
function Header() {
  return (
    <div>
      <button className="header-btn">
        <Link to={"/"} style={{color:"white"}}> Add New Person</Link>
      </button>
      <button className="header-btn">
        <Link to={"/Retrive"}  style={{color:"white"}}>Retrieve Information</Link>
      </button>
    </div>
  );
}
export default Header;
