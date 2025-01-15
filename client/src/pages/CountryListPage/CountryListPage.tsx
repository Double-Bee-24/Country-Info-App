import { useEffect, useState } from "react";
import { getCountriesList } from "../../services/countryService";
import "./CountryListPage.css";
import { Link } from "react-router-dom";

export default function CountryListPage() {
  const [countryList, setCountryList] = useState([
    { countryCode: "UA", name: "Ukraine" },
  ]);
  const countryData = countryList.map((item, index) => (
    <Link key={index} to={`/info/${item.name}/${item.countryCode}`}>
      <div key={index} className="countryListItem">
        {item.name}
      </div>
    </Link>
  ));

  useEffect(() => {
    (async () => {
      const data = await getCountriesList();
      setCountryList(data);
    })();
  }, []);

  return <div className="country-list-page">{countryData}</div>;
}
