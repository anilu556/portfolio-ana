import React, {Component} from 'react';
import { FaChevronRight } from 'react-icons/fa';

class Prueba extends Component {
  

    render (){
      const reveal = () => {
        var reveals = document.querySelectorAll(".reveal");
      
        for (var i = 0; i < reveals.length; i++) {
          var windowHeight = window.innerHeight;
          var elementTop = reveals[i].getBoundingClientRect().top;
          var elementVisible = 150;
      
          if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
          } else {
            reveals[i].classList.remove("active");
          }
        }
      }
      
      window.addEventListener("scroll", reveal);
        return(
          <div class="aboutWork">
            <h1 className="about_port">WORK EXPERIENCE.</h1>
            <ul>
              <li>
                <div className='reveal'>
                  <h3 className="aboutWork-title"><FaChevronRight style={{fontSize: '12px'}}/>Freelance Frontend Developer</h3>
                  <h4 className="aboutWork-subtitle">Friends and Foxes</h4>
                  <p> Website and mobile applications Development</p>
                  <p>2022 - Current</p>
                </div>
              </li>
              <li>
                <div className='reveal'>
                  <h3 className="aboutWork-title"><FaChevronRight style={{fontSize: '12px'}}/> Frontend Developer</h3>
                  <h4 className="aboutWork-subtitle">Punto Commerce</h4>
                  <p> Development of e commerce with Vtex and Salesforce platforms</p>
                  <p>2019 - Current</p>
                </div>
              </li>
              <li>            
                <div className='reveal'>
                  <h3 className="aboutWork-title"><FaChevronRight style={{fontSize: '12px'}}/> Web Coordinator</h3>
                  <h4 className="aboutWork-subtitle">Prototipo México</h4>
                  <p>Web sites creation and actualization| Community Manager | Digital and multimedia content planner </p>
                  <p>2012 - 2014 | 2016 - 2018</p>
                </div>
              </li>
              <li>
                <div className='reveal'>
                  <h3 className="aboutWork-title"><FaChevronRight style={{fontSize: '12px'}}/> Web Editor</h3>
                  <h4 className="aboutWork-subtitle">Sección Amarilla</h4>
                  <p>Descriptive texts elaboration for digital products | SEO strategies </p>
                  <p>2014 - 2016</p>
                </div>
              </li>
              <li>
                <div className='reveal'>
                  <h3 className="aboutWork-title"><FaChevronRight style={{fontSize: '12px'}}/> Web Editor</h3>
                  <h4 className="aboutWork-subtitle">Editorial Televisa</h4>
                  <p>Administration of information resources | Web content creation | Images and video edition</p>
                  <p>2010 - 2012</p>
                </div>
              </li>
            </ul>
          </div>
        )
    }
}

export default Prueba;