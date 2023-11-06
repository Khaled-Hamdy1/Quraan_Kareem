import { useAudioContext } from "../contexts/AudioContextProvider";

function Audio() {
  const { audioURL } = useAudioContext();

  return <audio autoPlay controls src={audioURL??""} id="sura" className="fixed bottom-0 w-full"></audio>;
}

export default Audio;
