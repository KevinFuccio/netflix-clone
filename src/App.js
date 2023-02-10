import './App.scss';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import NavigationBar from "./components/NavigationBarComponent"
import GenresComponent from './components/GenresComponent';

function App() {
  return (
    <>
    <NavigationBar/>
    <GenresComponent/>
    </>
  );
}

export default App;
