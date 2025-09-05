"use client"
import React from "react";
import Layout from "./components/Layout";
import Carousal from "./components/Carousal";
import Window from "./components/Window";
import {StatusContextProvider,PlaceContextProvider} from "./contextStore";






function App() {
  return (
    <StatusContextProvider>
      <PlaceContextProvider>
        <div className="App">
          <Layout>
            <Window/>
            <Carousal/>
          </Layout>
        </div>
      </PlaceContextProvider>
    </StatusContextProvider>
  );
}

export default App;