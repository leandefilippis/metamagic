import React, { useEffect } from 'react'
import { setSpells } from '../redux/actions/character';
import { useDispatch } from 'react-redux'
import Header from '../components/Header';
import Wallpaper from '../assets/homepaper.jpg'
import '../scss/style.scss'

export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
      dispatch(setSpells())
  }, [dispatch])
  
  return (
    <div className="root">
      <Header title="Metamagic" />
      <div className="home_container">  
      </div>
    </div>
  )
}