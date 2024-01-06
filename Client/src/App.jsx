import { BrowserRouter } from "react-router-dom"
import Router from "./Router"
import axios from 'axios';

function App() {
axios.defaults.baseURL = "http://localhost:4000";
axios.defaults.withCredentials = true;
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  )
}

export default App
