import React from "react";

const Category = ({ categories, filteredItem }) => {
  return (
    <>
      {categories.map((category, index) => {
        return (
          <button
            type="button"
            keys={index}
            onClick={() => filteredItem(category)}
          >
            {category}
          </button>
        );
      })}
    </>
  );
};

export default Category;
