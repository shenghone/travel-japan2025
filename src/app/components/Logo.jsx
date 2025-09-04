import React from "react";
import Link from "next/link";
import "../styles/Logo.css";

function Logo() {
  return (
    <div className="logoWrapper">
      <div className="smallDot" />
      <h4>
        <Link style={{ color: "#000", textDecoration: "none" }} href="/">
          travel japan
        </Link>
      </h4>
    </div>
  );
}

export default Logo;