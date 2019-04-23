import React, {Component} from 'react';

class Footer extends Component {
    render (){
        return(
        <div className="footer">
            <div className="icons">
                <ul>
                    <a href="https://www.linkedin.com/in/anagop/" target="_blank" rel="noopener noreferrer"><li><i className="fab fa-linkedin-in"></i></li></a>
                    <a href="https://github.com/anilu556" target="_blank" rel="noopener noreferrer"><li><i className="fab fa-github"></i></li></a>
                    <a href="https://twitter.com/anilu556" target="_blank" rel="noopener noreferrer"><li><i className="fab fa-twitter"></i></li></a>
                    <a href="https://www.instagram.com/anilu556/" target="_blank" rel="noopener noreferrer"><li><i class="fab fa-instagram"></i></li></a>
                </ul>
                <p className="copyright"> © Ana González</p>
            </div>    
        </div>
        )
    }
}

export default Footer;