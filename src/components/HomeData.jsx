import data from "./Data";

function MyComponent() {
  return (
    <div>
      {data.map((item, index) => (
        <div key={index}>
          <h1>{item.name}</h1>
          <p>{item.age}</p>
        </div>
      ))}
    </div>
  );
}

export default MyComponent;
