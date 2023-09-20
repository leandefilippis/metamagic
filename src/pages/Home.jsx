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
      <img src={Wallpaper} className="root_background" />
        <div className="root_div">
        <a href="/characters/create">
          <p className="root_title">Create</p>
        </a>
          <p className="root_title">Duel</p>
          <p className="root_title">Level Up.</p>
        </div>
    </div>
  )
}