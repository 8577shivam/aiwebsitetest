import React from "react";

const Menubar = (props) => {
  const { navmenudata } = props;
  return (
    <div className={`menuitembox`}>
      <ul>
        {navmenudata.map((i) => {
          return <li key={i.title}>{i.title}</li>;
        })}
      </ul>
    </div>
  );
};

export default Menubar;
