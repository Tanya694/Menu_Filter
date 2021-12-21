import "./styles.css";
import data from "./data";
import React, { useState } from "react";
import Menu from "./Menu";
import Category from "./Category";

const allCategories = ["all", ...new Set(data.map((item) => item.category))];
console.log(allCategories);

export default function App() {
  const [menuItems, setMenuItems] = useState(data);
  const [categories, setCategories] = useState(allCategories);

  const filteredItem = (category) => {
    if (category === "all") {
      setCategories(allCategories);
      return;
    }
    const newItem = data.filter((item) => item.category === category);
    setMenuItems(newItem);
  };

  return (
    <div className="App">
      <Menu data={menuItems} />
      <Category categories={categories} filteredItem={filteredItem} />
    </div>
  );
}
