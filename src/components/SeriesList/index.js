import React from 'react';
import './index.css';
import {Link} from 'react-router-dom';



const SeriesListItem = ({series}) => (
    <li>
        <Link to = {`/series/${series.id}`}/>
       {series.name} 
    </li>
)


const SeriesList = (props)=>{
    return(
        <div>
            tv series... 
            <ul className = "series-list">
            {props.list.map(series =>(
             <SeriesListItem series = {series}/>
            ))}
                </ul>

        </div>
    )
}
export default SeriesList;
