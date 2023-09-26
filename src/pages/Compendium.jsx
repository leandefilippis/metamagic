import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Header from '../components/Header';
import '../scss/style.scss'

export default function Compendium() {
  const dispatch = useDispatch();
  useEffect(() => {
  }, [dispatch])
  
  return (
    <div className="root">
      <Header title="Compendium" />
      <div className="root_body">  
      </div>
    </div>
  )
}