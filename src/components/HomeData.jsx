import data from "./Data";
import data2 from "./Data";
import data3 from "./Data";

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
