import { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import {Card,Badge} from "react-bootstrap";

const SingleMovieComponent = () => {
  const params = useParams();

  const [movie, setMovie] = useState([]);
  const [movieComments,setMovieComments] = useState([])

  const fetchSingleMovie = async () => {
    let response = await fetch(
      `http://www.omdbapi.com/?apikey=1d44bf2a&i=${params.id}`
    );
    let responseComment = await fetch(`https://striveschool-api.herokuapp.com/?apikey=1d44bf2a/comments/${params.id}`)
    if (response.ok && responseComment.ok) {
      let data = await response.json();
      let comments = await responseComment.text()
      setMovie(data);
      setMovieComments(comments)
    } else {
      console.log("error");
    }
  };
  console.log(movieComments);
  useEffect(() => {
    fetchSingleMovie();
  }, [params.id]);
  return (
    <>
    <Card style={{ width: "18rem" }} className="ms-5">
      <Card.Img variant="top" src={movie.Poster} />
      <Card.Body>
        <Card.Title>{movie.Title}</Card.Title>
        <div>Year: {movie.Year}</div>
        <Link to={`/detailed-movie/${params.id}`} className="text-dark text-decoration-none"><h4><Badge bg="secondary">More informations</Badge></h4></Link>
      </Card.Body>
    </Card>
        <div className="ms-5">
            <h2>Comments:</h2>
            <p className="text-light">{movieComments}</p>
        </div>
    </>
  );
};
export default SingleMovieComponent;
