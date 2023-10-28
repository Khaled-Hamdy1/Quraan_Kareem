import { useAudioContext } from "../contexts/AudioContextProvider";

function Audio() {
  const { audioURL } = useAudioContext();

  return <audio autoPlay controls src={audioURL??""} id="sura"></audio>;
}

export default Audio;
