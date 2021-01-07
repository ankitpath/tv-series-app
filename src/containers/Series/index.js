import { Component } from 'react';
import SeriesList from '../../components/SeriesList';
import Loader from '../../components/Loader';
import Intro from  '../../components/Intro';

class Series  extends Component {
    state = {
        series : [],
        seriesName : '',
        isFetching : false
      }
      
    
        onChangeInputSeries = e =>{
            this.setState ({seriesName : e.target.value,isFetching : true })

        fetch(`http://api.tvmaze.com/shows?q=${e.target.value}`)
        .then(response => response.json())
        .then(json => {
            console.log(json)
            this.setState({series : json,isFetching : false})
        })
         
        }
        
    
      
    render(){
        
        const { series, seriesName, isFetching } = this.state
        return (
            

            <div>
                <Intro message = "HERE U FIND UR FAVOURITE TV SERIES"/>
               the length of the series array is :{this.state.series.length} 
               <div>
            <input 
                value={seriesName}
            type = " text" onChange = {this.onChangeInputSeries}/>
            </div>
            {
               !isFetching && series.length === 0 && seriesName.trim === ''
                && 
                <p> please enter series name </p>
            }
            {
               !isFetching && series.length === 0 && seriesName.trim !== ''
                &&
                <p>no tv series is found </p>
            }
                {
                    isFetching && <Loader/>
                }
                {

                isFetching &&   <SeriesList list = {this.state.series}/>
    }            
            
                  

            </div>
         )
        }
    
}
export default Series;