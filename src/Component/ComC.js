import React, { useContext } from 'react'
import { Data } from './ComA';

const ComC = () => {
    const context = useContext(Data);
  return (
    <h1>Hello how are you {context}</h1>
  )
}

export default ComC