import './Navbar.css';

export const Navbar = () => {
  return (
    <header className="header">
      <div className="header__container">

        <div className="header__logo">
          <span className="header__logo-icon"></span> Kualilabs
        </div>

        <nav className="navbar">
          <ul className="navbar__list">
            <li className="navbar__item"><a href="#" className="navbar__link">Home</a></li>
            <li className="navbar__item"><a href="#" className="navbar__link">About Us</a></li>
            <li className="navbar__item"><a href="#" className="navbar__link">Projects</a></li>
            <li className="navbar__item"><a href="#" className="navbar__link">Services</a></li>
            <li className="navbar__item"><a href="#" className="navbar__link navbar__link--highlight">Contact Us</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};