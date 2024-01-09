import { BrowserRouter } from "react-router-dom"
import Router from "./Router"
import axios from 'axios';
import UserContextProvider from "./Context/UserContext";

function App() {
  axios.defaults.baseURL = import.meta.env.VITE_SERVER_URL;
axios.defaults.withCredentials = true;
  return (
    <BrowserRouter>
    <UserContextProvider>
      <Router />
    </UserContextProvider>
    </BrowserRouter>
  )
}

export default App
