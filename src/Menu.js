import React from "react";

const Menu = ({ data }) => {
  return (
    <div>
      {data.map((menuItem) => (
        <>
          <p>{menuItem.title}</p>
          <p>{menuItem.price}</p>
          <p>{menuItem.desc}</p>
        </>
      ))}
    </div>
  );
};

export default Menu;
