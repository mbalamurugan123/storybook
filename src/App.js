import logo from './logo.svg';
import './App.css';
import Mainpage from './Components/Mainpage';
import Story1 from './Components/story1';
import Login from './Components/Login';
import Register from './Components/Register';
import { Route,Routes } from 'react-router-dom';
function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Mainpage></Mainpage>}></Route>
        <Route path='/story1' element={<Story1></Story1>}></Route>
        <Route path='/log' element={<Login></Login>}></Route>
        <Route path='/Register' element={<Register></Register>}></Route>
      </Routes>
    </div>
  );
}

export default App;
