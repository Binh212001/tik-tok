import React from "react";
import Btn from "../btn/Btn";

function MenuItem({ data, onClick }) {
  return <Btn onClick={() => onClick()}>{data.title}</Btn>;
}

export default MenuItem;
