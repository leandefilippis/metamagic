import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setClasses } from "../../../redux/actions/character";
import styles from "./ClassSelection.module.css";

const ClassSelection = ({ characterData, setCharacterData }) => {
  const dispatch = useDispatch()
  const classes = useSelector((state) => state.character.classes)

  useEffect(() => {
    dispatch(setClasses())
  }, [dispatch])

  const handleClassSelect = (selected) => {
    setCharacterData({...characterData, class: selected})
  };

  return (
    <div className={styles.classWrapper}>
      <div className={styles.classContainer}>
        {classes.map((opt) => (
          <button
            key={opt.index}
            onClick={() => handleClassSelect(opt.name)}
            className={characterData.class === opt.name ? styles.selected : styles.button}
          >
            {opt.name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default ClassSelection;
