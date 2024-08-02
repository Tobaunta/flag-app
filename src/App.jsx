import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import RootLayout from "./assets/layouts/RootLayout.jsx";
import HomePage from "./components/HomePage.jsx";
import CountryPage from "./components/CountryPage.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<HomePage />} />
      <Route path="country/:cca2" element={<CountryPage />} />
    </Route>
  )
);

export default function App() {
  return <>{<RouterProvider router={router} />}</>;
}
