import classNames from "classnames/bind";
import React, { useState } from "react";
import style from "./search.module.scss";
import SearchIcon from "@mui/icons-material/Search";
const cx = classNames.bind(style);
function Search() {
  const [key, setKey] = useState("");

  const handelInputSearch = (e) => {
    setKey(e.target.value);
  };
  const handelSearch = (key) => {
    console.log("🚀 ~ file: Search.jsx ~ line 13 ~ handelSearch ~ key", key);
  };
  return (
    <form onSubmit={handelSearch(key)} className={cx("search")}>
      <input
        type="text"
        placeholder="Search accounts and videos "
        onChange={handelInputSearch}
      />
      <div className={cx("icon")} type="submit">
        <SearchIcon fontSize="large" />
      </div>
    </form>
  );
}

export default Search;
