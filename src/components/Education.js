import React, {Component} from 'react';
import { VerticalTimeline, VerticalTimelineElement}  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

class Prueba extends Component {
    render (){
        return(
          <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
          >
            <ul>
            <h1 className="about_port">WORK EXPERIENCE.</h1>
              <li>
                <h3 className="vertical-timeline-element-title">Front-end Developer</h3>
                <h4 className="vertical-timeline-element-subtitle">Punto Commerce</h4>
                <p> Development of e commerce with Vtex and Salesforce platforms</p>
                <p>2019 - Current</p>
              </li>
              <li>            
                <h3 className="vertical-timeline-element-title">Web Coordinator</h3>
                <h4 className="vertical-timeline-element-subtitle">Prototipo México</h4>
                <p>Web sites creation and actualization| Community Manager | Digital and multimedia content planner </p>
                <p>2012 - 2014 | 2016 - 2018</p>
              </li>
              <li>
                <h3 className="vertical-timeline-element-title">Web Editor</h3>
                <h4 className="vertical-timeline-element-subtitle">Sección Amarilla</h4>
                <p>Descriptive texts elaboration for digital products | SEO strategies </p>
                <p>2014 - 2016</p>
              </li>
              <li>
                <h3 className="vertical-timeline-element-title">Web Editor</h3>
                <h4 className="vertical-timeline-element-subtitle">Editorial Televisa</h4>
                <p>Administration of information resources | Web content creation | Images and video edition</p>
                <p>2010 - 2012</p>
              </li>
            </ul>
           
          </VerticalTimelineElement>
        </VerticalTimeline>
        )
    }
}

export default Prueba;