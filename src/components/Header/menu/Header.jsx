import React from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import classNames from "classnames/bind";
import style from "./menu.module.scss";
import Btn from "../btn/Btn";
const cx = classNames.bind(style);

function Header({ title, onBack }) {
  return (
    <div className={cx("language")}>
      <Btn className={cx("back")} onClick={() => onBack()}>
        <ArrowBackIosNewIcon />
      </Btn>
      <h4 className={cx("title")}>{title}</h4>
    </div>
  );
}

export default Header;
