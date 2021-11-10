import { useCallback, useRef, useState } from "react";
import { MoviesContainer, MoviesPoster, MoviesRow, MoviesRowLeft, MoviesRowRight, MoviesTitle } from "../styles";
import Modal, { ModalHandles } from "./Modal";

import image from '../logo.svg';
function Movies({ title, movies }: any) {
    
    const [scrollX, setScrollX] = useState(0);
    const [moviesSize, setMoviesSize] = useState(window.innerWidth);

    const modalRef = useRef<ModalHandles>(null);

    const handleOpenModal = useCallback((movie)=>{
        modalRef.current?.openModal(movie);
    },[]);
    
    const handleLeft = () => {
        let x = scrollX + Math.round(window.innerWidth / 2);
        if (x > 0) {
            x = 0;
        }
        setScrollX(x)
    }

    const handleRight = () => {
        let x = scrollX - Math.round(window.innerWidth / 2);
        setMoviesSize(movies.length * 200);
        if ((window.innerWidth - moviesSize) > x) {
            x = (window.innerWidth - moviesSize) - 60;
        }
        setScrollX(x)
    }

    return (
        <>
        <Modal ref={modalRef}/>
        <MoviesContainer>
            
            <MoviesTitle>{title}
            
            </MoviesTitle>
            <MoviesRow style={{ marginLeft: scrollX, width: moviesSize }}>
                <MoviesRowLeft onClick={handleLeft}>
                    <img src={image} style={{ fontSize: 50 }} alt={image}/>
                </MoviesRowLeft>
                <MoviesRowRight onClick={handleRight}>
                    <img src={image} style={{ fontSize: 50 }} alt={image}/>
                </MoviesRowRight>
                {movies.map((movie: any) => (
                    <MoviesPoster
                        key={movie.id}
                        src={"https://image.tmdb.org/t/p/w300" + movie.poster_path}
                        alt={movie.name}
                        onClick={() => handleOpenModal(movie)}
                    />
                ))}
            </MoviesRow>
            
        </MoviesContainer>
        </>
    );
}

export default Movies;