import React from 'react'
import{useState} from "react";

const ChoicesPopup = ({ choices, onClose, onSelect }) => {
  const handleSelect = (choice) => {
    onSelect(choice);
    onClose();
  };

  return (
    <div className="popup">
      <div className="popup-content">
        <h2>Select an option:</h2>
        <ul>
          {choices.map((choice) => (
            <li key={choice} onClick={() => handleSelect(choice)}>
              {choice}
            </li>
          ))}
        </ul>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

const Add = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [recipeName, setRecipeName] = useState("");
  const [category, setCategory] = useState("");
  const [type, setType] = useState("");
  const [prepTime, setPrepTime] = useState("");
  const [portion, setPortion] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [difficulty, setdifficulty] = useState("");
  const [amount, setAmount] = useState("");
  const [amountUnit, setAmountUnit] = useState("");
  const [unitOptions, setUnitOptions] = useState(["l", "ml", "kg", "mg", "g", "tablespoon"]);
  const [categoryOptions, setCategoryOptions] = useState([
    "Appetizer and snack",
    "Main dish",
    "Side dish",
    "Everyday cooking",
    "Fruits and vegetables",
    "Seafood",
    "Meat and poultry",
    "World cuisine",
    "Pasta and noodles",
    "Dessert",
    "Drinks",
    "Breakfast and brunch",
    "Salad",
    "Soup",
    "Bread"
  ]);
  const [typeOptions, setTypeOptions] = useState([
    "Default",
    "Egg-free",
    "Gluten-free",
    "Diabetic",
    "No sugar",
    "Red meat free",
    "Vegetarian",
    "Wheat-free"
  ]);

  const handleButtonClick = () => {
    setShowPopup(true);
  };

  const handlePopupClose = () => {
    setShowPopup(false);
  };

  const handleChoiceSelect = (choice, stateSetter) => {
    stateSetter(choice);
  };

  const handleAddIngredient = (name, amount, unit) => {
    const newIngredient = { name, amount, unit };
    setIngredients([...ingredients, newIngredient]);
    setAmount("");
    setAmountUnit("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const recipe = {
      recipeName,
      category,
      type,
      prepTime,
      portion,
      ingredients,
      difficulty
    };
    console.log(recipe); // for keeping track
    setRecipeName("");
    setCategory("");
    setType("");
    setPrepTime("");
    setPortion("");
    setIngredients([]);
    setdifficulty("");
    setAmount("");
    setAmountUnit("");
  };

  return (
    <div className="container">
      <h1>Recipe Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label>
            Recipe Name:
            <input
              type="text"
              value={recipeName}
              onChange={(e) => setRecipeName(e.target.value)}
            />
          </label>
        </div>

        <div className="input-group">
          <label>
            Category:
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
              <option value="">Select Category</option>
              {categoryOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div className="input-group">
          <label>
            Type:
            <select value={type} onChange={(e) => setType(e.target.value)}>
              <option value="">Select Type</option>
              {typeOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div className="input-group">
          <label>
            Prep Time:
            <input
              type="text"
              value={prepTime}
              onChange={(e) => setPrepTime(e.target.value)}
            />
          </label>
        </div>

        <div className="input-group">
          <label>
            Portion:
            <input
              type="number"
              value={portion}
              onChange={(e) => setPortion(e.target.value)}
            />
          </label>
        </div>

        <div className="input-group">
          <label>
            Difficulty:
            <select
              value={difficulty}
              onChange={(e) => setdifficulty(e.target.value)}
            >
              <option value="">Select Difficulty</option>
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </label>
        </div>

        <div className="input-group">
          <label>
            Ingredients:
            <div>
              <input
                type="text"
                placeholder="Ingredient name"
                value={ingredients.name}
                onChange={(e) =>
                  handleChoiceSelect(e.target.value, setIngredients.name)
                }
              />
            </div>
            <div>
              <input
                type="number"
                placeholder="Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
              <select
                value={amountUnit}
                onChange={(e) => setAmountUnit(e.target.value)}
              >
                <option value="">Select Unit</option>
                {unitOptions.map((unit) => (
                  <option key={unit} value={unit}>
                    {unit}
                  </option>
                ))}
              </select>
              <button
                type="button"
                onClick={() =>
                  handleAddIngredient(ingredients.name, amount, amountUnit)
                }
              >
                Add Ingredient
              </button>
            </div>
          </label>
        </div>

        <ul>
          {ingredients.map((ingredient, index) => (
            <li key={index}>
              {ingredient.name} - {ingredient.amount} {ingredient.unit}
            </li>
          ))}
        </ul>

        <button type="submit">Submit Recipe</button>
      </form>
    </div>
  );
};

export default Add
