import React from "react";
import logo from "../../images/logo.png";
import { siteData } from "../../data/site/sitedata";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMugHot } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import style from "./header.module.less";

export default function Header({ setIsOpen }) {
  return (
    <div className={style.header}>
      <div
        className={[style.headerBox, "only-mobile", style.hamburger].join(" ")}
      >
        <button className={style.headerButton} onClick={() => setIsOpen(true)}>
          <FontAwesomeIcon icon={faMugHot} />
        </button>
      </div>

      <div className={style.headerBox}>
        <NavLink
          to="/"
          className={style.logoLink}
          activeclassname={style.logoLinkActive}
        >
          <img className={style.logo} src={logo} alt={siteData.name} />
        </NavLink>
      </div>
      <div className={[style.headerBox, "only-mobile"].join(" ")}></div>
    </div>
  );
}
