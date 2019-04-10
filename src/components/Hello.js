import React from 'react';

class Hello extends React.Component {
    render (){
        return(
        <div className="home_hello"> 
           
        <React.Fragment>  
           <h1 className="home_port">Ana González</h1> 
           <p className="home_title">Jr. Full-Stack Web Developer</p>
           <p className="home_about"> I have a Bachelor's Degree in Communication and ever since I graduated, I have been immersed in the digital world.</p>
           <p className="home_about">I worked as web editor in publishing houses, which awakened in me the curiosity to learn how the systems behind the websites we interact with daily really work. 
           Today, after graduating from a bootcamp, I write code as a web developer.</p>
         
        </React.Fragment>
        </div>     
        )
    }
}

export default Hello;
