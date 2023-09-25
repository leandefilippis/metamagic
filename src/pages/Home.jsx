import React, { useEffect } from 'react'
import { setSpells } from '../redux/actions/character';
import { useDispatch } from 'react-redux'
import Wallpaper from '../assets/homepaper.jpg'
import '../scss/style.scss'

export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
      dispatch(setSpells())
  }, [dispatch])
  
  return (
    <div className="root">
      <div className="root_div">  
      </div>
    </div>
  )
}