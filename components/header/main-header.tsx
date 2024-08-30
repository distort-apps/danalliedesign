import NavLink from "./nav-link";
import classes from "./main-header.module.css"

export default function MainHeader() {
  return (
    <header className={classes.header}>
      <NavLink href='/'>
        <p className={classes.span}>DanAllie Design</p>
      </NavLink>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink href='/plans'>plans</NavLink>
          </li>
          <li>
            <NavLink href='/homes'>homes</NavLink>
          </li>
          <li>
            <NavLink href='/contact'>contact</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
