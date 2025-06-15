import React, { createContext, useState } from 'react'
export const ShowScreen = createContext(false)
const LoaderContext = ({children}) => {
    const [isloader,setisloader] = useState(true)
  return (
    <ShowScreen.Provider value={{isloader, setisloader}}>
        {children}
    </ShowScreen.Provider>
  )
}

export default LoaderContext