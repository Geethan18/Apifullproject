import logo from './logo.svg';
import './App.css';
import Home from './Components/home';
import Login from './Components/login';
import Gallery from './Components/gallery';
import Test from './Components/test';
import { Route,Routes } from 'react-router-dom';
import Populardes from './Components/popd';
import Cbe from './Components/cbe';
import Chennai from './Components/chennai';
import Kanniyakumari from './Components/kk';
import Madurai from './Components/madurai';
import Ooty from './Components/ooty';
import Tanjore from './Components/tanjore';
import Enquireus from './Components/enquireus';
import AmFrontEnd from './am';
import LoginPage from './loginside';
import RegisterDetails from './page3';
import UpdateRegister from './page1';
import DeleteRegister from './page2';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<LoginPage/>}/>
        <Route path="/am" element={<AmFrontEnd/>}/>

        {/* <Route path="/login" element={<Login/>}/>
        <Route path="/gallery" element={<Gallery/>}/>
        <Route path="/enquireus" element={<Enquireus/>}/>
        <Route path="/popd" element={<Populardes/>}/>
        <Route path="/cbe" element={<Cbe/>}/>
        <Route path="/chennai" element={<Chennai/>}/>
        <Route path="/kk" element={<Kanniyakumari/>}/>
        <Route path="/madurai" element={<Madurai/>}/>
        <Route path="/ooty" element={<Ooty/>}/>
        <Route path="/tanjore" element={<Tanjore/>}/> */}
        <Route path="/page3" element={<RegisterDetails/>}/>
        <Route path='/page1' element={<UpdateRegister/>}/>
        <Route path='/page2' element={<DeleteRegister/>}/>
      </Routes>
    </div>
  );
}

export default App;
