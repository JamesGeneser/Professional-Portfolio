import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Footer() {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <footer className="w-100 mt-auto bg-secondary p-4">
      <div className="container text-center mb-5"></div>
      {location.pathname !== "/" && (
        <button className="btn  mb-3" onClick={() => navigate(-1)}>
          &larr; Back to Home
        </button>
      )}
      <div>
        <p>Icons</p>
      </div>
    </footer>
  );
}

export default Footer;
