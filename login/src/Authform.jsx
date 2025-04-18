import React, { useState } from 'react';
import './App.css'; // Optional: Put modal styles here or inline

function App() {
  const [islogin, setislogin] = useState(false);
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="container">
      <div className="form-container">
        <h3>MANITVerse </h3>

        <div className="form-toggle">
          <button className={islogin ? 'active' : ""} onClick={() => setislogin(true)}>Login</button>
          <button className={!islogin ? 'active' : ""} onClick={() => setislogin(false)}>Sign-Up</button>
        </div>

        {islogin ? (
          <div id='lf'>
            <h2>LOGIN FORM</h2>
            <input type="email" placeholder='Email' />
            <br />
            <p>
              <input type="password" placeholder='Password' />
              <br /><br />
              <button>Login</button>
            </p>
            <p>NOT A MEMBER? <a href='#' onClick={() => setislogin(false)}>SIGN-UP NOW</a></p>
            <button id="abt" onClick={() => setShowModal(true)}>ABOUT US</button>
          </div>
        ) : (
          <div className="form">
            <h2>SIGN-UP FORM</h2>
            <input type="email" placeholder='Email' />
            <br /><br />
            <input type="password" placeholder='PASSWORD' />
            <br />
            <input type="password" placeholder='Confirm PASSWORD' />
            <br /><br />
            <button>SIGN-UP</button>
          </div>
        )}
      </div>

      {/* About Us Modal */}
      {showModal && (
        <div className="modal" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <span className="close" onClick={() => setShowModal(false)}>&times;</span>
            <h2>About This Project</h2>
            <p>
              <strong>Project:</strong> A Web Based GIS Model for MANIT<br /><br />
              <strong>Contributors:</strong><br />
              Swati Jalandhara (2211101130)<br />
              Bobbydayal Saket (2211101132)<br />
              Raj Srivastava (2211101133)<br /><br />
              <strong>Guide:</strong> Dr. Priyamitra Munoth<br /><br />
              <strong>Technologies Used:</strong> ARC GIS, DEM Data, Google Earth Pro
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
