import React from "react";
import { MdCheckBox } from "react-icons/md";

function LogIn() {
  return (
    <div className='login'>
      <div className="login-2 border border-light p-4">
        <div className="login-3 border border-light p-2">
          <p className='fw-bold fs-4 ps-4 brown-color'>Log in with</p>
          <ul className="d-flex">
            <li>
              <button type="button" className="button button1 fs-8">
                Smart-ID
              </button>
            </li>
            <li>
              <button type="button" className="button button1 fs-8">
                Biometrics
              </button>
            </li>
            <li>
              <button type="button" className="button button1 fs-8">
                Mobile-ID
              </button>
            </li>
            <li>
              <button type="button" className="button button1 fs-8">
                PIN-calculator
              </button>
            </li>
            <li>
              <button type="button" className="button button1 fs-8">
                ID-card
              </button>
            </li>
          </ul>
          <div>
            <input type="text" className='login-input'></input>
            <MdCheckBox className='fs-3 primary-color'/>
            <button className='enter p-2 m-4 text-white border-light'>Enter</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
