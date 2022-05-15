import "./navbar.css";
import logo from "./../../images/logo.svg";

const Navbar = () => {
  return (
    <div>
      <header>
        <img class="logo" src={logo} alt="logo" />
        <nav>
          <ul class="nav_links">
            <li>Home</li>
            <li>Page 1</li>
            <li>Page 2</li>
          </ul>
        </nav>
        <button>Contact</button>
      </header>
    </div>
  );
};
export default Navbar;
