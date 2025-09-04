import React from "react";
import Link from "next/link";
import "../styles/NavBar.css";

function NavBar() {
  return (
    <div className="navBarWrapper">
      <h4>
        <Link style={{ textDecoration: "none", color: "#000" }} href="/about">
          about
        </Link>
      </h4>
    </div>
  );
}

export default NavBar;