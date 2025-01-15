import express, { Router } from 'express';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env file

export const createRouter = (): Router => {
  const router = express.Router();

  router.get('/countries', async (req, res) => {
    try {
      const url = process.env.COUNTRY_API_URL;

      if (!url) {
        return;
      }
      const response = await fetch(url);
      const data = await response.json();
      res.json(data);
    } catch (error) {
      console.error('Error during retrieving data via /countries: ', error);
    }
  });

  router.get('/info', async (req, res) => {
    try {
      const { countryName, countryCode } = req.query;

      // Gets border countries data
      const countryInfoUrl = `${process.env.COUNTRY_INFO_API_URL}/${countryCode}`;
      const countryInfoResponse = await fetch(countryInfoUrl);
      const countryInfoData = await countryInfoResponse.json();

      const borderCountries = countryInfoData.borders.map(
        (item: { commonName: string }) => item.commonName
      );

      // Gets population data
      const populationUrl = process.env.POPULATION_API_URL;
      if (!populationUrl) {
        return;
      }
      const populationResponse = await fetch(populationUrl);
      const populationData: {
        data: [
          item: {
            country: string;
            populationCounts: [{ year: number; value: number }];
          },
        ];
      } = await populationResponse.json();

      const populationArray = populationData.data;
      const requestedCountryPopulation = populationArray.find(
        (item) => item.country === countryName
      );

      // Gets flag data
      const flagUrl = process.env.FLAG_API_URL;
      if (!flagUrl) {
        return;
      }
      const flagResponse = await fetch(flagUrl);
      const flagData: {
        data: [item: { name: string; flag: string }];
      } = await flagResponse.json();

      const flagArray = flagData.data;
      const requestedFlag = flagArray.find((item) => item.name === countryName);

      res.json({
        borderCountries,
        requestedCountryPopulation,
        requestedFlag,
      });
    } catch (error) {
      console.error('Error during retrieving data via /info: ', error);
    }
  });

  return router;
};
