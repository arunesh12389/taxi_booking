import React,{useState} from 'react'
import driver from "../assets/driver.png";

import { Link } from "react-router-dom";
const CaptainSignup = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const[userData, setUserData] = useState({});

const submitHandler = (e) => {
    e.preventDefault();
    setUserData({
      fullName:{
        firstName: firstName,
        lastName: lastName
      },
      email: email,
      password: password,

    });
    console.log("User Data:", userData);
    setEmail("");
    setPassword("");
    setFirstName("");
    setLastName("");

  };

  return (
    <div>
      <div className="p-7 h-screen flex flex-col justify-between ">
        <div>
          <img className="mb-10 w-12 mt-1 " src={driver} alt="" />
          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
          >
            <h3 className="text-lg font-medium mb-2">What's your name?</h3>
            <div className="flex gap-4 ">
              <input
                className="bg-[#eeeeee] mb-7 rounde d px-4 py-2 border w-1/2 text-lg  placeholder:text-base"
                required
                type="text"
                placeholder="first name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-1/2 text-lg  placeholder:text-base"
                required
                type="text"
                placeholder="last name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>

            <h3 className="text-lg font-medium mb-2">What's your email?</h3>
            <input
              className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg  placeholder:text-base"
              required
              type="email"
              placeholder="email@example.com "
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <h3 className="text-lg font-medium mb-2">Enter password</h3>
            <input
              className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg  placeholder:text-base"
              required
              type="password"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              className="bg-[#111] font-semibold text-[#fff] mb-7 rounded px-4 py-2  w-full text-lg  placeholder:text-base"
              required
            >
              Login
            </button>

            <p className="text-center">
              Already have an account?{" "}
              <Link to="/login" className="text-blue-600">
                Login{" "}
              </Link>
            </p>
          </form>
        </div>

        <div>
          <p className=' text-[12px] leading-tight'>This site is protected by reCAPTCHA and the <span className="underline">Google Privacy Policy</span> and <span className="underline">Terms of Service</span> apply.</p>
        </div>
      </div>
    </div>
  );
};

export default CaptainSignup;
