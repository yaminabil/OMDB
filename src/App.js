import MovieDisplay from "./components/MovieDisplay";
import Form from  "./components/Form";
import Header from "./components/Header"
import Footer  from "./components/Footer";

import {useState} from "react";


export default function App (){
    const apiKey = "97619273";
    const [movie,setMovie] = useState(null);

    //function that get the data 
    const getMovie = async (searchTerm)=> {

        try {
            const response = await fetch (`http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`);
            const data = await response.json();
            setMovie(data);

        } catch (error) {
            console.log(error);
        }

    }


    return (
        <div className = "App">
            <Header />
            <Form moviesearch = {getMovie} />
            <MovieDisplay movie = {movie} />
            <Footer />
            </div>
    )
}