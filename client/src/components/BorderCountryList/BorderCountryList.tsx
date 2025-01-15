import { Link } from "react-router-dom";
import { findCountryCode } from "../../utils/countries-util";
import "./BorderCountryList.css";

export default function BorderCountryList({
  countryList,
}: {
  countryList: string[];
}) {
  return (
    <div className="border-country-container">
      <ul className="border-country-list">
        <h2>Border Countries</h2>
        {countryList.map((country, index) => (
          <li key={index}>
            <Link
              to={`/info/${country}/${findCountryCode(country)}`}
              className="border-country-link"
            >
              {country}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
