import React from "react";
import icon from "../assets/icon.png";
import bg from "../assets/bg.jpg";
import { Link } from "react-router-dom";
// import UserLogin from "./UserLogin";

const Home = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          // backgroundPosition: "50% 0%"
        }}
        className="h-screen w-full bg-contain bg-no-repeat bg-center  pt-2 flex justify-between float-end flex-col"
      >
        <img
          src={icon}
          alt="uber logo"
          className=" h-10 w-14 object-contain ml-6"
        />

        <div className="bg-white py-1 px-4 pb-7">
          <h2 className="text-3xl font-bold">Get Started with Uber</h2>
          <Link to="/login" className=" inline-block text-center w-full bg-black text-white py-2 px-4  mt-3 rounded">
            Continue
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
