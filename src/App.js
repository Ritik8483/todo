import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Login from './components/login/Login';
import Signup from './components/signup/Signup';
import * as yup from 'yup';
import PageTitle from './components/toDoList/PageTitle';
import { Toaster } from 'react-hot-toast';

function App() {
  
  return (
      <div>
        <Router>
          <Routes>
            <Route path='/' element={<Login/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/signup' element={<Signup/>} />
            <Route path='/pagetitle' element={<PageTitle>ToDo List</PageTitle>}/>
          </Routes>
        </Router>
        <Toaster 
         position="bottom-right"
         reverseOrder={false}
         toastOptions={{style:{fontSize:'1.5rem'}}}
        />
      </div>
  );
}

export default App;
