import { useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [Pages] = useState(["مَصَاحِف مُرَتَّلَة", "مَصَاحِف مُعَلِّمِه", "مَصَاحِف الْحَرَمَيْن"]);

  return (
    <ul className="w-full h-[100vh] item-center flex-col bg-blend-screen bg-no-repeat">
      {Pages.map((page, index) => (
        <Link
          key={index}
          className="link-btn max-w-[600px] w-8/12"
          // to={`/data/${index}`}
          to={`/moshaf/${index}`}
        >
          {page}
        </Link>
      ))}
    </ul>
  );
}

export default Home;
