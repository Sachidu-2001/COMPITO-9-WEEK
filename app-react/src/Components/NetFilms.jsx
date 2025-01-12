import { Component } from "react";

class NetFilms extends Component {
    state = {
        Movies:[],
    }
    

    getMoviesThenCatch = () => {
        fetch('https://www.omdbapi.com/?apikey=a69bf1d9&s=South%20Park')
        .then((response) => {
            
            if(response.ok) {

                return response.json()
            } else {
                throw new Error('Errore nella chiamata API')
            }
        })

        .then()
    
    }
  }


export default NetFilms;
