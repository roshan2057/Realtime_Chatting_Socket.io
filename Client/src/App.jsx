import { BrowserRouter } from "react-router-dom"
import Router from "./Router"
import axios from 'axios';
import UserContextProvider from "./Context/UserContext";

function App() {
axios.defaults.baseURL = "http://localhost:4000";
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
