import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const CardComponent = (props) => {

  const [movieArr, setMovieArr] = useState([])

  const fetchMovie = async () => {
    let response = await fetch(
      `http://www.omdbapi.com/?apikey=1d44bf2a&s=${props.movieName}`
    );
    if (response.ok) {
      let data = await response.json();
      data = data.Search;
      setMovieArr(data)
    }else{
      console.log(response.error)
    }
  }
  
  useEffect(()=>{
    fetchMovie()
  },[])
  return (
    <>
        {movieArr.map((e) => (
          <div className="col mb-2 px-1" key={e.imdbID}>
            <Link to={`/single-movie/${e.imdbID}`}>
              <img className="img-fluid" src={e.Poster} alt="movie picture" style={{width:'200px',height:'308px'}} />
            </Link>
        </div>
        ))}
      </>
    );
  }
    
    export default CardComponent;
    