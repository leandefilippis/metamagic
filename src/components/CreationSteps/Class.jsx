import { useDispatch } from "react-redux"
import { setClassSpells } from "../../redux/actions/character"
import "../../scss/style.scss"

const ClassSelection = ({ classes, characterData, setCharacterData }) => {
  const dispatch = useDispatch()
  const handleClassSelect = (selected) => {
    setCharacterData({...characterData, class: selected})
  };

  return (
      <div className="dndClass">
        {classes?.map((opt) => (
          <button
            key={opt.name}
            onClick={() => {
              handleClassSelect(opt.name)
              dispatch(setClassSpells(opt.name.toLowerCase()))
            }}
            className={`button ${characterData.class === opt.name ? "selected" : ""}`}
          >
            <img src={require(`../../assets/logos/${opt.name}.png`)} alt="" className="dndClass_logo"/>
            <span>{opt.name}</span>
          </button>
        ))}
      </div>
  );
}

export default ClassSelection;
