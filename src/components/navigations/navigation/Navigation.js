import React from "react";
import { menus } from "../../../data/menus/menus";
import { NavLink } from "react-router-dom";
import style from "./navigation.module.less";

export default function Navigation({
  containerClassName,
  ulClassName,
  liClassName,
  linkClassName,
  linkActiveClassName,
  horizontal,
  menuName,
}) {
  return (
    <div
      className={[
        style.navigation,
        containerClassName,
        horizontal ? style.horizontal : style.vertical,
      ].join(" ")}
    >
      <nav>
        <ul className={[style.menu, ulClassName].join(" ")}>
          {menus[menuName].map((menuItem, index) => {
            return (
              <li
                className={[style.menuItem, liClassName].join(" ")}
                key={index}
              >
                <NavLink
                  className={[style.menuItemLink, linkClassName].join(" ")}
                  to={menuItem.url}
                >
                  {menuItem.name}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
