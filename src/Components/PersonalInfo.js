import React, { Component } from "react";
import Typed from 'react-typed';
import Fade from 'react-reveal/Fade';
import Loader from 'react-loader-spinner'
import '../App.css'
import resume from "../items/resume.pdf"
class PersonalInfo extends Component {

    constructor(props){
        super(props);
        this.state = {
            showSearching: true,
            changeTitle: false
        }
    }

    componentDidMount(){
        let that = this
        setTimeout(function(){ 
            setTimeout(function(){ 
                that.setState({
                    showSearching: false
                })
            }, 1000)
            that.setState({
                changeTitle: true
            })
        }, 1000)
    }

    renderTyped(){
        if(this.state.showSearching){
            return(
                <div className="loader-container">
                    <Fade>
                        <Loader
                            type="Puff"
                            color="#7ec6e280"
                            height={30}
                            width={30}
                        />
                    </Fade>
                </div>
            )
        }
        else{
            return(
                <div className="info-text-container">
                    <Typed
                        className="info-text"
                        strings={[
                            `<span id="label">NAME:</span> Roy Chowdhury\n<span id="label">EMAIL:</span> konishky@ualberta.ca\n<span id="label">LOCATION:</span> Calgary Area\n<span id="label">SKILL:</span> Developer\n<span id="label">TOOLS:</span> React, Javascript, HTML/CSS\n\n<span id="label">PROJECTS:</span> \n - Haptik [<a target="_blank" href="https://www.youtube.com/watch?v=AuXUHH6Y-l8">Demo</a>]\n - Social Network [<a target="_blank" href="https://github.com/CMPUT404W20/CMPUT404-project-socialdistribution">Repo</a>][<a target="_blank" href="https://cmput404-socialdistribution.herokuapp.com/">Demo</a>]\n - HealthX [<a target="_blank" href="https://github.com/roychowd/HealthX">Repo</a>][<a target="_blank" href="https://www.youtube.com/watch?v=Euk8130vuzs&t=5s">Demo</a>]\n \n\n<span id=label>LINKS: </span>[<a id="bottom-link" href="https://github.com/roychowd" target="_blank">Github</a>] [<a id="bottom-link" href="https://www.linkedin.com/in/roy-chowdhury-0ab93b184/" target="_blank">LinkedIn</a>] [<a id="bottom-link" href=${resume} download="Resume.pdf">Resume</a>] `
                        ]}
                        typeSpeed={0.1}
                    />
                </div>
            )
        }
    }

    expandStyle(){
        if(this.state.changeTitle){
            return null
        }else{
            return({
                width: '30px'
            })
        }
    }

    render() {
        return (
            <div className="info">

                <Fade>
                    {!this.state.changeTitle ?
                        <div>
                            <h1 className="info-title">SEARCHING DATABASE</h1>
                        </div> :
                        <Fade>
                            <div>
                                <h1 className="info-title">1 DEVELOPER(S) FOUND</h1> 
                            </div>
                        </Fade>
                    }
                </Fade>

                <div style={{ display: 'flex', flexDirection: 'row' }}>

                    <div className="info-container" style={this.expandStyle()}>
                        <div className="info-corners-top">
                            <div className="info-corners-bottom"></div>
                        </div>
                        {this.renderTyped()}
                    </div>

                </div>

            </div>
        )
  }
}

export default PersonalInfo

// 'NAME: Roy Chowdhury\nSKILLS: React, Javascript, HTML + CSS\nOCCUPATION: Looking\nLINKS: Github, LinkedIn, Resume'
//- Cataloguer [<a target="_blank" href="">Repo</a>][<a target="_blank" href="">Demo</a>]\n\n