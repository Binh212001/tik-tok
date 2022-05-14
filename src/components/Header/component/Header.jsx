import React from "react";
import classNames from "classnames/bind";
import style from "./header.module.scss";
import logo from "../../../assets/image/logo.svg";
import Search from "../search/Search";
import Menu from "../menu/Menu";

const cx = classNames.bind(style);

function Header() {
  const user = true;
  return (
    <header className={cx("wrapper")}>
      <div className={cx("header")}>
        <img src={logo} alt="Tik-tok" />
        <div className={cx("search")}>
          <Search />
        </div>
        {user ? (
          <div>user</div>
        ) : (
          <div className={cx("menu")}>
            <Menu />
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
