import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAlignments } from "../../../redux/actions/character";
import styles from "./PersonalitySelect.module.css";

const PersonalitySelect = ({ characterData, setCharacterData }) => {
  const dispatch = useDispatch()
  const alignments = useSelector((state) => state.character.alignments)

  useEffect(() => {
    dispatch(setAlignments())
  }, [dispatch])

  const handleAlignmentSelect = (selected) => {
    setCharacterData({...characterData, alignment: selected})
  }

  const handleNameInput = (e) => {
    setCharacterData({...characterData, name: e.target.value})
  }

  return (
    <>
      <form className={styles.wrapper}>
        <input
          type="text"
          name="name"
          value={characterData.name}
          onChange={(e) => {
            handleNameInput(e)
          }}
          autoComplete="off"
          placeholder="Name"
        />
      </form>
      <div className={styles.alignmentContainer}>
        {alignments?.map((opt) => (
          <button
            key={opt.index}
            onClick={() => handleAlignmentSelect(opt.name)}
            className={
              characterData.alignment === opt.name ? styles.selected : styles.button
            }
          >
            {opt.name}
          </button>
        ))}
      </div>
    </>
  );
};

export default PersonalitySelect;
