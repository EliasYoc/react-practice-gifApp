import { useState } from "react";
import PropTypes from "prop-types";
const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.length === 0) return;
    setCategories((categ) => [inputValue, ...categ]);
    setInputValue("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <p>{inputValue}</p>
      <input type="text" value={inputValue} onChange={handleInputChange} />
    </form>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};
export default AddCategory;
