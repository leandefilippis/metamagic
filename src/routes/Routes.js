import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Home from '../pages/Home';
import Characters from '../pages/Characters';
import CharacterCreation from "../pages/CharacterCreation";
import Profile from "../pages/Profile";
import Compendium from "../pages/Compendium";
import Roll from "../pages/Roll";
import { setUser } from '../redux/slices/authSlice';
import { useDispatch } from "react-redux";

export const AppRoutes = () => {
    const dispatch = useDispatch()

    const storedUser = localStorage.getItem('user');
    if (storedUser) {
        const user = JSON.parse(storedUser); // Dispatch de una acción en Redux para actualizar el estado de autenticación
        dispatch(setUser(user))
    }

    return (
        <Router>
            <div className="app">
                <Sidebar />
                <Routes>
                    <Route exact path='/' element={<Home/>} />
                    <Route exact path='/characters' element={<Characters/>} />
                    <Route exact path='/characters/create' element={<CharacterCreation />} />
                    <Route exact path='/profile' element={<Profile/>} />
                    <Route exact path='/compendium' element={<Compendium/>} />
                    <Route exact path='/roll' element={<Roll/>} />
                </Routes>
            </div>
        </Router>
    );
}

export default AppRoutes