import "../../scss/style.scss"

const BackgroundSelection = ({ backgrounds, characterData, setCharacterData }) => {

  const handleBackgroundSelect = (selected) => {
    setCharacterData({...characterData, background: selected})
  }

  return (
      <div className="background">
        {backgrounds.map((opt) => (
          <button
            key={opt.index}
            onClick={() => handleBackgroundSelect(opt.name)}
            className={`button ${characterData.background === opt.name ? "selected" : ""}`}
          >
            <span>{opt.name}</span>
          </button>
        ))}
      </div>
  );
}

export default BackgroundSelection;
