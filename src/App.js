import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

// pages
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import AllMovie from "./pages/AllMovie.jsx";
import AllTv from "./pages/AllTv.jsx";
import SearchAll from "./pages/SearchAll.jsx";

// query
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import DetailsCard from "./pages/DetailsCard.jsx";
import { MediatMovieTv } from "./Hooks/UseContextApp.jsx";
import { useState } from "react";

const queryClient = new QueryClient();

function App() {
  const [mediaTypeMovieTv, setMediaTypeMovieTv] = useState("movie");
  const [valueSearch, setValueSearch] = useState("");

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path={`/${mediaTypeMovieTv}/:id`} element={<DetailsCard />} />
        <Route path="AllMovie" element={<AllMovie />} />
        <Route path="AllTv" element={<AllTv />} />
        <Route path="SearchAll" element={<SearchAll />} />
      </Route>
    )
  );

  return (
    <QueryClientProvider client={queryClient}>
      <MediatMovieTv.Provider
        value={{
          setMediaTypeMovieTv,
          mediaTypeMovieTv,
          setValueSearch,
          valueSearch,
        }}
      >
        <RouterProvider router={router} />
      </MediatMovieTv.Provider>
    </QueryClientProvider>
  );
}

export default App;
