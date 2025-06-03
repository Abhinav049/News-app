import React from "react";

function Footer() {
  return (
    <div>
      <footer className="bg-dark text-white text-center py-3 mt-5">
        <div className="container">
          <p className="mb-0">
            &copy; {new Date().getFullYear()} My React App. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
export default Footer;
