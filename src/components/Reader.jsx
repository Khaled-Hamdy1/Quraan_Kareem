import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Reader() {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api3.islamhouse.com/v3/paV29H2gm56kvLPy/quran/get-recitation/${id}/ar/json`
        );
        if (response.ok) {
          const data = await response.json();
          setData(data);
        } else {
          console.error("Failed to fetch data");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {data &&
        data.attachments.map((item, index) => (
          <div key={index}>
            <div className="link-btn max-w-md flex-wrap">
              <h1>{item.title}</h1>
            </div>
            <audio controls src={item.url}></audio>
          </div>
        ))}
    </div>
  );
}

export default Reader;
