import React from "react";

function copyright() {
  const date = new Date().getFullYear();

  return (
    <div>
      <p className="tc">&copy; Syrus Sakib {date}</p>
    </div>
  );
}

export default copyright;
