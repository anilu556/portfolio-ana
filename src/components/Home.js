import React from 'react';
import home from '../images/image_home.png'
import homedos from '../images/image_home_dos.png'
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
            fontFamily: "'Didact Gothic', sans-serif",
            fontSize: "25px",
            fontWeight: "bold"
          };

        const image1 = home
        const image2 = homedos

        const skills = [
            {
              "type": "Creative",
              "level": 100
            },
            {
              "type": "HTML",
              "level": 80
            },
            {
              "type": "CSS",
              "level": 80
            },
            {
              "type": "Javasrcipt",
              "level": 80
            },
            {
              "type": "React.js",
              "level": 70
            },
            {
                "type": "Node.js",
                "level": 60
            }
          ]
          const colors = {
            "bar": "#41A3C6",
            "title": {
              "text": "#ffffff",
              "background": "#266881"
            }
          }
            
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
                              background: `rgb(65, 163, 198, ${percentage * 1})`,
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
                          <div style={insideStyles}>Skills</div>
                      </div>
                  </Parallax>  
                  </div>
                  <div className="shome_skills">
                  <SkillBar skills={skills} colors={colors}/>
                  
                  </div>
              </React.Fragment>       
            </div>
                )
            }
        }

export default Home;

