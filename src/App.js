

import { Route, Routes } from 'react-router-dom';
import './App.css';
import { StudentController } from './classes/StudentController';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Home from './HomePage/Home';
import LeftSide from './SideBars/LeftSide';
import RightSide from './SideBars/RightSide';
import AddStudent from './StudentComponents/AddStudent';
import DeleteStudent from './StudentComponents/DeleteStudent';
import EditStudent from './StudentComponents/EditStudent';
import ShowStudent from './StudentComponents/ShowStudent';


function App() {
  return (
    <div className="App">
      <Header />
      <div className='mainSection'>
      <LeftSide/>
      <div className='middleSection'>
      <Routes>

        <Route element={<Home />} path="/" />

        <Route element={<ShowStudent />} path="/students" />

        <Route element={<AddStudent />} path="/add/student" />

        <Route element={<EditStudent />} path="/edit/:id" />

        <Route element={<DeleteStudent />} path="/delete/:id" />
        </Routes>
      </div>
      <RightSide />
      </div>
      <Footer />
    </div>
  );
}

export default App;
