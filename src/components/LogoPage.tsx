import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import HomePage from "./HomePage";

function LogoPage() {
  const navigate = useNavigate();

  function downArrow() {
    console.log("down arrow!");
  }

  return (
    <>
      {
        <div className="flex flex-col justify-center items-center h-screen bg-[#2a2a2a]">
          <img src="../assets/liv.png" alt="Logo" className="w-[30%] my-auto" />

          <img
            onClick={downArrow}
            src="../assets/down-arrow.png"
            alt="Down arrow to read more"
            className="w-[2%] mb-10 animate-bounce cursor-pointer scroll-smooth"
          />
        </div>
      }
      <HomePage />
    </>
  );
}

export default LogoPage;
