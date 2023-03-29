import "./Nav.css"


function Nav() {
  return (
    <nav className="flexbetween">
      <span> MyPage</span>
      <img id="burgher" src="./assets/menu.svg" />
      <ul>
        <li>
          <a href="##">home</a>
        </li>
        <li>
          <a href="##">why</a>
        </li>
        <li>
          <a href="##">how</a>
        </li>
      </ul>
    </nav>
  );
}
export default Nav
