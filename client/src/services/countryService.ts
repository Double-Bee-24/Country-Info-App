const getCountriesList = async () => {
  try {
    const baseUrl = import.meta.env.VITE_API_URL;

    const response = await fetch(`${baseUrl}/countries`);
    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error during execution of 'getCountriesList': ", error);
  }
};

const getCountry = async (countryName: string, countryCode: string) => {
  try {
    const baseUrl = import.meta.env.VITE_API_URL;

    const response = await fetch(
      `${baseUrl}/info?countryName=${countryName}&countryCode=${countryCode}`
    );

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error during execution of 'getCountry': ", error);
  }
};

export { getCountriesList, getCountry };
