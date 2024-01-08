import "./App.css";
import { useState } from "react";

function App() {
  const [item, setItem] = useState(15);

  function increment() {
    if (item >= 20) return;
    setItem(item + 1);
  }

  function decrement() {
    if (item <= 0) return;
    setItem(item - 1);
  }
  return (
    <>
      <h2>counter is: {item}</h2>
      <button onClick={increment}>increament</button>
      <br />
      <br />
      <button onClick={decrement}>decrement</button>
    </>
  );
}

export default App;
