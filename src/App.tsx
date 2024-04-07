import { useState } from "react";
import "./App.css";
import Input from "./components/Input";
import CompressionOpts from "./components/CompressionOpts";
import CompressionOutput from "./components/CompressionOutput";

function App() {
  const [inputString, setInputString] = useState("");
  return (
    <div className="flex flex-col">
      <header className="py-4">The Compressed Word</header>
      <div className="flex justify-between gap-4">
        <CompressionOpts />
        <Input textValue={inputString} setTextValue={setInputString} />
        <CompressionOutput inputString={inputString} />
      </div>
    </div>
  );
}

export default App;
