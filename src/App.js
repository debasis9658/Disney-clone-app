import { 
  BrowserRouter as Router,
  Route,
  Routes
  } from "react-router-dom";
import Header from "./components/Header"  
import Login from "./components/Login.js";
import './App.css';
import Home from './components/Home';
import Detail from "./components/Detail";

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path="/" 
            element={<Login />} 
          /> 

          <Route path="/home" 
            element={<Home />} 
          /> 

          <Route path="/detail/:id"
             element={<Detail />}
          />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
