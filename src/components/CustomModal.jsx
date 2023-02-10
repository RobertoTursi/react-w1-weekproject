import { Component } from "react";


class CustomModal extends Component {

    state= {
        singleMovie: null
    }


    singleMovieFetch = async () => {
        try {
            const response = await fetch("https://www.omdbapi.com/?apikey=de0e22be&i=" + this.props.film)
        if(response.ok) {
            const data = await response.json()
            console.log(data, "data")
            this.setState(
                {
                    singleMovie: data
                }, () => {console.log(this.state.singleMovie, "data")}
            )
        } else {
            alert("Il response non è ok")
        }
        } catch (error) {
            alert("E' presente un errore di tipo error")
        }
        
    }

    componentDidMount(){
        this.singleMovieFetch()
    }

    render() {
        return (
            <>

{/* {this.state.array0fMovies && this.state.array0fMovies.Search.map(movie => 
                <div onClick={(e) => this.showFilm(movie.imdbID)} className="col mb-2 px-1" key={movie.imdbID}>
                  <img className="img-fluid" src={movie.Poster} alt="" />
                </div>)} */}
                
                {this.state.singleMovie && console.log(this.state.singleMovie, "questo")}
                
                {this.state.singleMovie && this.state.singleMovie.map(movie =>
               <div className="modal">
                    <div>
                        <h1>{movie.Title}</h1>
                    </div>
               </div>)}
            </>
            
        )
    }
}

export default CustomModal