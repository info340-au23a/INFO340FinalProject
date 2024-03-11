import React, { useState, useEffect } from 'react';
import {Route, Routes} from 'react-router-dom';
import NavBar from './Navigation'; 
import About from './AboutUs';
import Community from './Community';
import Education from './Education';
import Home from './Home';
import { getAuth, onAuthStateChanged, EmailAuthProvider } from 'firebase/auth';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    const unregisterAuthObserver = onAuthStateChanged(auth, setUser);
    return () => unregisterAuthObserver(); 
  }, []);
  

  const uiConfig = {
    signInFlow: 'popup',
    signInOptions: [
      EmailAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccessWithAuthResult: () => false,
    },
  };
  

  if (!user) {
    return (
      <div className="container">
        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={getAuth()} />
      </div>
    );
  } else {
    return (
        <div>
          <div className="container">
          <header>
            <h1>Funguy</h1>
          </header>
          <div id="nav" className="col-3">
            <NavBar />
          </div>
        </div>
        
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/community" element={<Community />} />
            <Route path="/education" element={<Education />} />
          </Routes>
          <footer>
            <div>&copy; 2024 Funguy. INFO 340 Team 5, Win 24, University of Washington.</div>
          </footer>
        </div>
    );
  }
}

export default App;

