import React, { useState } from "react";
import Tippy from "@tippyjs/react/headless";
import MenuItem from "./MenuItem";
import ListIcon from "@mui/icons-material/List";
import Header from "./Header";

import classNames from "classnames/bind";
import style from "./menu.module.scss";
const cx = classNames.bind(style);
function Popper({ items = [] }) {
  const [history, setHistory] = useState([{ data: items }]);

  const current = history[history.length - 1];

  const onBack = () => {
    setHistory((prev) => prev.slice(0, prev.length - 1));
  };
  const renderItem = () => {
    return current.data.map((item, index) => {
      const isParent = !!item.children;
      return (
        <div key={index}>
          <MenuItem
            data={item}
            onClick={() => {
              if (isParent) {
                setHistory((prev) => [...prev, item.children]);
              }
            }}
          />
        </div>
      );
    });
  };
  return (
    <div>
      <Tippy
        interactive
        placement="bottom-end"
        render={(attrs) => (
          <div className={cx("popper")}>
            {history.length > 1 && (
              <Header title={current.header} onBack={onBack} />
            )}
            {renderItem()}
          </div>
        )}
        onHide={() => {
          setHistory((prev) => prev.slice(0, 1));
        }}
      >
        <button>
          <ListIcon />
        </button>
      </Tippy>
    </div>
  );
}

export default Popper;
