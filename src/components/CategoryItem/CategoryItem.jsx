import React from "react";
import "./Category.scss";
const CategoryItem = ({ category }) => {
  const { id, imageUrl, title } = category;
  return (
    <div className="categoryCtn" key={id}>
      <div
        className="backgroundImg"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="categoryDescriptionCtn">
        <h2>{title}</h2>
        <p>Shop now</p>
      </div>
    </div>
  );
};

export default CategoryItem;
