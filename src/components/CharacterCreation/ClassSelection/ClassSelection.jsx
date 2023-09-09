import { useDispatch } from "react-redux";
import styles from "./ClassSelection.module.css";
import { setClassSpells } from "../../../redux/actions/character";

const ClassSelection = ({ classes, characterData, setCharacterData }) => {
  const dispatch = useDispatch()
  const handleClassSelect = (selected) => {
    setCharacterData({...characterData, class: selected})
  };

  return (
    <div className={styles.classWrapper}>
      <div className={styles.classContainer}>
        {classes.map((opt) => (
          <button
            key={opt.index}
            onClick={() => {
            handleClassSelect(opt.name)
            dispatch(setClassSpells(opt.name.toLowerCase()))
            }}
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
