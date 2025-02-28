import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Mustang
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" to="/Home">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/About">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/Project">
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/Contact">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/Classcompo">
                Class-Component
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
