import React from "react";
import nerdmoji from './Resources/nerdmoji.png'

const Navbar = () => {
  return (
    <>
    <nav className="flex items-center justify-center ">
      <p>
        <span className=" text-primary font-extrabold">NERDMO</span>
        <img src={nerdmoji} alt="logo" className="inline-block mt-auto mb-auto" />
      </p>
    </nav>
</>
  );
};

export default Navbar;
