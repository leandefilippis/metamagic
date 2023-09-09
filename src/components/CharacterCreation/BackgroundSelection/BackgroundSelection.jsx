import styles from "./BackgroundSelection.module.css";

const BackgroundSelection = ({ backgrounds, characterData, setCharacterData }) => {

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
