import React from "react";
import DarkModeSwitcher from "./DarkModeSwitcher";

function Navbar() {
  return (
    <div className="navbar-center relative">
      <p className="font-sans font-medium text-5xl animate-fade-in-bottom absolute top-2 right-5">
        Noemi Marrieth Ligpitan
        <DarkModeSwitcher />
      </p>
    </div>
  );
}

export default Navbar;
