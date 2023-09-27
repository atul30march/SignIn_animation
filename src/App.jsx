import { useState } from "react";
import "./App.css";

function App() {

  const [rightPanelActive, setRightPanelActive] = useState(false);

  const handleSignUpClick = () => {
    setRightPanelActive(true);
  };

  const handleSignInClick = () => {
    setRightPanelActive(false);
  };
return (
  <>
    <div
      className={`container ${rightPanelActive ? "right-panel-active" : ""}`}
    >
      <div className="form-container sign-up-container">
        <form action="#">
          <h1>Create Account</h1>
          <div className="social-container">
            <a href="#" className="social">
              <i className="fab fa-facebook-f" />
            </a>
            <a href="#" className="social">
              <i className="fab fa-google-plus-g" />
            </a>
            <a href="#" className="social">
              <i className="fab fa-linkedin-in" />
            </a>
          </div>
          <span>or use your email for registration</span>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>Sign Up</button>
        </form>
      </div>
      <div className="form-container sign-in-container">
        <form action="#">
          <h1>Sign in</h1>
          <div className="social-container">
            <a href="#" className="social">
              <i className="fab fa-facebook-f" />
            </a>
            <a href="#" className="social">
              <i className="fab fa-google-plus-g" />
            </a>
            <a href="#" className="social">
              <i className="fab fa-linkedin-in" />
            </a>
          </div>
          <span>or use your account</span>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <a href="#">Forgot your password?</a>
          <button>Sign In</button>
        </form>
      </div>
      <div className="overlay-container">
        <div className="overlay">
          <div
            className={`overlay-panel overlay-left ${
              rightPanelActive ? "right-panel-active" : ""
            }`}
          >
            <h1>Welcome Back!</h1>
            <p>
              To keep connected with us please login with your personal info
            </p>
            <button className="ghost" onClick={handleSignInClick}>
              Sign In
            </button>
          </div>
          <div
            className={`overlay-panel overlay-right ${
              rightPanelActive ? "right-panel-active" : ""
            }`}
          >
            <h1>Hello, Friend!</h1>
            <p>Enter your personal details and start your journey with us</p>
            <button className="ghost" onClick={handleSignUpClick}>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
    <footer>
      <p>
        Created with <i className="fa fa-heart" /> by
        <a
          target="_blank"
          href="https://github.com/atul30march/SignIn_animation"
          rel="noreferrer"
        >
          Atul Kumar Maurya
        </a>
        - You can get the source code form
        <a
          target="_blank"
          href="https://github.com/atul30march/SignIn_animation"
          rel="noreferrer"
        >
          here
        </a>
        .
      </p>
    </footer>
  </>
);
}

export default App;
