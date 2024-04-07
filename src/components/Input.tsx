import React from "react";

interface InputProps {
  textValue: string;
  setTextValue: React.Dispatch<React.SetStateAction<string>>;
}

export default function Input({ textValue, setTextValue }: InputProps) {
  return (
    <div className="flex basis-2/5 flex-col">
      <h2>Compression String</h2>
      <input
        type="text"
        placeholder="Enter text you wish to compress"
        value={textValue}
        onChange={(value) => setTextValue(() => value.target.value)}
      />
    </div>
  );
}
