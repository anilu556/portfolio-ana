import React, {Component} from 'react';
import {TinyButton as ScrollUpButton} from "react-scroll-up-button";

class Scroll extends Component {
    render (){
        return(
            <div>
                <ScrollUpButton
                EasingType="easeInCubic"
                StopPosition={10}
                style={{background: '#41A3C6', fill: 'white'}} 
                />
            </div>
        )
    }
}


export default Scroll;