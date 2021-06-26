import { Link } from "react-router-dom";
const NotFound = () => {
    return (
        <div className="not-found">
            <h2>ERROR 404</h2>
            <h5>Sorry, the page you are looking for does not exist</h5>
            <Link to="/">return to homepage....</Link>
        </div>
    );
}

export default NotFound;


