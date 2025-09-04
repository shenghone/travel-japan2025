"use client"
import React, { useState,useEffect } from "react";
import Layout from "./components/Layout";
import Carousal from "./components/Carousal";
import Window from "./components/Window";
import {StatusContext,PlaceContext} from "./contextStore";






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
    <StatusContext value={{ start, setStart }}>
      <PlaceContext value={{ currentPlace, setCurrentPlace }}>
        <div className="App">
          <Layout>
            <Window />
            <Carousal setProgress={setProgress} progress={progress}  />
          </Layout>
        </div>
      </PlaceContext>
    </StatusContext>
  );
}

export default App;