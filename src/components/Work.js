import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import appoints from '../images/work/appointments.jpg'
import mallory from '../images/work/mallory.jpg'
import manager from '../images/work/mrmanager.jpg'
import university from '../images/work/university.jpg'
import me from '../images/work/me.jpg'
import ceramat from '../images/work/ceramat.jpg'
import onena from '../images/work/onena.jpg'
import natural from '../images/work/natural.jpg'
import paulette from '../images/work/paulette.jpg'
import mens from '../images/work/mens.jpg'
import lety from '../images/work/lety.jpg'
import aspasia from '../images/work/aspasia.jpg'
import friends from '../images/work/friends.jpg'
import habla from '../images/work/habla.jpg'
import fenaoa from '../images/work/fenaoa.jpg'
import { FaLink , FaGithub, FaGooglePlay, FaAppStore} from 'react-icons/fa';

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 200,
  },
};

class Work extends Component {

    constructor(){
    super()

    this.state={
        showTech: false
        }
    }   
    
    showMore = () => {
        this.setState({
            showTech: !this.state.showTech
        })
    }

    render (){

        const { classes } = this.props;

        return(
        <div className="swork">
            <React.Fragment>
                <div className="swork_tech"> 
                    {/* <h1 className="swork_tech_title">Technologies</h1>   */}
                    <div className="work_btns">   
                        <div className="work_btn"><i className="fab fa-html5"></i></div>
                        <div className="work_btn"><i className="fab fa-css3-alt"></i></div>
                        <div className="work_btn"><i className="fab fa-js"></i></div>
                    </div> 
                    { 
                    this.state.showTech?
                        <div className="work_btns_more">   
                        <div className="work_btn"><i className="fab fa-react"></i></div>
                        <div className="work_btn"><i className="fab fa-git"></i></div>
                        <div className="work_btn"><i className="icon-bootstrap"></i></div>
                        <div className="work_btn"><i className="fab fa-wordpress"></i></div>
                        <div className="work_btn"><i className="fab fa-adobe"></i></div>
                        <div className="work_btn"><i className="icon-heroku"></i></div>
                    </div> 
                    :null
                    } 
                    {
                    this.state.showTech?    
                        <div className="ver"> 
                            <button onClick={this.showMore} className="ver_btn">Show -</button>
                        </div>
                    :<div className="ver"> 
                        <button onClick={this.showMore} className="ver_btn">Show +</button>
                    </div>
                    }
                   
                </div> 
                <div className="swork_projects">
                    <h1 className="work_port">PROJECTS.</h1>

                    <div className="project_cards_dev">
                        <div className="projects_dev">
                            <Card className="card-back">
                                <CardMedia
                                    className={classes.media}
                                    image={aspasia}
                                    title="Aspasia"
                                    id="workImg"
                                    id="workImg"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Aspasia App
                                    </Typography>
                                    <Typography component="p">
                                        React Native Project / Android / IOS / React navigation / Search Engine / Login
                                    <br />
                                    <br />
                                    <br />
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button><a  href="https://play.google.com/store/apps/details?id=com.aspasiad" target="_blank">
                                    <FaGooglePlay  style={{fontSize: '22px'}}/>
                                    </a></Button>
                                    <Button><a>
                                    <FaAppStore style={{fontSize: '22px'}}/> 
                                    </a></Button>
                                    <Button><a  href="https://github.com/anilu556/Aspasia-App" target="_blank">
                                    <FaGithub style={{fontSize: '22px'}}/>
                                    </a></Button>
                                    
                                </CardActions>
                            </Card>
                        </div>
                        <div className="projects_dev">
                            <Card className="card-back">
                                <CardMedia
                                    className={classes.media}
                                    image={friends}
                                    title="Friends and Foxes"
                                    id="workImg"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Friends and Foxes
                                    </Typography>
                                    <Typography component="p">
                                        HTML / CSS / JS / Bootstrap / Git
                                    <br />
                                    <br />
                                    <br />
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" color="primary"><a href="https://friendsandfoxes.com/" target="_blank" rel="noopener noreferrer">
                                    <FaLink style={{fontSize: '22px'}} /> 
                                    </a></Button>
                                </CardActions>
                            </Card>
                        </div>
                        <div className="projects_dev">
                            <Card className="card-back">
                                <CardMedia
                                    className={classes.media}
                                    image={mens}
                                    title="Mens Fashion"
                                    id="workImg"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Mens Fashion
                                    </Typography>
                                    <Typography component="p">
                                    Salesfocre Commerce Cloud / HTML / CSS / JS / Bootstrap / React JS 
                                    <br />
                                    <br />
                                    <br />
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" color="primary"><a href="https://www.mensfashion.com.mx/" target="_blank" rel="noopener noreferrer">
                                        <FaLink style={{fontSize: '22px'}} /> 
                                    </a></Button>
                                </CardActions>
                            </Card>
                        </div>
                        <div className="projects_dev">
                            <Card className="card-back">
                                <CardMedia
                                    className={classes.media}
                                    image={lety}
                                    title="Pastelerías Lety"
                                    id="workImg"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Pastelerías Lety
                                    </Typography>
                                    <Typography component="p">
                                    Salesfocre Commerce Cloud / HTML / CSS / JS / Bootstrap / React JS 
                                    <br />
                                    <br />
                                    <br />
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" color="primary"><a href="https://www.pastelerialety.com/" target="_blank" rel="noopener noreferrer">
                                        <FaLink style={{fontSize: '22px'}} /> 
                                    </a></Button>
                                </CardActions>
                            </Card>
                        </div> 
                    </div>


                    <div className="project_cards_dev">

                        <div className="projects_dev">
                            <Card className="card-back">
                                <CardMedia
                                    className={classes.media}
                                    image={ceramat}
                                    title="Ceramat"
                                    id="workImg"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Ceramat
                                    </Typography>
                                    <Typography component="p">
                                    Vtex project / HTML / CSS / JS / Bootstrap / REST API lecture with HTTP methods
                                    <br />
                                    <br />
                                    <br />
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" color="primary"><a href="https://www.ceramat.com.mx/" target="_blank" rel="noopener noreferrer">
                                        <FaLink style={{fontSize: '22px'}} /> 
                                    </a></Button>
                                </CardActions>
                            </Card>
                        </div>
                        <div className="projects_dev">
                            <Card className="card-back">
                                <CardMedia
                                    className={classes.media}
                                    image={onena}
                                    title="Onena"
                                    id="workImg"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Onena
                                    </Typography>
                                    <Typography component="p">
                                    Vtex IO project / HTML / CSS / JS / Bootstrap / React JS / REST API lecture with HTTP methods
                                    <br />
                                    <br />
                                    <br />
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" color="primary"><a href="https://www.onena.mx/" target="_blank" rel="noopener noreferrer">
                                        <FaLink style={{fontSize: '22px'}} /> 
                                    </a></Button>
                                </CardActions>
                            </Card>
                        </div>
                        <div className="projects_dev">
                            <Card className="card-back">
                                <CardMedia
                                    className={classes.media}
                                    image={natural}
                                    title="Natural Scents"
                                    id="workImg"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Natural Scents
                                    </Typography>
                                    <Typography component="p">
                                    Vtex IO project / HTML / CSS / JS / Bootstrap / React JS / REST API lecture with HTTP methods
                                    <br />
                                    <br />
                                    <br />
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" color="primary"><a href="https://www.naturalscents.com.mx/" target="_blank" rel="noopener noreferrer">
                                        <FaLink style={{fontSize: '22px'}} /> 
                                    </a></Button>
                                </CardActions>
                            </Card>
                        </div>
                        <div className="projects_dev">
                            <Card className="card-back">
                                <CardMedia
                                    className={classes.media}
                                    image={paulette}
                                    title="Paulette"
                                    id="workImg"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Paulette
                                    </Typography>
                                    <Typography component="p">
                                    Vtex IO project / HTML / CSS / JS / Bootstrap / React JS / REST API lecture with HTTP methods
                                    <br />
                                    <br />
                                    <br />
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" color="primary"><a href="https://www.paulette.com.mx/" target="_blank" rel="noopener noreferrer">
                                        <FaLink style={{fontSize: '22px'}} /> 
                                    </a></Button>
                                </CardActions>
                            </Card>
                        </div> 
                    </div>
                    

                    <div className="project_cards_dev">
                        <div className="projects_dev">
                            <Card className="card-back">
                                <CardMedia
                                    className={classes.media}
                                    image={habla}
                                    title="Habla Conmigo"
                                    id="workImg"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Habla Conmigo
                                    </Typography>
                                    <Typography component="p">
                                    Wordpress website planning /
                                    Wordpress configuration and implementation of template /
                                    Use of HTML and CSS for content and design details /
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" color="primary"><a href="https://hablaconmigo.com.mx/" target="_blank" rel="noopener noreferrer">
                                        <FaLink style={{fontSize: '22px'}} /> 
                                    </a></Button>
                                </CardActions>
                            </Card>
                        </div>
                        <div className="projects_dev">
                            <Card className="card-back">
                                <CardMedia
                                    className={classes.media}
                                    image={me}
                                    title="Mundo Equino"
                                    id="workImg"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Revista Mundo Equino
                                    </Typography>
                                    <Typography component="p">
                                    Wordpress website planning /
                                    Wordpress configuration and implementation of template /
                                    Use of HTML and CSS for content and design details /
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" color="primary"><a href="https://revistamundoequino.com/" target="_blank" rel="noopener noreferrer">
                                        <FaLink style={{fontSize: '22px'}} /> 
                                    </a></Button>
                                </CardActions>
                            </Card>
                        </div>
                        <div className="projects_dev">
                            <Card className="card-back">
                                <CardMedia
                                    className={classes.media}
                                    image={fenaoa}
                                    title="Fenaoa"
                                    id="workImg"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Fenaoa
                                    </Typography>
                                    <Typography component="p">
                                    Wordpress website planning /
                                    Wordpress configuration and implementation of template /
                                    Use of HTML and CSS for content and design details /
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" color="primary"><a href="https://fenaoa.com/" target="_blank" rel="noopener noreferrer">
                                        <FaLink style={{fontSize: '22px'}} /> 
                                    </a></Button>
                                </CardActions>
                            </Card>
                        </div>
                        <div className="projects_dev">
                            <Card className="card-back">
                                <CardMedia
                                    className={classes.media}
                                    image={manager}
                                    title="Mr. Manager"
                                    id="workImg"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Mr. Manager
                                </Typography>
                                <Typography component="p">   
                                        Full design with ReactJS / CSS / Bulma for styles and Photoshop /
                                        REST API with NodeJs / Express / MongoDB and Mongoose /
                                        Deployed with Heroku and Netlify /
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" color="primary"><a href="https://github.com/anilu556/mr-manager-front" target="_blank" rel="noopener noreferrer">
                                    <FaGithub style={{fontSize: '22px'}}/>
                                </a></Button>
                                <Button size="small" color="primary"><a href="https://github.com/anilu556/mr-manager-back" target="_blank" rel="noopener noreferrer">
                                    <FaGithub style={{fontSize: '22px'}}/>
                                </a></Button>
                                <Button size="small" color="primary"><a href="https://mrmanager.netlify.com/#/" target="_blank" rel="noopener noreferrer">
                                    <FaLink style={{fontSize: '22px'}} /> 
                                </a></Button>
                            </CardActions>
                        </Card>
                        </div>
                    </div>    
                    <div className="project_cards_dev">
                    <div className="projects_dev">
                            <Card className="card-back">
                                <CardMedia
                                    className={classes.media}
                                    image={mallory}
                                    title="Mallory"
                                    id="workImg"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Mallory Furniture
                                    </Typography>
                                    <Typography component="p">
                                    React Front-end Project / 
                                    CSS flexbox /
                                    REST API lecture with HTTP methods /
                                    React Router /
                                    Deployed with Netlify /
                                    <br />
                                    <br />
                                    <br />
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" color="primary"><a href="https://github.com/anilu556/project--mallory-furniture" target="_blank" rel="noopener noreferrer">
                                        <FaGithub style={{fontSize: '22px'}}/>
                                    </a></Button>
                                    <Button size="small" color="primary"><a href="https://mallory-furniture-project.netlify.com/#/" target="_blank" rel="noopener noreferrer"> 
                                        <FaLink style={{fontSize: '22px'}} /> 
                                    </a></Button>
                                </CardActions>
                            </Card>
                        </div>
                        <div className="projects_dev">
                            <Card className="card-back">
                                <CardMedia
                                    className={classes.media}
                                    image={appoints}
                                    title="Appointments"
                                    id="workImg"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Register Appointments
                                    </Typography>
                                    <Typography component="p">
                                        React Redux Project / 
                                        Create, edit and delete elements /
                                        Use of Bootsrap for styles /
                                        Deployed with Netlify /
                                        <br />
                                        <br />
                                        <br />
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" color="primary"><a href="https://github.com/anilu556/reto-react-redux" target="_blank" rel="noopener noreferrer">
                                        <FaGithub style={{fontSize: '22px'}}/>
                                    </a></Button>
                                    <Button size="small" color="primary"><a href="https://appointments.netlify.com/" target="_blank" rel="noopener noreferrer">
                                        <FaLink style={{fontSize: '22px'}} /> 
                                    </a></Button>
                                </CardActions>
                            </Card>
                        </div>
                        <div className="projects_dev">
                            <Card className="card-back">
                                <CardMedia
                                    className={classes.media}
                                    image={university}
                                    title="University"
                                    id="workImg"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Westside University
                                    </Typography>
                                    <Typography component="p">
                                        React Router Project / 
                                        REST API lecture with HTTP methods / 
                                        REST API with NodeJs, Express, MongoDB and Mongoose / 
                                        Deployed with Heroku and Netlify /
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" color="primary"><a href="https://github.com/anilu556/university-website" target="_blank" rel="noopener noreferrer">
                                        <FaGithub style={{fontSize: '22px'}}/>
                                    </a></Button>
                                    <Button size="small" color="primary"><a href="https://github.com/anilu556/westside-university" target="_blank" rel="noopener noreferrer">
                                        <FaGithub style={{fontSize: '22px'}}/>
                                    </a></Button>
                                    <Button size="small" color="primary"><a href="https://westside-university.netlify.com/#/" target="_blank" rel="noopener noreferrer">
                                        <FaLink style={{fontSize: '22px'}} /> 
                                    </a></Button>
                                </CardActions>
                            </Card>
                        </div>
    
                    </div>
                </div>
            </React.Fragment>    
        </div>
        )
    }
}


export default withStyles(styles)(Work);