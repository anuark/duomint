import React, { useState, Fragment } from 'react';
import { Container } from 'react-bootstrap';
import './index.css';
import Home from './views/Home/Home';
import VoyagerSignUp from './views/VoyagerSignUp/VoyagerSignUp';
import Pilot from './views/Pilot/Pilot';
import Blastoff from './views/Blastoff/Blastoff';
import Verify from './views/Verify/Verify';
import Verify2 from './views/Verify2/Verify2';
import Verify3 from './views/Verify3/Verify3';
import Explore from './views/Explore/Explore';
import ExploreOwnership from './views/Explore/ExploreOwnership';
import ExploreUtility from './views/Explore/ExploreUtility';
import ExploreAccess from './views/Explore/ExploreAccess';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './common/Header';

import './App.css';

function App() {
  const [userAddress, setUserAddress] = useState(null);

  return (
    <Fragment>
      <Header />
      <Container>
        <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/pilots" element={<Pilot userAddress={userAddress} setUserAddress={setUserAddress}  />} />
           <Route path="/blastoff" element={<Blastoff userAddress={userAddress} setUserAddress={setUserAddress}  />} />
           <Route path="/voyagers" element={<VoyagerSignUp userAddress={userAddress} setUserAddress={setUserAddress} />} />
           <Route path="/verify" element={<Verify  />} />
           <Route path="/verify2" element={<Verify2 />} />
           <Route path="/verify3" element={<Verify3 />} />
           <Route path="/explore" element={<Explore />} />
           <Route path="/explore-ownership" element={<ExploreOwnership />} />
           <Route path="/explore-utility" element={<ExploreUtility />} />
           <Route path="/explore-access" element={<ExploreAccess />} />
        </Routes>
      </Container>
    </Fragment>
  );
}

export default App;
