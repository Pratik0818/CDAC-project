import React from 'react'
import { createContext } from 'react'
import ComB from './ComB'

const Data = createContext();
const ComA = () => {
  return (
    <Data.Provider value={"Pratik Jadhav"}>
    <ComB />
    </Data.Provider>
    
  )
}

export default ComA
export {Data};