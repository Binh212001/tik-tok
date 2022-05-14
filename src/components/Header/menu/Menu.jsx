import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import style from "./menu.module.scss";
import Btn from "../btn/Btn";
import Popper from "./Popper";

const MENUITEM = [
  {
    title: "Viet Nam",
    children: {
      header: "Language",
      data: [
        {
          title: "Viet Nam",
        },
        {
          title: "English",
          children: {
            header: "Language",

            data: [
              {
                title: "Viet Nam 1",
              },
              {
                title: "English 1",
              },
            ],
          },
        },
      ],
    },
  },
  {
    title: "Suport and help",
  },
];

const cx = classNames.bind(style);

function Menu() {
  return (
    <div className={cx("menu")}>
      <Link to="/upload">
        <Btn>Up load</Btn>
      </Link>
      <Btn primary="true">Sign in</Btn>

      <Popper items={MENUITEM} />
    </div>
  );
}

export default Menu;
