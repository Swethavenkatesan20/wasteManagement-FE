import { RouterProvider, createBrowserRouter } from "react-router-dom";
import './App.css'
import Landing from './pages/Landing'
import Register from "./pages/Register";
import Login from "./pages/Login";
import LoginWrapper from "./components/LoginWrapper";



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
    
    
  }

]);

const App=()=>{
  return<RouterProvider router={router}/>
}

export default App;


