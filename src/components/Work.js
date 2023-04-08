import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import appoints from '../images/appointments.png'
import mallory from '../images/mallory.png'
import manager from '../images/mrmanager.png'
import university from '../images/university.png'
import dits from '../images/dits.png'
import me from '../images/me.png'
import ceramat from '../images/ceramat.png'
import onena from '../images/onena.png'
import natural from '../images/natural.png'
import paulette from '../images/paulette.png'
import mens from '../images/mens.png'
import lety from '../images/lety.png'
import aspasia from '../images/aspasia.png'
import friends from '../images/friends.png'
import habla from '../images/habla.png'
import fenaoa from '../images/fenaoa.png'

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
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
                    <h1 className="swork_tech_title">Technologies</h1>  
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
                    <h1 className="work_port">Projects</h1>

                    <div className="project_cards_dev">

                        <div className="projects_dev">
                            <Card className={classes.card}>
                                <CardMedia
                                    className={classes.media}
                                    image={aspasia}
                                    title="Aspasia"
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
                                    <Button size="small" color="primary"><a  rel="noopener noreferrer">
                                        On process to release
                                    </a></Button>
                                </CardActions>
                            </Card>
                        </div>
                        <div className="projects_dev">
                            <Card className={classes.card}>
                                <CardMedia
                                    className={classes.media}
                                    image={friends}
                                    title="Friends and Foxes"
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
                                        Link
                                    </a></Button>
                                </CardActions>
                            </Card>
                        </div>
                        <div className="projects_dev">
                            <Card className={classes.card}>
                                <CardMedia
                                    className={classes.media}
                                    image={mens}
                                    title="Mens Fashion"
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
                                        Link
                                    </a></Button>
                                </CardActions>
                            </Card>
                        </div>
                        <div className="projects_dev">
                            <Card className={classes.card}>
                                <CardMedia
                                    className={classes.media}
                                    image={lety}
                                    title="Pastelerías Lety"
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
                                        Link
                                    </a></Button>
                                </CardActions>
                            </Card>
                        </div> 
                    </div>


                    <div className="project_cards_dev">

                        <div className="projects_dev">
                            <Card className={classes.card}>
                                <CardMedia
                                    className={classes.media}
                                    image={ceramat}
                                    title="Ceramat"
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
                                        Link
                                    </a></Button>
                                </CardActions>
                            </Card>
                        </div>
                        <div className="projects_dev">
                            <Card className={classes.card}>
                                <CardMedia
                                    className={classes.media}
                                    image={onena}
                                    title="Onena"
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
                                        Link
                                    </a></Button>
                                </CardActions>
                            </Card>
                        </div>
                        <div className="projects_dev">
                            <Card className={classes.card}>
                                <CardMedia
                                    className={classes.media}
                                    image={natural}
                                    title="Natural Scents"
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
                                        Link
                                    </a></Button>
                                </CardActions>
                            </Card>
                        </div>
                        <div className="projects_dev">
                            <Card className={classes.card}>
                                <CardMedia
                                    className={classes.media}
                                    image={paulette}
                                    title="Paulette"
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
                                        Link
                                    </a></Button>
                                </CardActions>
                            </Card>
                        </div> 
                    </div>
                    

                    <div className="project_cards_dev">
                        <div className="projects_dev">
                            <Card className={classes.card}>
                                <CardMedia
                                    className={classes.media}
                                    image={mallory}
                                    title="Mallory"
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
                                        Github
                                    </a></Button>
                                    <Button size="small" color="primary"><a href="https://mallory-furniture-project.netlify.com/#/" target="_blank" rel="noopener noreferrer"> 
                                        Deploy
                                    </a></Button>
                                </CardActions>
                            </Card>
                        </div>
                        <div className="projects_dev">
                            <Card className={classes.card}>
                                <CardMedia
                                    className={classes.media}
                                    image={appoints}
                                    title="Appointments"
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
                                    Github
                                    </a></Button>
                                    <Button size="small" color="primary"><a href="https://appointments.netlify.com/" target="_blank" rel="noopener noreferrer">
                                    Deploy
                                    </a></Button>
                                </CardActions>
                            </Card>
                        </div>
                        <div className="projects_dev">
                            <Card className={classes.card}>
                                <CardMedia
                                    className={classes.media}
                                    image={university}
                                    title="University"
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
                                    Github Front
                                    </a></Button>
                                    <Button size="small" color="primary"><a href="https://github.com/anilu556/westside-university" target="_blank" rel="noopener noreferrer">
                                    Github Back
                                    </a></Button>
                                    <Button size="small" color="primary"><a href="https://westside-university.netlify.com/#/" target="_blank" rel="noopener noreferrer">
                                    Deploy
                                    </a></Button>
                                </CardActions>
                            </Card>
                        </div>
                        <div className="projects_dev">
                            <Card className={classes.card}>
                                <CardMedia
                                    className={classes.media}
                                    image={manager}
                                    title="Mr. Manager"
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
                                    Github Front
                                </a></Button>
                                <Button size="small" color="primary"><a href="https://github.com/anilu556/mr-manager-back" target="_blank" rel="noopener noreferrer">
                                    Github Back
                                </a></Button>
                                <Button size="small" color="primary"><a href="https://mrmanager.netlify.com/#/" target="_blank" rel="noopener noreferrer">
                                    Deploy
                                </a></Button>
                            </CardActions>
                        </Card>
                        </div>
                    </div>    
                    <div className="project_cards_wp">

                        <div className="projects_wp">
                            <Card className={classes.card}>
                                <CardMedia
                                    className={classes.media}
                                    image={habla}
                                    title="Habla Conmigo"
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
                                        Link
                                    </a></Button>
                                </CardActions>
                            </Card>
                        </div>
                        <div className="projects_wp">
                            <Card className={classes.card}>
                                <CardMedia
                                    className={classes.media}
                                    image={me}
                                    title="Mundo Equino"
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
                                        Link
                                    </a></Button>
                                </CardActions>
                            </Card>
                        </div>
                        <div className="projects_wp">
                            <Card className={classes.card}>
                                <CardMedia
                                    className={classes.media}
                                    image={fenaoa}
                                    title="Fenaoa"
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
                                        Link
                                    </a></Button>
                                </CardActions>
                            </Card>
                        </div>
                        <div className="projects_wp">
                        <Card className={classes.card}>
                            <CardMedia
                                className={classes.media}
                                image={dits}
                                title="Dits"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Dits Consulting S.C.
                                </Typography>
                                <Typography component="p">
                                    Wordpress website planning /
                                    Wordpress configuration and implementation of template /
                                    Use of HTML and CSS for content and design details /
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" color="primary"><a href="http://dits.com.mx/" target="_blank" rel="noopener noreferrer">
                                    Link
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