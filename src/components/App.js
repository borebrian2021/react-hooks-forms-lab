import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import Header from "./Header";
import itemData from "../data/items";

function App() {
  const [items, setItems] = useState(itemData);
  const [isDarkMode, setIsDarkMode] = useState(false);


function addRecord(newData){
// let newItems=[...items ,newData ]
// setItems(newItems);
alert(newData)
}
  function handleDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
}
  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClick} />
      <ShoppingList items={items} addRecord={addRecord} />
    </div>
  );
}

export default App;
