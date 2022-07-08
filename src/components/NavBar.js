import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <NavLink className="navCss" to="/home">
        HomePage
      </NavLink>
      <br />
      <NavLink className="navCss" to="/character">
        CharacterDetailsPage
      </NavLink>
      <br />
      <NavLink className="navCss" to="/house">
        HouseDetailsPage
      </NavLink>
    </div>
  );
};

export default NavBar;
