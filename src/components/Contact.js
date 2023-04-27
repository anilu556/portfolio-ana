import React, {Component} from 'react';

class Contact extends Component {
    render (){
        return(
        <div className="scontact">
            <h1 className="cont_port">CONTACT ME.</h1>    
            <div className="contact_columns">
                <div className="contact_left">
                    <div className="contact_space">
                        <i class="fas fa-envelope-open-text"></i>
                    </div>
                    <div className="contact_space">
                        <i class="fas fa-mobile-alt"></i>
                    </div>
                    <div className="contact_space">
                        <i class="fas fa-thumbtack"></i>
                    </div>
                </div>
                <div className="contact_middle">
                    <div className="contact_space">
                        <span className="contact_span">Email Me</span>
                        <span className="contact_desc"> I'll be happy to receive an email from you and schedule a first meeting.</span>
                    </div>
                    <div className="contact_space">
                        <span className="contact_span">You want to chat?</span>
                        <span className="contact_desc"> Let's talk. Either by message or call, I can't wait to tell you more about me.</span>
                    </div>
                    <div className="contact_space">
                        <span className="contact_span">Where I am?</span>
                        <span className="contact_desc"> I'm from Mexico City but I moved to Guadalajara four years ago.</span>
                    </div>
                </div>
                <div className="contact_right">
                    <div className="contact_space">
                        <p className="contact_text"><a href="mailto:anadev.glz@gmail.com?Subject=Hello!" target="_top">anadev.glz@gmail.com</a></p>
                    </div>
                    <div className="contact_space">
                        <p className="contact_text"><a href="https://wa.me/525512895983" target='_blank'>55 1289 5983</a></p>
                    </div>
                    <div className="contact_space">
                        <p className="contact_text">GDL / CDMX</p>
                    </div>
                </div>
           </div>
        </div>
        )
    }
}


export default Contact;