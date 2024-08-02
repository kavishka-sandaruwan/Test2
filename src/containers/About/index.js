import React, { useState }  from "react";
import "./index.css";
import { wait } from "@testing-library/user-event/dist/utils";

const About = ({name,id}) =>{

  const [loggedIn,setLoggedIn]=useState(false);

  const login=()=>{
    setLoggedIn(true);
    console.log("Welcome to the system");
  }

  const logout=()=>{
    setLoggedIn(false);
    console.log("you are not login in the system");
  }

    return(
        <div className='about'>
          <h1>About</h1>
          <p>This is my about section</p>
          <p>{name}</p>
          <p>{id}</p>

          { loggedIn ? (<button className="logout" onClick={logout}>
            {" "}Logout{" "}
          </button>): (<button className="login" onClick={login}>
            {" "}Login{" "}
          </button> )

          }


           { loggedIn ? <p>Welcome to the system</p> : <p>You are not loggin into system</p>

           }

          

        
        </div>

    )
};
export default About;