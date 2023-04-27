import React, {Component} from 'react';
import {TinyButton as ScrollUpButton} from "react-scroll-up-button";

class Scroll extends Component {
    render (){
        return(
            <div>
                <ScrollUpButton
                EasingType="easeInCubic"
                StopPosition={5}
                style={{background: '#4831D4', fill: 'white'}} 
                />
            </div>
        )
    }
}


export default Scroll;