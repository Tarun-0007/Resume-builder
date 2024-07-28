import './chola.css'
import { useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const loginUser = async(event) =>{
    try {
      const res= await fetch("https://resume-builder-backend-y10b.onrender.com",{
        method:"POST",
        headers:{
          "Content-Type": "application/json"
        },
        body: JSON.stringify({email, password}),
      })
      const data= await res.json();
      if(!res.ok) {
        console.log("Login failed");
      }
      if(data){
        alert("Login successful");
      }
      return data;
    } catch (error) {
      console.log(error)
    }
  }
  

  return (
    <>
    <div className="container">

    {/* registration part start here  */}
      <div className="login">

        {/* Login heading  here  */}
        <h1 className="login1">LOGIN</h1>  

        {/* form starts here  */}
        <form onSubmit={loginUser}>

          <input // input for email
            value={email}
            type="email"
            className="email1"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            
          />

          <input // input for password 
            value={password}
            type="password"
            className="password1"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <input className="submit" type="submit" value="LOGIN"  />
        </form>
        {/* form ends here  */}

      </div>
      {/* registration part ends here  */}


    </div>
    </>
  );
}

export default App;
