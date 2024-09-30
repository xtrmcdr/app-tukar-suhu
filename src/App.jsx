import { useState } from "react";
import "./App.css";

function App() {
  let [convert, setConvert] = useState(0);

  const suhu = document.getElementById("suhu");
  const kepadaFahrenheit = document.getElementById("kepadaFahrenheit");
  const kepadaCelcius = document.getElementById("kepadaCelcius");
  const result = document.getElementById("result");
  let temp;

  function onOptionChange(e) {
    setConvert(e.target.value);
  }

  function tukar() {
    if (convert === "kepadaFahrenheit") {
      temp = Number(suhu.value);
      temp = (temp * 9) / 5 + 32;
      result.textContent = temp.toFixed(1) + "F";
    } else if (convert === "kepadaCelcius") {
      temp = Number(suhu.value);
      temp = (temp - 32) * (5 / 9);
      result.textContent = temp.toFixed(1) + "°C";
    } else {
      result.textContent = "Sila letak jumlah..";
    }
  }

  return (
    <>
      <div id="borang">
        <form>
          <h1>App Penukar Suhu</h1>
          <input type="number" id="suhu" />
          <br />

          <input
            type="radio"
            id="kepadaFahrenheit"
            name="unit"
            value="kepadaFahrenheit"
            onChange={onOptionChange}
          />
          <label htmlFor="kepadaFahrenheit"> Celcius → Fahrenheit</label>
          <br />
          <input
            type="radio"
            id="kepadaCelcius"
            name="unit"
            value="kepadaCelcius"
            onChange={onOptionChange}
          />
          <label htmlFor="kepadaCelcius"> Fahrenheit → Celcius</label>
          <br />
        </form>
        <button onClick={() => tukar()}>⚡️Tukar!</button>
        <p id="result"></p>
        <p className="copy">dibina dengan reactJS⚛︎ oleh shafiq ramli.</p>
        <p className="copy">kod asal oleh bro code.</p>
      </div>
    </>
  );
}

export default App;
