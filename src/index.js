import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
//import json from "./mydata.json"; //console.log("Mydata", Mydata);
////////////////////////

// const link2 = "https://derekmosher.github.io/work_to_display/mydata.json"
//const link2 = "https://derekmosher.github.io/work_to_display/mydata_temp.json"
const link2 = "https://derekmosher.github.io/work_to_display/mydata.json"

fetch(link2)
  .then(response => response.json())
  .then((jsonData) => {
    // jsonData is parsed json object received from url
    console.log('hi j')
    console.dir( jsonData)
    //
    ReactDOM.render(
        <App 
            json= {jsonData}
            thumbs_design={jsonData.items_design}
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
