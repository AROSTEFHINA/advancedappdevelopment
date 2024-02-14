import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import RegistrationPage from './components/Registration';
import Bookevents from './components/Bookevents';
import Booking from './components/Booking';
import LandingPage from './components/LandingPage';
import Bookedevents from './components/Bookedevents';
import Adminlogin from './components/Adminlogin';
import Box from './components/Box';
import Venue from './components/venue';
import FoodAddon from './components/foodaddon';
import Categories from './components/categories';
import Gallery  from './components/Gallery';
import UpdateBooking from './components/updatebooking';
import Home from './components/Home';
import Delete from './components/delete';
import ApplicantDetails from './components/ApplicantDetails';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/Login" element={<Login/>} />
      <Route path="/Registration"  element={<RegistrationPage/>}/>
      <Route path="/Bookevents" element={<Bookevents/>} />
      <Route path="/Booking" element={<Booking/>} />
      <Route path="/LandingPage" element={<LandingPage/>} />
      <Route path="/Bookedevents" element={<Bookedevents/>} />
      <Route path="/Adminlogin" element={<Adminlogin/>} />
      <Route path="Box" element={<Box/>} />
      <Route path="Venue" element={<Venue/>} />
      <Route path="FoodAddon" element={<FoodAddon/>} />
      <Route path="Categories" element={<Categories/>} />
      <Route path="Gallery" element={<Gallery/>} />
      <Route path="UpdateBooking" element={<UpdateBooking/>} />
      <Route path="Home" element={<Home/>} />
      <Route path="Delete" element={<Delete/>} />
      <Route path="ApplicantDetails" element={<ApplicantDetails/>} />
      </Routes>
      </div>
      
      
    </Router>
  );
};

export default App;