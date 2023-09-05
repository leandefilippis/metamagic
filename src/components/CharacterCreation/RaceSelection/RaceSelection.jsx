import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setRaces } from "../../../redux/actions/character";
import styles from "./RaceSelection.module.css";

const RaceSelection = ({ characterData, setCharacterData }) => {
  const dispatch = useDispatch()
  const races = useSelector((state) => state.character.races)

  useEffect(() => {
    dispatch(setRaces())
  }, [dispatch])

  const handleRaceSelect = (selected) => {
    setCharacterData({...characterData, race: selected})
  }

  return (
    <div className={styles.raceWrapper}>
      <div className={styles.raceContainer}>
        {races.map((opt) => (
          <button
            key={opt.index}
            onClick={() => handleRaceSelect(opt.name)}
            className={characterData.race === opt.name ? styles.selected : styles.button}
          >
            {opt.name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default RaceSelection;
