import React,{useState} from 'react'
import icon from "../assets/icon.png";
import { Link } from 'react-router-dom';



// Bhai teri ek bhi video nahi hai jisme ladki na ho. Your content is pretty much similar that of Mithilesh Backpacker, not to mention that I don't like him. One of the reasons people like Nomadic Indian and Mountain Trekker have such a huge fan base is because they are really genuine and pure hearted guys. Unke videos dekhne se aisa feel aata hai jaise ki khud travel kar rahe hai.

// Bhai nomadic Indian ki Thailand series ki sari video ma ladki he hai

const UserLogin = () => {

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const [userData, setUserData] = React.useState({});

  const submitHandler = (e) => {
    e.preventDefault();

    setUserData({
      email: email,
      password: password
    });
    console.log("User Data:", userData);
    setEmail("");
    setPassword("");
  }


  return (
    <div className='p-7 h-screen flex flex-col justify-between '>

      <div>
        <img className='mb-10 w-12 mt-1 ' src={icon} alt="" />
        <form onSubmit={(e) => { submitHandler(e) }}>
          <h3 className='text-lg font-medium mb-2'>What's your email?</h3>
          <input 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg  placeholder:text-base' required type="email" placeholder='email@example.com ' />




          <h3 className='text-lg font-medium mb-2'>Enter password</h3>
          <input 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg  placeholder:text-base' required type="password" placeholder='********' />

          <button className='bg-[#111] font-semibold text-[#fff] mb-7 rounded px-4 py-2  w-full text-lg  placeholder:text-base' required >Login</button>


          <p className='text-center'>Don't have an account? <Link to="/signup" className='text-blue-600' >Create new Account</Link></p>
        </form>  
      </div>

      <div>

        <Link to="/CaptainLogin" className='bg-[#10b461]  flex items-center justify-center font-semibold text-[#fff] mb-7 rounded px-4 py-2  w-full text-lg  placeholder:text-base' >Sign in as Captain</Link>

      </div>


    </div>
  )
}

export default UserLogin