import { Link } from "react-router-dom";
import profileImg from "../assets/profile-img.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="#" className="navbar__logo">
        <img src={profileImg} alt="Profile photo" />

        <div className="navbar__logo-text">
          <h3>Ali Sajad</h3>
          <p>Front end developer</p>
        </div>
      </a>

      <ul className="navbar__list">
        <li>
          <Link to="/">home.</Link>
        </li>
        <li>
          <Link to="/about">about.</Link>
        </li>
        <li>
          <Link to="/projects">project.</Link>
        </li>
        <li>
          <Link to="/contact">contact.</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
