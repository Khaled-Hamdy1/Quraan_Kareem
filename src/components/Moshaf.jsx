import { Link, useParams } from "react-router-dom";
import { data, data2, data3 } from "./Data";

function Moshaf() {
  const All = [data, data2, data3];
  const { page } = useParams();
  return (
    <div className="flex flex-wrap gap-3 mb-8">
      {All[page].map((item) => (
        <Link className="link-btn max-w-md flex-wrap" key={item.id} to={`/moshaf/${page}/${item.id}`}>
          <h1>{item.name}</h1>
        </Link>
      ))}
    </div>
  );
}

export default Moshaf;
