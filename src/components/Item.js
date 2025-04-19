import React, {useState} from "react";

function Item({ name, category }) {

  const [isInside, setIsInside] = useState(false)
  const cartClass = isInside ? "InCart" : "OutCart"
   
  function handleClick() {
    setIsInside(prev => !prev)
  }

  return (
    <li className={isInside ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleClick}>{isInside ? "Remove From Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
