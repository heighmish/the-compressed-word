import { useState } from "react";
import "./App.css";
import Input from "./components/Input";
import CompressionOpts from "./components/CompressionOpts";
import CompressionOutput from "./components/CompressionOutput";
import OperationPipeline from "./components/OperationPipeline";

function App() {
  const [inputString, setInputString] = useState("");
  const [operations, setOperations] = useState<Array<string>>([]);
  return (
    <div className="flex flex-col">
      <header className="py-4">The Compressed Word</header>
      <div className="flex justify-between gap-4">
        <CompressionOpts
          operations={operations}
          setOperations={setOperations}
        />
        <OperationPipeline operations={operations} />
        <Input textValue={inputString} setTextValue={setInputString} />
        <CompressionOutput inputString={inputString} />
      </div>
    </div>
  );
}

export default App;
