import React, {Component} from 'react';
import { Parallax } from "react-parallax";
import about from '../images/image_abno.png';
import Education from './Education';

class About extends Component {
    render (){

        return(
        <div className="sabout">
        <React.Fragment>
        <div className="sabout_img">
           <Parallax bgImage={about} strength={100}>
                    <div className="par_mob_a">
                    </div>
            </Parallax>
        </div>     
        <div className="sabout_me">
            <h1 className="about_port">Sports, Travelling & Technology</h1>
            <p className="about_about"> I have a Bachelor's Degree in Communication and ever since I graduated, I have been immersed in the digital world.</p>
            <p className="about_about">I am a person who likes challenges, and being accepted to a bootcamp and changing my career was one of them.</p>
            <p className="about_about">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
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
                        <button className="download_btn"> <i class="fas fa-download"></i> </button>
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