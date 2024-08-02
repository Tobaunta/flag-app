import "./CountryCard.css";

export default function CountryCard({
  flags,
  name,
  population,
  region,
  capital,
}) {
  return (
      <div className="card">
        <img className="card-flag" src={flags.png} alt={flags.alt} />
        <div className="card-info">
          <p className="card-name">
            <strong>{name.common}</strong>
          </p>
          <p className="card-details">
            <strong>Population:</strong> {population}
          </p>
          <p className="card-details">
            <strong>Region:</strong> {region}
          </p>
          <p className="card-details">
            <strong>Capital:</strong> {capital}
          </p>
          <span className="focus-highlight"></span>
        </div>
      </div>
  );
}
