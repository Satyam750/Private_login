import React from 'react'
import { Navigate } from 'react-router-dom'
import { Use_r_state } from '../context/Store'

const Private = ({children}) => {
    const { log } = Use_r_state()
  return  log ? children : <Navigate to="/login"/>
}

export default Private