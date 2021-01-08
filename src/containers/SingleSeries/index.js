import React,{Component} from 'react';
import Loader from '../../components/Loader';
import {Helmet} from "react-helmet";

class SingleSeries extends Component {
    state = {
        show : null
    }
    componentDidMount(){

        const {id} = this.props.match.params.id
        fetch(`http://api.tvmaze.com/shows?q=vkings${id}?embed-episodes`)
        .then(response => response.json())
        .then(json => this.setState({show: json}))

    }
        
    render(){
        const {show} = this.state
        console.log(show)
        console.log(this.props);
        return(
            <div>
                <Helmet>
      <meta charSet="utf-8" />
      <title>details list</title>
      <link rel="canonical" href="http://ankit.com/example" />
      <meta name = "description " content = "tv series details"/>
      <style>{`
       body{
         background-color :aqua
       }
       `}
      </style>
      </Helmet>
            { show === null && <Loader/>}
            {
                show !==null 
                && 
                <div>
                    <p>show name{show.name}</p>
                    <p>premiered-{show.premiered}</p>
                    <p>show id-{show.id}</p>
                    <p>
                        <img alt ="show" src = {show.image}/>
                    </p>
                    <p>show url -{show.url}</p>
                    </div>
            }
            </div>
        )
    }
}
export default SingleSeries ;