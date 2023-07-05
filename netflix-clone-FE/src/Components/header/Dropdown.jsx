import { Link } from "react-router-dom";

const Dropdown = ({name, path}) => {
    return ( 
        <Link to={`${path}/movies`} className="dropdown_link">
        <li className="dropdown_item">{name}</li>
        </Link>
     );
}
 
export default Dropdown;