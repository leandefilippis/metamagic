import "../../scss/style.scss"

const PersonalitySelect = ({ alignments, characterData, setCharacterData }) => {

  const handleAlignmentSelect = (selected) => {
    setCharacterData({...characterData, alignment: selected})
  }

  const handleNameInput = (e) => {
    setCharacterData({...characterData, name: e.target.value})
  }

  return (
    <>
      <form className="alignment_justify-center">
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
      <div className="alignment">
        {alignments?.map((opt) => (
          <button
            key={opt.index}
            onClick={() => handleAlignmentSelect(opt.name)}
            className={`button ${characterData.alignment === opt.name ? "selected" : ""}`}
          >
            <span>{opt.name}</span>
          </button>
        ))}
      </div>
    </>
  );
};

export default PersonalitySelect;
