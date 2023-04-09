import { Routes, Route } from 'react-router-dom'
import './App.css';
import DialogsContainer from './comps/Dialogs/DialogsContainer';
import Header from './comps/header/Header';
import Navbar from './comps/navbar/Navbar';
import Profile from './comps/profile/Profile';
import TestMain from './comps/test/TestMain';
import UsersContainer from './comps/Users/UsersContainer';

const App = () => {
  return (
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="content">
          <Routes>
            <Route  path='/profile' element={<Profile/>} />
            <Route  path='/dialogs' element={<DialogsContainer/>}/>
            <Route  path='/users' element={<UsersContainer/>}/>
            <Route  path='/test' element={<TestMain/>}/>
          </Routes>
        </div>
      </div>
  );
}

export default App;
