import "../../scss/style.scss"

const RaceSelection = ({ races, characterData, setCharacterData }) => {

  const handleRaceSelect = (selected) => {
    setCharacterData({...characterData, race: selected})
  }

  return (
      <div className="race">
        {races.map((opt) => (
          <button
            key={opt.index}
            onClick={() => handleRaceSelect(opt.name)}
            className={`button ${characterData.race === opt.name ? "selected" : ""}`}
          >
            <span>{opt.name}</span>
          </button>
        ))}
      </div>
  );
}

export default RaceSelection;
