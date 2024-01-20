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
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';


function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const sessionId = Cookies.get('session_id')
    if (sessionId) {
      fetchUserData(sessionId)
    }
  }, []);

  const fetchUserData = async (sessionId) => {
    try{
      const response = await fetch('https//localhost:4000/users', {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${sessionId}`,
        },
      });
      if (response.ok) {
        const userData = await response.json();
        setUser(userData)
        console.log(userData)
      }else{
        console.error('Error fetching user data');
      }
    }catch (error) {
      console.error('Error:', error);
    }
  };

  return (
  <>
    {/* <NavBar user={user}/> */}
    <Routes>
      <Route path='login'  element={<Login user={user} setUser={setUser} />}>Login</Route>
      <Route path='signup' element={<SignUp user={user} setUser={setUser}/>}>SignUp</Route>
      <Route path='about'  element={<About user={user}/>}>About</Route>
      <Route path='profile'  element={<Profile user={user}/>}></Route>
      <Route path='home'  element={<Home user={user}/>}>Home</Route>
      <Route path='medications'  element={<MedicationsList user={user}/>}>Medications</Route>
      <Route path='medication_details '  element={<MedicationDetails user={user}/>}>Medication Details</Route>
      <Route path='new_medication'  element={<NewMedication user={user}/>}>New Medication</Route>
      <Route path='doses' element={<Doses user={user}/>}></Route>

    </Routes>
  </>
  );
}

export default App;
