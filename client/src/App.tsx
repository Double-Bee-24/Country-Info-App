import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import CountryListPage from "./pages/CountryListPage/CountryListPage";
import CountryInfoPage from "./pages/CountryInfoPage/CountryInfoPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <CountryListPage />,
    },
    {
      path: "/info/:countryName/:countryCode",
      element: <CountryInfoPage />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
