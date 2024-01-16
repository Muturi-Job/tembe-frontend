import './App.css';
import NavBar from './Components/Navbar/NavBar';
import { Route, Routes } from 'react-router-dom';
import Login from "./Components/Authentication/LogIn";
import SignUp from "./Components/Authentication/SignUp";
import Home from './Components/Home/Home';  
import About from './Components/About/About';
import MedicationsList from './Components/Medication/MedicationsList';
import MedicationDetails from './Components/Medication/MedicationDetails'; 
import NewMedication from './Components/Medication/NewMedication'; 
import Profile from './Components/Authentication/Profile';
import Doses from './Components/Doses/Doses';


function App() {
  return (
  <>
    <NavBar/>
    <Routes>
      <Route path='' element={<About/>}>About</Route>
      <Route path='about' element={<About/>}>About</Route>
      <Route path='login' element={<Login/>}>Login</Route>
      <Route path='signup' element={<SignUp/>}>SignUp</Route>
      <Route path='profile' element={<Profile/>}></Route>
      <Route path='home' element={<Home/>}>Home</Route>
      <Route path='medications' element={<MedicationsList/>}>Medications</Route>
      <Route path='medication_details ' element={<MedicationDetails/>}>Medication Details</Route>
      <Route path='new_medication' element={<NewMedication/>}>New Medication</Route>
      <Route path='doses' element={<Doses/>}></Route>

    </Routes>
  </>
  );
}

export default App;
