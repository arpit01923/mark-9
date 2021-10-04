import React, { useState } from "react";
import "./styles.css";

var foodMenu = {
  chinese: [
    {
      name: "Chowmein",
      description:
        "A Chinese dish consisting of noodles fried with chicken, pork, beef, or fish, and a variety of vegetables",
      rating: "🌟 4/5"
    },
    {
      name: "Momos",
      description:
        "Momo is a type of steamed dumpling with some form of filling",
      rating: "🌟 4.5/5"
    },
    {
      name: "Hot and Sour Soup",
      description:
        " Hot and Sour soup is a spicy and hot soup made with mixed fresh vegetables, mushrooms, spices and soy sauce.",
      rating: "🌟 3.5/5"
    }
  ],

  indian: [
    {
      name: "Chicken Tikka",
      description:
        "Chicken tikka masala, dish consisting of marinated boneless chicken pieces that are traditionally cooked in a tandoor and then served in a subtly spiced tomato-cream sauce.",
      rating: "🌟 4.5/5"
    },
    {
      name: "Rajma Chawal",
      description:
        "Punjabi rajma chawal delicacy, cooked kidney beans is excitingly flavoured with a wide array of ingredients ranging from ginger etc.",
      rating: "🌟 5/5"
    },
    {
      name: "Tandoori Chicken",
      description:
        "A dish of roasted chicken marinated in yogurt and generously spiced, giving the meat its trademark red colour.",
      rating: "🌟 4/5"
    }
  ],
  italian: [
    {
      name: "Panzenella",
      description:
        " A chopped salad of soaked stale bread, onions and tomatoes that is popular in the summer",
      rating: "🌟 3/5"
    },
    {
      name: "Margherita Pizza",
      description:
        " Its ingredients representing the colours of the Italian flag. These ingredients include red tomato sauce, white mozzarella and fresh green basil.",
      rating: "🌟 4.5/5"
    },
    {
      name: "Bruschetta",
      description:
        "Thick slices of bread grilled, rubbed with garlic, drizzled with olive oil, often topped with tomatoes and herbs, and usually served as an appetizer",
      rating: "🌟 3.5/5"
    }
  ]
};
export default function App() {
  var [food, setfood] = useState("italian");

  function foodClickHandler(event) {
    setfood(event);
  }

  return (
    <div className="App">
      <h1>Food</h1>
      <p Style={{ fontSize: "smaller" }}>
        Checkout my favourite food. Select a menu to get started 🍟 🥪
      </p>

      <div style={{ textAlign: "left" }}>
        {Object.keys(foodMenu).map((event) => (
          <button
            onClick={() => foodClickHandler(event)}
            style={{
              border: "1px solid black",
              padding: "0.7rem",
              fontSize: "1rem",
              margin: "0.5rem",
              borderRadius: "10px"
            }}
          >
            {event}
          </button>
        ))}
      </div>
      <hr />

      <ul style={{ textAlign: "left" }}>
        {foodMenu[food].map((item) => (
          <li
            //key={item.name}
            style={{
              borderRadius: "0.5rem",
              margin: "1rem",
              border: "0.5px solid black",
              padding: "1rem",
              width: "400px",
              listStyle: "none"
            }}
          >
            {" "}
            <div style={{ fontSize: "larger" }}> {item.name} </div>
            <div style={{ fontSize: "medium" }}> {item.description} </div>
            <div style={{ fontSize: "smaller" }}> {item.rating} </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
