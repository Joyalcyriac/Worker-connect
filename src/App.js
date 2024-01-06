
import './App.css';

import React from 'react';
import { BrowserRouter as Router, Route, BrowserRouter, Routes} from 'react-router-dom';
import UserTypeSelection from './componets/UserTypeSelection';
import ClientRegistration from './componets/ClientRegistration';
import WorkerRegistration from './componets/WorkerRegistration';

function App() {
  return (
    <div >
          <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserTypeSelection method='get'/>} />
          <Route path="/client" element={<ClientRegistration method='get' />} />
          <Route path="/worker" element={<WorkerRegistration method='get'/>} />
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
