import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList(props) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }
  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;
    return item.category === selectedCategory;
  });

function handleCategorySubmitted(data){
 addRecord(data)
alert(data)
}

  return (
    <div className="ShoppingList">
      <ItemForm  handleCategorySubmitted={handleCategorySubmitted} items={items}/>
      <Filter onCategoryChange={handleCategoryChange}/>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
        <Item key={item.id} name={item.name} category={item.category}/>))}
      </ul>
    </div>
  );
}
export default ShoppingList;
