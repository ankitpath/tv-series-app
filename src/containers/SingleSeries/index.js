import React, {Component} from "react";
import * as apiCalls from "../../components/App/api";
import {Helmet} from "react-helmet";
import Tvseries from '../../Tvseries.ico';

class SingleSeries extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            show: null,
        };
    }
    componentDidMount(){
        let {id} = this.props.match.params;
        this.loadSingleShow(id);
    }

    async loadSingleShow(id){
        let show = await apiCalls.getSingleShow(id);
        this.setState({show});
        console.log({show})
    }

    render(){
        <header className="Apps-header">
        <p>
           <code>Series Details Here...</code>
        </p>
      
      </header>
        let views;
        let {show} = this.state;
        let regexp = /<p>|<b>|<\/p>|<\/b>/gm;
        
        this.state.show !== null?
            views = (
                <div className="single-show">
                    <Helmet>
                <meta charSet="utf-8" />
                <title>tv series details</title>
                <link rel="canonical" href="http://ankit1.com/examp" />
                <link rel="icon" href={Tvseries} />
            </Helmet>
            
                    <div className="show-image">
                        <img src={show.image.medium} alt={show.name} />
                    </div>
                    <div className="show-info">
                        <h2 className="show-title">{show.name}</h2>
                        <span><strong>Genres: </strong></span>
                        {
                            show.genres.map((g,i)=>(
                                <span key={i}>{g} </span>
                            ))
                        }
                        <p>
                            {show.summary.replace(regexp,"")}
                        </p>
                        <p><strong><a href={show.officialSite}>{show.name} Official Site</a></strong></p>
                    </div>
                </div>
            ):views=(<div style={{marginLeft:"65%"}}></div>);
        
        
        return(
            <div>
               {views}
            </div>
        );
    }
}

export default SingleSeries;