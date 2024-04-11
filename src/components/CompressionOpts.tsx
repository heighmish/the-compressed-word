import React from "react";

const compressionMethods = ["RLE", "LZW"];
const transformations = ["BWT", "MTF"];

interface CompressionOptsProps {
  operations: Array<string>;
  setOperations: React.Dispatch<React.SetStateAction<string[]>>;
}

export default function CompressionOpts({
  operations,
  setOperations,
}: CompressionOptsProps) {
  const clickOptionHandler = (ev: React.MouseEvent<HTMLButtonElement>) => {
    const eventValue = (ev.target as HTMLButtonElement).value;
    if (operations.includes(eventValue) || operations.length > 5) return;
    setOperations((curr) => [...curr, eventValue]);
  };

  return (
    <div>
      <div>
        <h3>Compression Methods</h3>
        <div className="flex flex-col gap-1">
          {compressionMethods.map((value, index) => (
            <button
              key={`compressionOpt${index}`}
              onClick={clickOptionHandler}
              value={value}
            >
              {value}
            </button>
          ))}
        </div>
      </div>
      <div>
        <h3>Transformations</h3>
        <div className="flex flex-col gap-1">
          {transformations.map((value, index) => (
            <button
              onClick={clickOptionHandler}
              key={`transformOpt${index}`}
              value={value}
            >
              {value}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
