import React from "react";
import "./index.css"
import About from "../../containers/About";
import Skills from "../../containers/Skills/skills";
const Home =() => {
    return(
        <>

            <div className="body">
                <About name="kavishka" id="123"/>
                <Skills skill="coding"/>

            </div>
        </>
        
    )
    
};
export default Home;
