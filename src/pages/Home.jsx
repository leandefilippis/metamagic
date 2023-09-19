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
    <div className="home">
      <img src={Wallpaper} className="home_background" />
      <div className="home_wrapper">
        <div className="home_div">
        <a href="/characters/create">
          <p className="home_title">Create</p>
        </a>
          <p className="home_title">Duel</p>
          <p className="home_title">Level Up.</p>
        </div>
      </div>
    </div>
  )
}