import { Link } from "react-router-dom";
import "./Chip.css";

export default function Chip({ border }) {
    return <Link to={`/country/${border}`} className="chip">{border}</Link>;
}