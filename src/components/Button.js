import React, { useState } from "react";
import "../styles/button.css";

export default function Button() {
  const [Value1, setValue] = useState("");

  return (
    <div className="continerCalculator">
      <input value={Value1} className="inputPresentNumber" />
      <div className="shapePosition">
        <input
          type="button"
          value="1"
          onClick={(e) => setValue(Value1 + e.target.value)}
        />
        <input
          type="button"
          value="2"
          onClick={(e) => setValue(Value1 + e.target.value)}
        />
        <input
          type="button"
          value="3"
          onClick={(e) => setValue(Value1 + e.target.value)}
        />
        <input
          type="button"
          value="4"
          onClick={(e) => setValue(Value1 + e.target.value)}
        />
        <input
          type="button"
          value="5"
          onClick={(e) => setValue(Value1 + e.target.value)}
        />
        <input
          type="button"
          value="6"
          onClick={(e) => setValue(Value1 + e.target.value)}
        />
        <input
          type="button"
          value="7"
          onClick={(e) => setValue(Value1 + e.target.value)}
        />
        <input
          type="button"
          value="8"
          onClick={(e) => setValue(Value1 + e.target.value)}
        />
        <input
          type="button"
          value="9"
          onClick={(e) => setValue(Value1 + e.target.value)}
        />
        <input
          type="button"
          value="."
          onClick={(e) => setValue(Value1 + e.target.value)}
        />
        <input
          type="button"
          value="/"
          onClick={(e) => setValue(Value1 + e.target.value)}
        />
        <input
          type="button"
          value="*"
          onClick={(e) => setValue(Value1 + e.target.value)}
        />
        <input
          type="button"
          value="+"
          onClick={(e) => setValue(Value1 + e.target.value)}
        />
        <input
          type="button"
          value="-"
          onClick={(e) => setValue(Value1 + e.target.value)}
        />
        <input type="button" value="AC" onClick={(e) => setValue("")} />

        <input
          type="button"
          value="="
          onClick={(e) => setValue(eval(Value1))}
        />
      </div>
    </div>
  );
}
