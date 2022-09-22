import './assets/sass/vendors/normalized.scss';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Main from "./pages/Main/Main";
import User from './pages/devInfos/User';
import Activity from './pages/devInfos/Activity';
import Session from './pages/devInfos/Session';
import Performance from './pages/devInfos/Performance';

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
