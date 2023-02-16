import "./Menu.css";
const Menu = ({ items, active, setMenuActive }) => {
  return (
    <div>
      <ul
        className={active ? "nav open" : "nav"}
        onClick={() => setMenuActive(false)}
      >
        {items.map((item) => (
          <li>
            <a href={item.href}>{item.value}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};
/* <div class="nav-toggle">
      <nav>
        <p>Menu</p>
        <span />
      </nav>
      <ul class="nav ">
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#full-slide">Work</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div> */

export default Menu;
