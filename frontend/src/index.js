import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './views/Home/Home';
import VoyagerSignUp from './views/VoyagerSignUp/VoyagerSignUp';
import Pilot from './views/Pilot/Pilot';
import Verify from './views/Verify/Verify';
import Verify2 from './views/Verify2/Verify2';
import Verify3 from './views/Verify3/Verify3';
import Explore from './views/Explore/Explore';
import ExploreOwnership from './views/Explore/ExploreOwnership';
import ExploreUtility from './views/Explore/ExploreUtility';
import ExploreAccess from './views/Explore/ExploreAccess';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './common/Header';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="/voyagers" element={<VoyagerSignUp />} />
          <Route path="/pilots" element={<Pilot />} />
          <Route path="/verify" element={<Verify />} />
          <Route path="/verify2" element={<Verify2 />} />
          <Route path="/verify3" element={<Verify3 />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/explore-ownership" element={<ExploreOwnership />} />
          <Route path="/explore-utility" element={<ExploreUtility />} />
          <Route path="/explore-access" element={<ExploreAccess />} />
        </Route>
      </Routes>
    </BrowserRouter>,
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
