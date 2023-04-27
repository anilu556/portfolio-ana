import React from 'react';
import home from '../images/image_home.png'
import homedos from '../images/code.jpg'
import { Parallax } from "react-parallax";
import SkillBar from 'react-skillbars';
import Hello from "./Hello";

class Home extends React.Component {
    render() {
        const insideStyles = {
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            color: "white",
            fontFamily: "'Kanit', sans-serif",
            fontSize: "25px",
            fontWeight: "bold"
          };

        const image1 = home
        const image2 = homedos

        // const skills = [
        //     {
        //       "type": "Creative",
        //       "level": 100
        //     },
        //     {
        //       "type": "HTML",
        //       "level": 90
        //     },
        //     {
        //       "type": "CSS",
        //       "level": 90
        //     },
        //     {
        //       "type": "Javasrcipt",
        //       "level": 80
        //     },
        //     {
        //       "type": "Bootstrap",
        //       "level": 90
        //     },
        //     {
        //       "type": "React JS",
        //       "level": 70
        //     },
        //     {
        //         "type": "Mobile Apps",
        //         "level": 50
        //     }
        //   ]
        //   const colors = {
        //     "bar": "#fa64aa",
        //     "title": {
        //       "text": "#ffffff",
        //       "background": "#ff1f87"
        //     }
        //   }
            
        return(
            <div className="shome">
              <React.Fragment>
                  <div className="shome_img"> 
                    <img className="img_home" src={image1} alt="home" />  
                  </div> 
                  <div className="shome_text">  
                  <Hello />  
                  </div>
                  <div className="shome_me">  
                  <Parallax
                      bgImage={image2}
                      strength={200}
                      renderLayer={percentage => (
                          <div>
                          <div
                              style={{
                              position: "absolute",
                              background: `#ff1f87`,
                              left: "50%",
                              top: "50%",
                              borderRadius: "50%",
                              transform: "translate(-50%,-50%)",
                              width: percentage * 350,
                              height: percentage * 350
                              }}
                          />
                          </div>
                      )}
                      >
                      <div style={{ height: 300 }}>
                          <div style={insideStyles}>SKILLS</div>
                      </div>
                  </Parallax>  
                  </div>
                  <div className="skillsHome">
                    <div className="skills_home_btns">
                      <div class="skill-row-1">
                        <div className="skills_btn">HTML</div>
                        <div className="skills_btn">CSS</div>
                        <div className="skills_btn">JAVASCRIPT</div>
                        <div className="skills_btn">BOOTSTRAP</div>
                        <div className="skills_btn">REACT JS</div>
                      </div>
                        <div class="skill-row-2">
                        <div className="skills_btn">REACT NATIVE</div>
                        <div className="skills_btn">GIT</div>
                        <div className="skills_btn">RESPONSIVE DESIGN</div>
                        <div className="skills_btn">API REST</div>
                        <div className="skills_btn">SASS</div>
                      </div>
                    </div>  
                  </div>
              </React.Fragment>       
            </div>
                )
            }
        }

export default Home;

