import styles from './DropdownItem.module.css'
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
                <li className={styles.dropdownItem}>
                    <img src={props.img} />
                    {
                        props.text == 'Logout'? <button onClick={handleLogout}>{props.text}</button> : <a>{props.text}</a>
                    }
                </li>
            </a>
        </div>
    )
}

export default DropdownItem