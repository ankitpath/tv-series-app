import React,{Component} from 'react';
import Loader from '../../components/Loader';

class SingleSeries extends Component {
    state = {
        show : null
    }
    componentDidMount(){

        const {id} = this.props.match.params.id
        fetch('http://api.tvmaze.com/shows${id}?embed-episodes')
        .then(response => response.json())
        .then(json => this.setState({show: json}))

    }
        
    render(){
        const {show} = this.state
        console.log(show)
        console.log(this.props);
        return(
            <div>
            { show === null && <Loader/>}
            {
                show !==null 
                && 
                <div>
                    <p>{show.name}</p>
                    <p>premiered{show.premiered}</p>
                    <p>show rating{show.rating.average}</p>
                    <p>
                        <img alt ="show" src = {show.image.medium}/>
                    </p>
                    </div>
            }
            </div>
        )
    }
}
export default SingleSeries ;