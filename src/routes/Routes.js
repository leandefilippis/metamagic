import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Nav from '../components/Nav/Nav';
import Landing from "../pages/Landing/Landing";
import Home from '../pages/Home/Home';
import Create from '../pages/Create/Create';
import Characters from '../pages/Characters/Characters';
import Login from "../pages/Login/Login";

export const AppRoutes = () => {
    return (
        <Router>
            <Nav />
            <Routes>
                <Route exact path='/' element={<Landing/>} />
                <Route exact path='/home' element={<Home/>} />
                <Route exact path='/create' element={<Create/>} />
                <Route exact path='/characters' element={<Characters/>} />
                <Route exact path='/login' element={<Login/>} />
            </Routes>
        </Router>
    );
}

export default Routes