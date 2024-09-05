import React, { useState } from "react";

export const Selected=() => {
  const [selectedOption, setSelectedOption] = useState("option 1");
  return (
    <div>
      <select
        value={selectedOption}
        onChange={(e) => {
          setSelectedOption(e.target.value);
        }}
      >
        <option value={"option 1"}>JaveScript</option>
        <option value={"option 2"}>React js</option>
        <option value={"option 3"}>python</option>
      </select>
      <p>Selected: {selectedOption}</p>
    </div>
  );
}


