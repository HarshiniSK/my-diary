import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <nav className="navbar">
      <h1>E-Diary</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link
          to="/create"
          style={{
            color: "white",
            backgroundColor: "#f1356d",
            borderRadius: "8px",
          }}
        >
          New Day
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
