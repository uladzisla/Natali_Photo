import { useState } from "react";
import "./Header.css";
import Menu from "./Menu";
import MainPhoto from "../../img/MainPhoto.jpg";

const Header = (props) => {
  const [menuActive, setMenuActive] = useState(false);
  const items = [
    { value: "About", href: "#about" },
    { value: "Work", href: "#full-slide" },
    { value: "Contact", href: "#contact" },
  ];
  return (
    <section id="hero">
      <div className="imgg">
        <header>
          <nav>
            <div className="navv" onClick={() => setMenuActive(!menuActive)}>
              <div>
                <span>MENU</span>
              </div>
              <div>
                <span class="material-symbols-outlined"> Menu</span>
              </div>
            </div>
          </nav>
          <Menu
            active={menuActive}
            setMenuActive={setMenuActive}
            items={items}
          ></Menu>
        </header>
      </div>
      <div className="wrapper">
        <div className="welcome">
          <h1>
            <strong>Натали</strong> Ваш фотограф
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex.
          </p>
        </div>
        <div className="photographer">
          <img src={MainPhoto} alt="Photographer" />
        </div>
      </div>
    </section>
  );
};
export default Header;
