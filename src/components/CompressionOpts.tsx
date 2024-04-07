const compressionMethods = ["RLE", "LZW"];
const transformations = ["BWT"];

export default function CompressionOpts() {
  return (
    <div>
      <div>
        <h3>Compression Methods</h3>
        <ul>
          {compressionMethods.map((value, index) => (
            <li key={index}>-{value}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Transformations</h3>
        <ul>
          {transformations.map((value, index) => (
            <li key={index}>-{value}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
