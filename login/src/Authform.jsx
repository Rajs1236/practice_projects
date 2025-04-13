import React, { useState } from 'react'

function App() {
  const [islogin, setislogin] = useState(false);
  return (
    <div className="container">

      <div className="form-container">
        <h3>COLLEGIS</h3>
        <div className="form-toggle">
          <button className={islogin ? 'active' : ""} onClick={() => setislogin(true)}>Login</button>
          <button className={!islogin ? 'active' : ""} onClick={() => setislogin(false)}>Sign-Up</button>
          
        </div>
        {islogin ? <>

          <div id='lf'>
            <h2>LOGIN FORM</h2>
            <input type="Email" placeholder='Email' />
            <br></br>
            <p><input type="Password" placeholder='Password' />
              <br></br> <br></br>
              <button>Login</button> </p>

            <p>NOT A MEMBER? <a href='#' onClick={() => setislogin(false)}>SIGN-UP NOW</a></p>
            
           <button id="abt">ABOUT US</button> 
           
              </div>


        </> : <>
          <div className="form"></div>
          <h2>SIGN-UP FORM</h2>
          <input type="Email" placeholder='Email' />
          <br></br><br></br>
          <input type="Password" placeholder='PASSWORD' />
          <br></br>
          <p></p>
          <input type="Password" placeholder='Confirm PASSWORD' />
          <br></br> <br></br>
          <button>SIGN-UP</button>
        </>}

      </div>

    </div>
  );
}


export default App;


