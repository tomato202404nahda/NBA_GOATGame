import React from "react";
import { useNavigate } from "react-router-dom";
import NBALOGO from "../../assets/nba-6.svg";

export default function Header() {
  const navigate = useNavigate();
  return (
    <>
      <div className="headerContainer">
        <div className="headerContents">
          Pick your NBA GOAT{" "}
          <img className="inline w-5 h-auto" src={NBALOGO} alt="" />{" "}
        </div>
        <div className="navBar">
          <div onClick={() => navigate("/home")} className="navBarContents">
            Game
          </div>
          <div onClick={() => navigate("/ranking")} className="navBarContents">
            Ranking
          </div>
        </div>
      </div>
    </>
  );
}
