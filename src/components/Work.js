import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
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
import training from '../images/training.png'
import mole from '../images/mole.png'

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
                        <div className="work_btn"><i className="fab fa-node"></i></div>
                        <div className="work_btn"><i className="fab fa-git"></i></div>
                        <div className="work_btn"><i className="fab fa-wordpress"></i></div>
                        <div className="work_btn"><i className="fab fa-adobe"></i></div>
                        <div className="work_btn"><i className="icon-mongodb"></i></div>
                        <div className="work_btn"><i className="icon-heroku"></i></div>
                    </div> 
                    :null
                    } 
                    {
                    this.state.showTech?    
                        <div className="ver"> 
                            <button onClick={this.showMore} className="ver_btn">Ver menos</button>
                        </div>
                    :<div className="ver"> 
                        <button onClick={this.showMore} className="ver_btn">Ver más</button>
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
                                    image={appoints}
                                    title="Appointments"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Register Appointments
                                    </Typography>
                                    <Typography component="p">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                        across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" color="primary">
                                    Github
                                    </Button>
                                    <Button size="small" color="primary">
                                    Deploy
                                    </Button>
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
                                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                        across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" color="primary">
                                        Github
                                    </Button>
                                    <Button size="small" color="primary">
                                        Deploy
                                    </Button>
                                </CardActions>
                            </Card>
                        </div>
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
                                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                        across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" color="primary">
                                        Github
                                    </Button>
                                    <Button size="small" color="primary">
                                        Deploy
                                    </Button>
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
                                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                    across all continents except Antarctica
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Github
                                </Button>
                                <Button size="small" color="primary">
                                    Deploy
                                </Button>
                            </CardActions>
                        </Card>
                        </div>
                    </div>    
                    <div className="project_cards_wp">
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
                                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                    across all continents except Antarctica
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Link
                                </Button>
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
                                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                        across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" color="primary">
                                        Link
                                    </Button>
                                </CardActions>
                            </Card>
                        </div>
                        <div className="projects_wp">
                            <Card className={classes.card}>
                                <CardMedia
                                    className={classes.media}
                                    image={training}
                                    title="Mr. Manager"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Training Camp
                                    </Typography>
                                    <Typography component="p">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                        across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" color="primary">
                                        Link
                                    </Button>
                                </CardActions>
                            </Card>
                        </div>
                        <div className="projects_wp">
                            <Card className={classes.card}>
                                <CardMedia
                                    className={classes.media}
                                    image={mole}
                                    title="Mole Gloria Elena"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Mole Gloria Elena
                                    </Typography>
                                    <Typography component="p">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                        across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" color="primary">
                                        Link
                                    </Button>
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