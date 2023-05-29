import React from "react";

const MovieList =(props)=>{
    const FavouriteComponent = props.favouriteComponent;
    return(
        <>
            {props.movies.map((movie, index) => (
				<div className='image-container d-flex justify-content-start col-sm-3'>
					<img src={movie.Poster} alt='movie'></img>
					< div className="overlay d-flex align-items justify-content">
                        <FavouriteComponent/>
                    </div>
				</div>
			))}
        </>
    )
}

export default MovieList;