interface OperationPipelineProps {
  operations: Array<string>;
}

export default function OperationPipeline({
  operations,
}: OperationPipelineProps) {
  return (
    <div className={"flex flex-col gap-1"}>
      <h1>Operations</h1>
      <ul>
        {operations.map((item, index) => (
          <li key={`pipelineAction${index}`}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
