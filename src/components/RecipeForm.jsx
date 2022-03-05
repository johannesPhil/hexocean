import React, { useState } from "react";
import { useEffect } from "react";

const RecipeForm = () => {
  const initialValues = {
    name: "",
    type: "",
    hours: "",
    minutes: "",
    seconds: "",
    diameter: "",
    spiciness: 1,
    pizzaSlice: "",
    breadSlice: "",
  };

  const [values, setValues] = useState(initialValues);
  const [error, setError] = useState("");
  const [response, setResponse] = useState("");

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    const recipeData = {};

    if (values.name !== "") {
      recipeData.name = values.name;

      //convert hours, minutes,seconds values to 00:00:00 format

      const durationValues = [values.hours, values.minutes, values.seconds];
      const durationString = durationValues.map((value) => {
        return value.toString().padStart(2, 0);
      });

      if (durationString.join(":") === "00:00:00") {
        setError("Please enter a valid duration value");
        return;
      }

      recipeData.preparation_time = durationString.join(":");

      if (values.type === "pizza") {
        recipeData.type = values.type;
        if (values.pizzaSlice === "") {
          setError("Please enter number of pizza slices");
          return;
        } else if (values.diameter === "") {
          setError("Please enter a value for diameter of pizza");
          return;
        } else {
          recipeData.no_of_slices = parseInt(values.pizzaSlice);
          recipeData.diameter = parseInt(values.diameter);
          await sendRecipe(recipeData);
        }
      } else if (values.type === "soup") {
        recipeData.type = values.type;
        if (values.spiciness === "") {
          setError("Please specify the spiciness level ");
          return;
        }
        recipeData.spiciness_scale = parseInt(values.spiciness);
        await sendRecipe(recipeData);
      } else if (values.type === "sandwich") {
        recipeData.type = values.type;
        if (values.breadSlice === "") {
          setError("Please enter number of bread slices");
          return;
        }
        recipeData.slices_of_bread = parseInt(values.breadSlice);
        await sendRecipe(recipeData);
      }
      console.log(recipeData);
    }
  };

  const sendRecipe = async (recipeData) => {
    try {
      fetch("https://frosty-wood-6558.getsandbox.com:443/dishes", {
        method: "POST",
        mode: "cors",
        body: JSON.stringify(recipeData),
        headers: {
          "Content-type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          if (data.id) {
            setResponse("Recipe successfully submitted");
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect(() => {}, [error]);

  return (
    <div className="recipeForm  ">
      <form onSubmit={submitForm}>
        <h1 className="recipeForm__header">Cook Book</h1>
        <h3 className="recipeForm__subtitle">
          Share Your Mouth Watering Recipe!
        </h3>
        <div className="form-group">
          <label htmlFor="name">Dish Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
            value={values.name}
            onChange={changeHandler}
          />
        </div>
        <div className="form-group">
          <label htmlFor="">Duration(hh:mm:ss)</label>
          <div className="duration">
            <input
              type="number"
              name="hours"
              id="hours"
              value={values.hours}
              placeholder="Hours"
              min={0}
              max={24}
              onChange={changeHandler}
            />
            :
            <input
              type="number"
              name="minutes"
              id="minutes"
              placeholder="Minutes"
              min={0}
              max={59}
              value={values.minutes}
              onChange={changeHandler}
            />
            :
            <input
              type="number"
              name="seconds"
              id="seconds"
              placeholder="Seconds"
              min={0}
              max={59}
              value={values.seconds}
              onChange={changeHandler}
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="type">Dish Type</label>
          <select
            name="type"
            id="type"
            required
            value={values.type}
            onChange={changeHandler}
          >
            <option value="" disabled>
              Select Dish
            </option>
            <option value="pizza">Pizza</option>
            <option value="soup">Soup</option>
            <option value="sandwich">Sandwich</option>
          </select>
        </div>

        {values.type === "pizza" && (
          <>
            <div className="form-group">
              <label htmlFor="slices">Slices</label>
              <input
                type="number"
                name="pizzaSlice"
                id="pizzaSlice"
                min={1}
                value={values.pizzaSlice}
                placeholder="Slices of Pizza"
                onChange={changeHandler}
              />
            </div>
            <div className="form-group">
              <label htmlFor="diameter">Diameter (Inches)</label>
              <input
                type="number"
                name="diameter"
                id="diameter"
                step={0.1}
                min={1}
                placeholder="Pizza Diameter"
                value={values.diameter}
                onChange={changeHandler}
              />
            </div>
          </>
        )}
        {values.type === "soup" && (
          <>
            <div className="form-group slider-container">
              <label htmlFor="spiciness">Spiciness Scale</label>
              <span>{values.spiciness}</span>
              <div className="slider-container">
                <input
                  className="slider"
                  type="range"
                  name="spiciness"
                  id="spiciness"
                  min={1}
                  max={10}
                  required
                  value={values.spiciness}
                  onChange={changeHandler}
                />
              </div>
            </div>
          </>
        )}
        {values.type === "sandwich" && (
          <>
            <div className="form-group">
              <label htmlFor="bread_slice">Number of bread slice</label>
              <input
                type="number"
                name="breadSlice"
                id="bread_slice"
                min={1}
                value={values.breadSlice}
                placeholder="Slices of Bread"
                onChange={changeHandler}
              />
            </div>
          </>
        )}
        {error && <div className="error">{error}</div>}
        {response && <p className="response">{response}</p>}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default RecipeForm;
