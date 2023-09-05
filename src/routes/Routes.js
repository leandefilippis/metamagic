import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Nav from '../components/Nav/Nav';
import Landing from "../pages/Landing/Landing";
import Home from '../pages/Home/Home';
import Characters from '../pages/Characters/Characters';
import Profile from "../pages/Profile/Profile";
import { setUser } from '../redux/slices/authSlice';
import { useDispatch } from "react-redux";
import CharacterCreation from "../pages/CharacterCreation/CharacterCreation";

export const AppRoutes = () => {
    const dispatch = useDispatch()

    const storedUser = localStorage.getItem('user');
    if (storedUser) {
        const user = JSON.parse(storedUser); // Dispatch de una acción en Redux para actualizar el estado de autenticación
        dispatch(setUser(user))
    }

    return (
        <Router>
            <Nav />
            <Routes>
                <Route exact path='/' element={<Landing/>} />
                <Route exact path='/home' element={<Home/>} />
                <Route exact path='/characters' element={<Characters/>} />
                <Route exact path='/characters/create' element={<CharacterCreation />} />
                <Route exact path='/profile' element={<Profile/>} />
            </Routes>
        </Router>
    );
}

export default Routes