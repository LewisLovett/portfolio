import "./Navbar.scss";

const Navbar = (props) => {
    return(
        <header class="header">
      <h1 class="header__title">Welcome</h1>
        <ul class="header__nav">
          <a class="header__navLink" href="#portfolio">Portfoilo</a>
          <a class="header__navLink" href="#skills">Skills</a>
          <a class="header__navLink" href="#experience">Experience</a>
          <a class="header__navLink"  href="#about">About</a>
          <a class="header__navLink"  href="#contact">Contact</a>
        </ul>
    </header>
    )
}
export default Navbar;