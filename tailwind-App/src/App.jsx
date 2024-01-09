import "./App.css";
import Card from "./Card";

function App() {
  return (
    <>
      <h1 className="bg-green-500 text-black mb-4">tailwind test</h1>
      <Card username="ABC" btnText="Click me" />
      <br />
      <Card username="XYZ" btnText="Visit me" />
    </>
  );
}

export default App;
