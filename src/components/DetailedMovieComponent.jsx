import { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import {Card} from "react-bootstrap";
const DetailedMovieComponent = () => {
    const params = useParams();

  const [movie, setMovie] = useState({});

  const fetchSingleMovie = async () => {
    let response = await fetch(
      `http://www.omdbapi.com/?apikey=1d44bf2a&i=${params.id}`
    );

    if (response.ok) {
      let data = await response.json();
      setMovie(data);
    } else {
      console.log("error");
    }
  };
  useEffect(() => {
    fetchSingleMovie();
  }, [params.id]);
  return (
    <>
    <Card style={{ width: "18rem" }} className="ms-5">
      <Card.Img variant="top" src={movie.Poster} />
      <Card.Body>
        <Card.Title>{movie.Title}</Card.Title>
        <div>Genre: {movie.Genre}. Year: <strong>{movie.Year}</strong></div>
        <div className="mt-3">{movie.Plot}</div>
        <>
        {movie.Ratings && movie.Ratings.map((e,index)=>{
            return <div key={index} className="mt-3">{e.Source}: <strong>{e.Value}</strong></div>
        })}
        </>
      </Card.Body>
    </Card>
    </>
  );
}
export default DetailedMovieComponent