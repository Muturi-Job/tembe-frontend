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
import { useEffect, useState, createContext} from 'react';

export const UserContext = createContext();
function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const authToken = localStorage.getItem('authToken');
    
    const fetchData = async () => {
      try {
        const payload = JSON.parse(atob(authToken.split('.')[1]));
        setUser(payload.user);  
        const response = await fetch(`http://localhost:4000/users/${payload.user_id}`);
        const completeUserData = await response.json();
        
        setUser(completeUserData);
        console.log("Login Successs");
      } catch (error) {
        console.error('Error decoding token or fetching complete user data:', error);
      }
    };
  
    if (authToken) {
      fetchData();
    }
  }, [setUser]);




  return (
    <UserContext.Provider value={{user, setUser}}>
      <NavBar user={user} />
      <Routes>
        <Route path='login' element={<Login user={user} setUser={setUser} />}>Login</Route>
        <Route path='signup' element={<SignUp user={user} setUser={setUser} />}>SignUp</Route>
        <Route path='about' element={<About user={user} />}>About</Route>
        <Route path='/' element={<About user={user} />}>About</Route>
        <Route path='profile' element={<Profile user={user} />}></Route>
        <Route path='home' element={<Home user={user} />}>Home</Route>
        <Route path='medications' element={<MedicationsList user={user} />}>Medications</Route>
        <Route path='medication_details ' element={<MedicationDetails user={user} />}>Medication Details</Route>
        <Route path='new_medication' element={<NewMedication user={user} />}>New Medication</Route>
        <Route path='doses' element={<Doses user={user} />}></Route>
      </Routes>
    </UserContext.Provider>
  );
}

export default App;
