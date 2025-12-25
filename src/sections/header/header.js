import "../../index.css";
import "./header.css";

/* header function */
function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <div className="container nav-container">
          {" "}
          <a href="../public/index.html" className="logo">
            Velocity
          </a>
          <ul className="nav-links">
            <li>
              <a href="#home" className="nav-link active-btn">
                Home
              </a>
            </li>
            <li>
              <a href="#contact" className="nav-link">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <section className="hero">
        <h1 className="hero-title">This is Velocity</h1>
        <div className="hero-btns">
          <button className="btn sign-up-btn">sign up</button>
          <button className="btn learn-more">learn more</button>
        </div>
      </section>
    </header>
  );
}

export default Header;
