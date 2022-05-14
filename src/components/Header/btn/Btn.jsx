import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames/bind";
import style from "./btn.module.scss";
import { Link } from "react-router-dom";

const cx = classNames.bind(style);
function Btn({ children, onClick, to, href, primary, ...passProps }) {
  const props = {
    primary,
    onClick,

    ...passProps,
  };

  const classes = cx("wrapper", {
    primary,
  });

  let Comp = "button";
  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = "a";
  }
  return (
    <Comp className={classes} {...props}>
      <span>{children}</span>
    </Comp>
  );
}

Btn.propTypes = {
  primary: PropTypes.string,
  onClick: PropTypes.func,
};

export default Btn;
