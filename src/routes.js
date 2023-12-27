import {createBrowserRouter} from 'react-router-dom';
import App from './App';
import CreateBoard from './components/CreateBoard/CreateBoard';
import Header from './components/Header/Header';
import CreatePage from './pages/CreatePage/CreatePage';
import HomePage from './pages/HomePage/HomePage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import SignupPage from './pages/SignupPage/SignupPage';
import TodayPage from './pages/TodayPage/TodayPage';


export const routes = createBrowserRouter([
    { 
        path: "/", 
        Component : App,
        children : [
            { path: "", Component : SignupPage},
            { path: "home", Component : HomePage},
            { path: "today", Component : TodayPage},
            { path: "createPin", Component : CreatePage},
            { path: "profile", Component : ProfilePage},
            { path: "createBoard", Component : CreateBoard},
            { path: "headerheaderhearder", Component : Header},
        ]}
  ]);