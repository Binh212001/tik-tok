import React from "react";
import Header from "./Header";

function HeaderOnlyLayout({ children }) {
  return (
    <div>
      <Header />
      <div className="conatiner">{children}</div>
    </div>
  );
}

export default HeaderOnlyLayout;
