import React, {Component} from 'react';

class Work extends Component {
    render (){
        return(
        <div className="swork">
            <React.Fragment>
                <div className="swork_tech"> 
                    <h1 className="swork_tech_title">Technologies</h1>  
                    <div className="work_btns">   
                        <div className="work_btn"><i class="fab fa-html5"></i></div>
                        <div className="work_btn"><i class="fab fa-css3-alt"></i></div>
                        <div className="work_btn"><i class="fab fa-js"></i></div>
                    </div>  
                    <div className="ver"> 
                        <button className="ver_btn">Ver más</button>
                    </div>
                </div> 
                <div className="swork_projects">
                    <h1 className="work_port">Projects</h1>
                </div>
            </React.Fragment>    
        </div>
        )
    }
}


export default Work;