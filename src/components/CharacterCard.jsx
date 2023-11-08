import React from 'react'
import homepaper from '../assets/purple.png'
import Wizard from '../assets/logos/Wizard.png'

const CharacterCard = ({ character, modal, setModal, setCurrent, deleteOnClick }) => {
    return (
        <div className="card">
            <div className='card_visual'>
                <img src={homepaper} alt="" className='card_image'/>
                <img src={require(`../assets/logos/${character.class}.png`)} alt="" className="class_logo"/>
            </div>
                <div className='hexagon' />
            <div className='card_info'>
                <span className='character_name'>{character.name}</span>
                <span className='character_info'>{character.race} | {character.class} </span>
            </div>
            <div className='card_actions'>
                <button className='action' onClick={() => {setModal(!modal)
                setCurrent(character)}}> Edit </button>
                <button className='action' onClick={() => deleteOnClick(character)}>Delete</button>
            </div>
        </div>
    )
}

export default CharacterCard