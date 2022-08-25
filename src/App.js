import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from "./assets/pages/Main/Main";
import './assets/sass/vendors/normalized.scss';
import User from './assets/devInfos/User';
import Activity from './assets/devInfos/Activity';
import Session from './assets/devInfos/Session';
import Performance from './assets/devInfos/Performance';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/user/:id" element={<User />} />
        <Route path="/user/:id/activity" element={<Activity />} />
        <Route path="/user/:id/average-sessions" element={<Session />} />
        <Route path="/user/:id/performance" element={<Performance />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
