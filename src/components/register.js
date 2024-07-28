import './chola.css'
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");



  const registerUser = async (event) => {
    try {
      const res= await fetch("http://localhost:4000/register",{
        method:"POST",
        headers:{
          "Content-Type": "application/json"
        },
        body: JSON.stringify({username:name, email, password}),
      });
      const data= await res.json();
      if(!res.ok) {
        console.log("Registration failed");
      }
      console.log(data);
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>

    {/* registration part start here  */}
      <div className="register">

        {/* Login heading  here  */}
        <h1 className="register1">REGISTER</h1>  

        {/* form starts here  */}
        <form onSubmit={registerUser} >
          <input // input for user name 
            value={name}
            type="text"
            className="name1"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />

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

          <input className="submit" type="submit" value="SIGN UP"  />
        </form>
        {/* form ends here  */}

      </div>
      {/* registration part ends here  */}


    </>
  );
}

export default App;
