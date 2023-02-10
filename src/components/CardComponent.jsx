import { Component } from "react";

class CardComponent extends Component {
  state = {
    movieArr:[]
  };
  async fetchMovie(){
    let response = await fetch(`http://www.omdbapi.com/?apikey=1d44bf2a&s=${this.props.movieName}`)
    if(response.ok){
        let data = await response.json()
        this.setState({
            movieArr: data.Search
        })
        
    }
}
componentDidMount(){
   this.fetchMovie()
}
render() {
      
    return (
        <div></div>
    //   <div className="col mb-2 px-1">
    //     <img className="img-fluid" src={this.state.movieArr} alt="movie picture" />
    //   </div>
    );
  }
}
export default CardComponent