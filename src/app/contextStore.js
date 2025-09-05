import {createContext,useState} from "react";




const StatusContext = createContext(null);
const PlaceContext = createContext(null);


const StatusContextProvider = ({children})=>{
  const [start, setStart] = useState(false);
  const contextValue = {
    start,
    setStart
  }
  return (
    <StatusContext.Provider value={contextValue}>
        {children}
    </StatusContext.Provider>
  )
}

const PlaceContextProvider = ({children})=>{
    const [currentPlace, setCurrentPlace] = useState(null);
    const contextValue = {
        currentPlace,
        setCurrentPlace
    }
    return (
        <PlaceContext.Provider value={contextValue}>
            {children}
        </PlaceContext.Provider>
    )
}

export {
    StatusContext,StatusContextProvider,PlaceContext,PlaceContextProvider
}

