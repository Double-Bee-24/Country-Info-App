import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCountry } from "../../services/countryService";
import BorderCountryList from "../../components/BorderCountryList/BorderCountryList";
import Chart from "../../components/Chart/Chart";

export default function CountryInfoPage() {
  const { countryName, countryCode } = useParams();
  const [countryInfo, setCountryInfo] = useState({
    borderCountries: [""],
    requestedCountryPopulation: {
      populationCounts: [{ year: 0, value: 0 }],
    },
    requestedFlag: {
      iso2: "",
      flag: "",
    },
  });

  useEffect(() => {
    (async () => {
      if (countryName && countryCode) {
        const data = await getCountry(countryName, countryCode);
        setCountryInfo(data);
      }
    })();
  }, [countryCode, countryName]);

  return (
    <div>
      <h1>Country Info</h1>

      <BorderCountryList countryList={countryInfo.borderCountries} />

      <h2>Population Data:</h2>
      <Chart
        populationData={countryInfo.requestedCountryPopulation.populationCounts}
      />
      <h2>Flag:</h2>
      {countryInfo.requestedFlag.flag ? (
        <img src={countryInfo.requestedFlag.flag} alt="Country Flag" />
      ) : (
        <p>No flag available</p>
      )}
    </div>
  );
}
