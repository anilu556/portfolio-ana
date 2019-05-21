import React, {Component} from 'react';
import { VerticalTimeline, VerticalTimelineElement}  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

class Prueba extends Component {
    render (){
        return(
          <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2012 - 2014 | 2016 - 2018"
            iconStyle={{ background: 'rgb(96, 227, 229)', color: '#fff'}}
            icon={<i class="fas fa-briefcase"></i>}
          >
            <h3 className="vertical-timeline-element-title">Web Coordinator</h3>
            <h4 className="vertical-timeline-element-subtitle">Prototipo México</h4>
            <p>Web sites creation and actualization| Community Manager | Digital and multimedia content planner </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2014 - 2016"
            iconStyle={{ background: 'rgb(96, 227, 229)', color: '#fff' }}
            icon={<i class="fas fa-briefcase"></i>}
          >
            <h3 className="vertical-timeline-element-title">Web Editor</h3>
            <h4 className="vertical-timeline-element-subtitle">Sección Amarilla</h4>
            <p>Descriptive texts elaboration for digital products | SEO strategies </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2010 - 2012"
            iconStyle={{ background: 'rgb(96, 227, 229)', color: '#fff' }}
            icon={<i class="fas fa-briefcase"></i>}
          >
            <h3 className="vertical-timeline-element-title">Web Editor</h3>
            <h4 className="vertical-timeline-element-subtitle">Editorial Televisa</h4>
            <p>Administration of information resources | Web content creation | Images and video edition</p>
          </VerticalTimelineElement>  
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2018 - 2019"
            iconStyle={{ background: 'rgb(14, 178, 204)', color: '#fff'}}
            icon={<i className="fas fa-graduation-cap"></i>}
          >
            <h3 className="vertical-timeline-element-title">Jr. Full-stack Web Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">Muktek Academy</h4>
            
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2006 - 2010"
            iconStyle={{ background: 'rgb(14, 178, 204)', color: '#fff' }}
            icon={<i className="fas fa-graduation-cap"></i>}
          >
            <h3 className="vertical-timeline-element-title">B.D. Communication</h3>
            <h4 className="vertical-timeline-element-subtitle">Universidad La Salle</h4>
          </VerticalTimelineElement>
        </VerticalTimeline>
        )
    }
}

export default Prueba;