import styles from "./RaceSelection.module.css";

const RaceSelection = ({ races, characterData, setCharacterData }) => {

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
