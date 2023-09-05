import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBackgrounds } from "../../../redux/actions/character";
import styles from "./BackgroundSelection.module.css";

const BackgroundSelection = ({ characterData, setCharacterData }) => {
  const dispatch = useDispatch()
  const backgrounds = useSelector((state) => state.character.backgrounds)

  useEffect(() => {
    dispatch(setBackgrounds())
  }, [dispatch])

  const handleBackgroundSelect = (selected) => {
    setCharacterData({...characterData, background: selected})
  }

  return (
    <div className={styles.classWrapper}>
      <div className={styles.backgroundContainer}>
        {backgrounds.map((opt) => (
          <button
            key={opt.index}
            onClick={() => handleBackgroundSelect(opt.name)}
            className={characterData.background === opt.name ? styles.selected : styles.button}
          >
            {opt.name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default BackgroundSelection;
