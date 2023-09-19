import './DropdownItem.scss'
import { logoutUser } from '../../redux/actions/auth'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const DropdownItem = (props) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogout = () => {
        dispatch(logoutUser())
        navigate("/home")
    }

    return (
        <div>
            <a href={props.href}>
                <li className="dropdownItem">
                    <img src={props.img} />
                    {
                        props.text == 'Logout'? <button onClick={handleLogout} id="logout">{props.text}</button> : <div className="itemName">{props.text}</div>
                    }
                </li>
            </a>
        </div>
    )
}

export default DropdownItem