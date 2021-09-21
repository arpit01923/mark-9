import React, { useState } from "react";
import "./styles.css";

var foodMenu = {
  chinese: [
    { name: "Chowmein", rating: "4/5" },
    { name: "Momos", rating: "4.5/5" },
    { name: "Hot and Sour Soup", rating: "3.5/5" }
  ],

  indian: [
    { name: "Tikka", rating: "4.5/5" },
    { name: "Rajma Chawal", rating: "5/5" },
    { name: "Tandoori", rating: "4/5" }
  ],
  italian: [
    { name: "Panzenella", rating: "3/5" },
    { name: "Margherita Pizza", rating: "4.5/5" },
    { name: "Bruschetta", rating: "3.5/5" }
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
        Checkout my favourite food. Select a menu to get started
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
            <div style={{ fontSize: "smaller" }}> {item.rating} </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
