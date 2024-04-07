interface CompressionOutputProps {
  inputString: string;
}

export default function CompressionOutput({
  inputString,
}: CompressionOutputProps) {
  return (
    <div>
      <h2>Compressed Output</h2>
      <div>{GetRLE(inputString)}</div>
    </div>
  );
}

function GetRLE(input: string): string {
  // its not right
  let prevChar: string | undefined = undefined;
  let currCount: number = 1;
  let retString: string = "";
  for (const character of input) {
    if (character === prevChar) {
      ++currCount;
    } else {
      if (prevChar !== undefined) {
        retString += currCount;
        retString += prevChar;
      }
      prevChar = character;
      currCount = 1;
    }
  }
  if (prevChar !== undefined) {
    retString += currCount;
    retString += prevChar;
  }
  return retString;
}
