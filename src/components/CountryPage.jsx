import "./CountryPage.css";
import Chip from "./Chip";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

export default function CountryPage() {
  const { cca2 } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [countryData, setCountryData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`https://restcountries.com/v3.1/alpha/${cca2}`);
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const jsonData = await res.json();
        setCountryData(jsonData[0]);
      } catch (error) {
        setError(error);
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [cca2]);

  let nativeName = "N/A";
  if (countryData?.name.nativeName) {
    nativeName = Object.values(countryData?.name.nativeName)[0].common;
  }

  return (
    <div className="country-page-wrapper">
      <div className="country-page-top">
        <Link to="/" className="back">
          <svg
            className="back-arrow"
            focusable="false"
            aria-hidden="true"
            viewBox="0 0 24 24"
          >
            <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20z"></path>
          </svg>
          BACK
        </Link>
      </div>
      {isLoading ? (
        <p>Loading...</p>
      ) : countryData ? (
        <div className="country-page-body">
          <img
            className="country-flag"
            src={countryData?.flags.svg}
            alt={countryData?.flags.alt}
          />
          <div className="country-info">
            <h1 className="country-name">{countryData?.name.common}</h1>
            <div className="country-details">
              <div>
                <p>
                  <span className="info-label">Population: </span>
                  <span className="info-value">{countryData?.population}</span>
                </p>
                <p>
                  <span className="info-label">Region: </span>
                  <span className="info-value"> {countryData?.region}</span>
                </p>
                <p>
                  <span className="info-label">Capital: </span>
                  <span className="info-value"> {countryData?.capital}</span>
                </p>
                <p>
                  <span className="info-label">Native name: </span>
                  <span className="info-value">
                    {countryData?.name.nativeName
                      ? Object.values(countryData?.name.nativeName)[0].common
                      : "N/A"}
                  </span>
                </p>
              </div>
              <div>
                <p>
                  <span className="info-label">Top level domain: </span>
                  <span className="info-value"> {countryData?.tld[0]}</span>
                </p>
                <p>
                  <span className="info-label">Currencies: </span>
                  <span className="info-value">
                    {countryData.currencies
                      ? countryData?.currencies[
                          Object.keys(countryData?.currencies)[0]
                        ].name
                      : "N/A"}
                  </span>
                </p>
                <p>
                  <span className="info-label">Languages: </span>
                  <span className="info-value">
                    {countryData?.languages
                      ? countryData?.languages.prs
                      : "N/A"}
                  </span>
                </p>
              </div>
            </div>
            <p className="border-countries">
              <span className="info-label">Border Countries: </span>
              <span className="info-value">
                {countryData?.borders?.length > 0
                  ? countryData?.borders.map((border) => (
                      <Chip key={border} border={border} />
                    ))
                  : "N/A"}
              </span>
            </p>
          </div>
        </div>
      ) : (
        <p>No country data found.</p>
      )}
    </div>
  );
}
