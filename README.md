# Country info app

## Overview

This allows us to view info about different countries in the list of countries. Info about country includes:

## Country page includes:

- **Country name**
- **Country neighbors**
- **Chart with country population**
- **Country flag**

## Technologies Used

- **Backend**: Node.js, Express.js
- **Frontend**: HTML, CSS, React; react-router-dom, chart.js libraries

## Setup

### 1. Clone the repository

```bash
git clone https://github.com/Double-Bee-24/Country-Info-App
```

### 2. Install dependencies in both 'client' and 'server' folders

```bash
npm i
```

### 3. Create and configure .env file in the backend and frontend directories

'client' directory should include next lines in .env file:

```bash
 VITE_API_URL=http://localhost:5000/api/v1
```

'server' directory should include next .env file:

```bash
PORT=5000
COUNTRY_API_URL=https://date.nager.at/api/v3/AvailableCountries
COUNTRY_INFO_API_URL=https://date.nager.at/api/v3/CountryInfo
POPULATION_API_URL=https://countriesnow.space/api/v0.1/countries/population
FLAG_API_URL=https://countriesnow.space/api/v0.1/countries/flag/images
```

### 5. Run app

Create two terminals, enter to the folders of both 'server' and 'client' and use next command:

```bash
npm run dev
```
