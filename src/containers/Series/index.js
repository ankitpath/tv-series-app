import { Component } from 'react';
import * as apiCalls from "../../components/App/api";
import SearchResults from "../../components/SearchResults";
import Form from "../../components/Form";
import SeriesList from '../../components/SeriesList';
import Loader from '../../components/Loader';
import Intro from  '../../components/Intro';

class Series extends Component {
    constructor(props){
        super(props);
        this.state = {
            series: [],
            inputValue: "",
            isFetching: false,
            results: []
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount(){
        this.loadShows("Walking Dead");
      }
    
    async loadShows(title){
        let series = await apiCalls.getShow(title);
        this.setState({series});
    }

    async loadSearch(title){
        let results = await apiCalls.getShow(title);
        this.setState({results,isFetching:false});
    }
    
    handleChange(e){
        let inputValue = e.target.value;
        this.setState({inputValue,isFetching:true});
        apiCalls.getShow(inputValue).then(res=>(this.setState({results:res,isFetching:false})));

    }

    handleSubmit(e){
        e.preventDefault();
        this.loadShows(this.state.inputValue);
        let inputValue = "";
        this.setState({...this.state,inputValue});
    }

    render(){
        const {series, inputValue, results,isFetching} = this.state;

        let views = <div style={{marginLeft:"50%"}}><Loader /></div>;

        if(series.length>0){
            views = (
                <SeriesList list={series} />
            )
        }

        return(
            <div>
                <Intro message = "find your loved series" />
                <div>
                    <Form 
                    onChange={this.handleChange}
                    onSubmit = {this.handleSubmit}
                    value = {inputValue} />
                    <SearchResults 
                     isFetching={isFetching}
                     results={results}
                     inputValue={inputValue}   
                    />
                </div>
                <div className="series">
                    {views}
                </div>
            </div>
        );
    }
}

export default Series;