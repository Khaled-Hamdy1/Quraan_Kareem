import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAudioContext } from "../contexts/AudioContextProvider";

function Reader() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const { setAudioURL } = useAudioContext();
  const playAudio = (url) => {
    const audio = document.getElementById("sura");
    setAudioURL(url);
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  };

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
    <div className="gap-4 flex-wrap item-center mb-8">
      {data &&
        data.attachments.map((item, index) => (
          <div className="link-btn max-w-md flex-wrap" key={index}>
            <h1>{item.title}</h1>
            <button
              className="bg-blue-500 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50
                text-white text-sm py-2 px-4 rounded-full shadow-lg"
              onClick={() => playAudio(item.url)}
            >
              Play
            </button>
          </div>
        ))}
    </div>
  );
}

export default Reader;
