import { Badge } from "react-bootstrap";
import { Link } from "react-router-dom";

const TvShowsComponent = () => {
    return(
        <>
        <div className="text-light">BASTA GUARDARE SERIE TV! SCRIVI CODICI!!</div>
        <Link to='/'><Badge className="bg-warning">TORNA INDIETRO</Badge></Link>
        </>
    )
}
export default TvShowsComponent;