import { Link } from "react-router-dom"
import "../styles/Navbar.css";

export const Navbar = () => {
  return (
    <div className="nav-component">
      <header>
        <nav className="navbar">
          <ul className="nav-links">
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/submit">Create a Recon</Link></li>
          </ul>
        </nav>
      </header>
    </div>
  )
}
