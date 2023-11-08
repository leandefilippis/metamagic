import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Header from '../components/Header';
import apothecary from '../assets/apothecary.png'
import '../scss/style.scss'

export default function Compendium() {
  const dispatch = useDispatch();
  useEffect(() => {
  }, [dispatch])
  
  return (
    <div className="root">
      <Header title="Compendium" />
      <img src={apothecary} alt='' className='wallpaper' />
      <div className="compendium_container">
        <div className="test">
          
        </div>
      </div>
    </div>
  )
}