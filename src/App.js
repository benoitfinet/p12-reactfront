import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from "./pages/Main";
import './sass/vendors/normalized.scss'
import User from './devInfos/User';
import Activity from './devInfos/Activity';
import Session from './devInfos/Session';
import Performance from './devInfos/Performance';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/:id" element={<Main />} />
        <Route path="/user/:id" element={<User />} />
        <Route path="/user/:id/activity" element={<Activity />} />
        <Route path="/user/:id/average-sessions" element={<Session />} />
        <Route path="/user/:id/performance" element={<Performance />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
