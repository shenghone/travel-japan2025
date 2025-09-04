"use client"
import React, { useState,useEffect,createContext } from "react";
import Layout from "./components/Layout";
import Carousal from "./components/Carousal";
import Window from "./components/Window";








export const StatusContext = createContext(null);
export const PlaceContext = createContext(null);

function App() {
  const [start, setStart] = useState(false);
  const [currentPlace, setCurrentPlace] = useState(null);
  const [progress, setProgress] = useState(0);
  //console.log(`The progress is at: ${progress}`)
  useEffect(() => {
    if (Math.round(progress * 100) === 100) {
      setStart(true);
    }
  }, [progress]);
  return (
    <StatusContext.Provider value={{ start, setStart }}>
      <PlaceContext.Provider value={{ currentPlace, setCurrentPlace }}>
        <div className="App">
          <Layout>
            <Window />
            <Carousal setProgress={setProgress} progress={progress}  />
          </Layout>
        </div>
      </PlaceContext.Provider>
    </StatusContext.Provider>
  );
}

export default App;