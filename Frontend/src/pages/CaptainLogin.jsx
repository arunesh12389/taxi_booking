import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import driver from "../assets/driver.png";


const CaptainLogin = () => {

    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [CaptainData, setCaptainData] = React.useState({});
    const submitHandler = (e) => {
      e.preventDefault();

      const data = {
        email: email,
        password: password
      };
      console.log("Captain Data:", data);
      setEmail("");
      setPassword("");
    }


  return (
    <div className='p-7 h-screen flex flex-col justify-between '>

      <div>
        <img className='mb-10 w-12 mt-1 ' src={driver} alt="" />
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


          <p className='text-center '>Join our fleet<Link to="/CaptainSignup" className='text-blue-600' > Register as a Captain</Link></p>
        </form>  
      </div>
 {/* <div> new form  and</div> */}
      <div>

        <Link to="/login" className='bg-[#d5622d]  flex items-center justify-center font-semibold text-[#fff] mb-7 rounded px-4 py-2  w-full text-lg  placeholder:text-base' >Sign in as User</Link>

      </div>


    </div>
  )
}

export default CaptainLogin 