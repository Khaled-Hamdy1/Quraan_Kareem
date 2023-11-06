import { Link, useParams } from "react-router-dom";
import { data, data2, data3 } from "./Data";

function Moshaf() {
  const All = [data, data2, data3];
  const { page } = useParams();
  return (
    <div className="flex flex-wrap gap-8 mb-8">
      {All[page].map((item) => (
        <Link className="link-btn w-1/4 min-w-[300px] m-auto !h-16" key={item.id} to={`/moshaf/${page}/${item.id}`}>
          <h1>{item.name}</h1>
        </Link>
      ))}
    </div>
  );
}

export default Moshaf;
