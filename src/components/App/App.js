
import { Component } from 'react';
import './App.css';
import Main from '../Main';
import {Helmet} from "react-helmet";


class App extends Component{
  

  render() {
    return (
  

    <div className="App">
      <Helmet>
      <meta charSet="utf-8" />
      <title>homepaje</title>
      <link rel="canonical" href="http://ankit.com/example" />
      <meta name = "description " content = "tv series"/>

      <style>{`
       body{
         background-color :aqua
       }
       `}
      </style>
      </Helmet>

      <header className="App-header">
        <p>
           <code>Home  </code>
        </p>
      
      </header>
      <Main/>
    </div>
  
    );
  };
}

export default App;
