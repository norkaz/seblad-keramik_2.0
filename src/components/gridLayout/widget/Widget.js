import React from "react";
import style from "./widget.module.less";

export default function Widget({ children, className }) {
  return <div className={[style.widget, className].join(" ")}>{children}</div>;
}
