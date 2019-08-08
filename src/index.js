import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
//import json from "./mydata.json"; //console.log("Mydata", Mydata);
////////////////////////

fetch("https://derekmosher.github.io/work_to_display/mydata.json")
  .then(response => response.json())
  .then((jsonData) => {
    // jsonData is parsed json object received from url
    console.log( 'jsonData = ' + jsonData)
    //
    ReactDOM.render(
        <App 
            json= {jsonData}
            thumbs_banner={jsonData.items_banner}
            thumbs_social={jsonData.items_social}
            thumbs_yt={jsonData.items_youtube}
            thumbs_book={jsonData.items_book}
        />, 
        document.getElementById('root')
    );
  })
  .catch((error) => {
    // handle your errors here
    console.error(error)
  })
// ReactDOM.render(
//     <App 
//         json= {jsonData}
//         thumbs_banner={json.items_banner}
//         thumbs_social={json.items_social}
//         thumbs_yt={json.items_youtube}
//         thumbs_book={json.items_book}
//     />, 
//     document.getElementById('root')
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
