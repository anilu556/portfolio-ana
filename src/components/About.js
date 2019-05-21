import React, {Component} from 'react';
import about from '../images/image_abno.png';
import Education from './Education';

class About extends Component {
    render (){

        return(
        <div className="sabout">
            <React.Fragment>
            <div className="sabout_img"> 
                <img className="img_about" src={about} alt="about" />  
            </div>    
            <div className="sabout_me">
                <h1 className="about_port">Sports, Travelling & Technology</h1>
                <p className="about_about"> I’m a committed, responsible and creative person with the desire to grow  professionally and personally.</p>
                <br />
                <p className="about_about">Sports are a very important part of me. I believe that the passion you have for your team is very similar to the passion you have for life and challenges. One of my favorite sites in the world are soccer and baseball stadiums.</p>
                <br />
                <p className="about_about">I love to visit new places from my beautiful country and the rest of the world. There are too many destinies to discover, cultures to understand and ¡typical dishes to taste!</p>
                <br />
                <p className="about_about">I think that technology, besides of being my source of employment,  is the solution for many problems of the daily life and complex problems.
                I like to read and learn about new technologies, gadgets and apps that contribute to the community or give a special touch to our life style.</p>
            </div>
            <div className="sabout_exp">
                <h1 className="about_port">Work Experience & Education</h1>
                <Education />
            </div>
            <div className="sabout_extra">
                <div className="container">
                    <div className="container_skills">
                        <h1 className="about_cont">More Skills</h1>
                        <div className="skills_btns">
                            <div className="skills_btn">Web design</div>
                            <div className="skills_btn">Teamwork</div>
                            <div className="skills_btn">Adaptability</div>
                            <div className="skills_btn">Sociable</div>
                            <div className="skills_btn">Responsive design</div>
                            <div className="skills_btn">Always learning</div>
                            <div className="skills_btn">Seeker of knowledge</div>
                        </div> 
                    <div className="container_cv">
                        <h1 className="about_cont">Resume</h1>
                        <div className="download">
                            <button className="download_btn"><a href="https://drive.google.com/open?id=1mj8W2fFJwjUSFMOVNykOI8qdNQMu1j0b" target="_blank" rel="noopener noreferrer"><i class="far fa-file-alt"></i></a></button>
                        </div>
                    </div>   
                    </div>
                </div>
            </div>
            </React.Fragment>
        </div>
        )
    }
}

export default About;