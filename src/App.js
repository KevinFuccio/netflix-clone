import './App.scss';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import NavigationBar from "./components/NavigationBarComponent"
import GenresComponent from './components/GenresComponent';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import TvShowsComponent from './components/TvShowsComponent'
import SingleMovieComponent from './components/SingleMovieComponent';
import DetailedMovieComponent from './components/DetailedMovieComponent'

function App() {
  return (
    <>
    <BrowserRouter>
      <NavigationBar/>
      <Routes>
        <Route path='/' element={<GenresComponent/>} />
        <Route path='/tv-shows' element={<TvShowsComponent/>} />
        <Route path='/single-movie/:id' element={<SingleMovieComponent/>}/>
        <Route path='/detailed-movie/:id'element={<DetailedMovieComponent/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
