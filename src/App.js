
import './App.css';
import Navbar from './Components/Navbar';
import {Routes , Route} from 'react-router-dom'
import Add from './Pages/Add';
import Home from './Pages/Home';
import ViewDetails from './Pages/ViewDetails';
import Update from './Pages/Update';
import AddDetails from './Pages/AddDetails';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path = '/' element = {<Home/>} />
        <Route path = '/add' element = {<Add/>}></Route>
        <Route path = '/update/:_id' element = {<Update/>}></Route>
        <Route path = '/addDetails/:_id' element = {<AddDetails/>}></Route>
        <Route path = '/viewDetails/:_id' element = {<ViewDetails/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
