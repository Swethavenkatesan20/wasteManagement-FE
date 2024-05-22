import { RouterProvider, createBrowserRouter } from "react-router-dom";
import './App.css'
import Landing from './pages/Landing'
import Register from "./pages/Register";
import Login from "./pages/Login";
import LoginWrapper from "./components/LoginWrapper";
import DashboardWrapper, { loader as userLoader } from "./components/DashboardWrapper";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import { loader as profileLoader } from './pages/Profile';
import HarmfulEffects from "./pages/HarmfulEffects";
import ReviewsPage from "./pages/ReviewsPage";
import Waste from "./pages/Waste";




const router=createBrowserRouter([
  {
    path: '/',
    element: <Landing/>,
    children:[
      {
        index:true,
        element: <LoginWrapper/>
      },
      {
        path: 'register',
        element: <Register/>
      },
      {
        path: 'login',
        element: <Login/>
      }
    ]
  },
  {
    path: 'dashboard',
    element: <DashboardWrapper/>,
    loader: userLoader,
    children: [
      {
        path: '',
        element: <Dashboard/>
        
      },
      {
        path: 'profile',
        element: <Profile />,
        loader: profileLoader
        
      },
      {
        path: 'wastedisposal',
        element: <Waste />
      },
      {
        path: 'effects',
        element: <HarmfulEffects />
      },
      {
        path: 'reviews',
        element: <ReviewsPage /> 
      }
      
    ]
  },

]);

const App=()=>{
  return<RouterProvider router={router}/>
}

export default App;


