import './App.css';
import { BrowserRouter as Router} from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Login from './Components/Login';
import Header  from './Components/Header';
import Home from './Components/Home';
import Detail from './Components/details';
function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route exact path="/" element={<Login/>}/>
          <Route exact path="/home" element={<Home/>}/>
          <Route exact path="/detail/:id" element={<Detail/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
