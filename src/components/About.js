import React, {Component} from 'react';
import about from '../images/image_abno.png';
import foto1 from '../images/foto1.png';
import foto2 from '../images/foto2.png';
import foto3 from '../images/foto3.png';
import foto4 from '../images/foto4.png';

import Education from './Education';

class About extends Component {
    render (){

        return(
        <div className="sabout">
            <React.Fragment>
            <div className='sabout-me'>
                <div className='sabout-fotos'>   
                    <div className="sabout_row_1"> 
                        <img className="img_about" id="af1" src={foto3} alt="about" />  
                        <img className="img_about" id="af2" src={foto1} alt="about" />  
                    </div>  
                    <div className="sabout_row_2"> 
                        <img className="img_about" id="af3" src={foto4} alt="about" />  
                        <img className="img_about" id="af4" src={foto2} alt="about" /> 
                    </div>   
                </div>  
                <div className='sabout-text'> 
                    <h1 className="about_port">ABOUT ME.</h1>
                    <p className="about_about"> I’m a committed, responsible and creative person with the desire to grow  professionally and personally.</p>
                    <p className="about_about">Sports are a very important part of me. I believe that the passion you have for your team is very similar to the passion you have for life and challenges. One of my favorite sites in the world are soccer and baseball stadiums.</p>
                    <p className="about_about">I love to visit new places from my beautiful country and the rest of the world. There are too many destinies to discover, cultures to understand and ¡typical dishes to taste!</p>
                    <p className="about_about">I think that technology, besides of being my source of employment,  is the solution for many problems of the daily life and complex problems.
                    I like to read and learn about new technologies, gadgets and apps that contribute to the community or give a special touch to our life style.</p>    
                </div>
            </div>
            <div className="sabout_exp">
                <Education />
            </div>
            <div className="sabout_extra">
                <div className="container">
                    <div className="container_skills">
                        <h1 className="about_cont">MORE SKILLS.</h1>
                        <div className="skills_btns">
                            <div className="skills_btn">WEB DESIGN</div>
                            <div className="skills_btn">TEAMWORK</div>
                            <div className="skills_btn">ADAPTABILITY</div>
                            <div className="skills_btn">SOCIABLE</div>
                            <div className="skills_btn">CREATIVITY</div>
                            <div className="skills_btn">ALWAYS LEARNING</div>
                            <div className="skills_btn">SEEKER OF KNOWLEDGE</div>
                        </div> 
                    <div className="container_cv">
                        <h1 className="about_cont">DOWNLOAD RESUME.</h1>
                        <div className="download">
                            <button className="download_btn"><a href="https://drive.google.com/file/d/1chFHZfnFaXvW6OZit5XNljTu0SGVDSuV/view?usp=sharing" target="_blank" rel="noopener noreferrer"><i class="far fa-file-alt"></i></a></button>
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