import React,{useState} from "react";
// import { v4 as uuid } from "uuid";

function ItemForm(props) {
  let [name,setName]=useState("");
  let [category,setCategory]=useState("");

  function submitItem(event){
    event.preventDefault();
    const formData = {
      name: name,
      category: category,
    };
    const dataArray = [...props.items, formData];
    // setSubmittedData(dataArray);
    props.handleCategorySubmitted(dataArray)
  }


  return (
    <form className="NewItem"  onSubmit={submitItem} >
      <label>
        Name:
        <input type="text" value={name} onChange={() =>setName()} name="name" />
      </label>
      <label>
        Category:
        <select name="category" value={category} onChange={() =>setCategory()}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit"  >Add to List</button>
    </form>
  );
}

export default ItemForm;
