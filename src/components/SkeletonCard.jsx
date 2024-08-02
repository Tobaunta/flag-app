import React from "react";
import "./CountryCard.css";

export default function SkeletonCard({ count }) {
  return (
    <div className="skeleton-wrapper">
      {Array.from({ length: count }).map((_, index) => (
        <div className="skeleton-card" key={index}>
          <div className="skeleton-card-flag"></div>
          <div className="skeleton-card-info">
            <p className="skeleton-card-name">
              <span className="skeleton-name"></span>
            </p>
            <p className="skeleton-card-details">
              <strong>Population:</strong>
            </p>
            <p className="skeleton-card-details">
              <strong>Region:</strong>
            </p>
            <p className="skeleton-card-details">
              <strong>Capital:</strong>
            </p>
            <span className="focus-highlight"></span>
          </div>
        </div>
      ))}
    </div>
  );
}