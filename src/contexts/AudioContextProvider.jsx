/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";
export const AudioContext = createContext();

export default function AudioContextProvider(props) {
  const [audioURL,setAudioURL] = useState("");
  return (
    <AudioContext.Provider value={{audioURL,setAudioURL}}>
      {props.children}
    </AudioContext.Provider>
  )
}

export const useAudioContext = () => useContext(AudioContext);