import { Component } from "react";
import {Modal,Button} from "react-bootstrap"

class CardComponent extends Component {
  state = {
    movieArr: [],
    text: "CIAOOOO",
  };
  async fetchMovie() {
    let response = await fetch(
      `http://www.omdbapi.com/?apikey=1d44bf2a&s=${this.props.movieName}`
    );
    if (response.ok) {
      let data = await response.json();
      data = data.Search;
      this.setState({
        movieArr: data,
      });
    }
  }
  cardSelected() {
      alert("ciao vita")
  }
  componentDidMount() {
    this.fetchMovie();
  }
  render() {
    return (
      <>
        {this.state.movieArr.map((e) => (
        <div className="col mb-2 px-1" key={e.imdbID}>
           <img className="img-fluid" src={e.Poster} alt="movie picture" style={{width:'200px',height:'308px'}} onClick={(e)=> this.cardSelected(e)} />
        </div>
          
        ))}
      </>
    );
  }
}
export default CardComponent;
