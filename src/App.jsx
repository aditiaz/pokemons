import { useState } from 'react';
import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import PokemonsContextProvider from './context/PokemonContext';
import { FavortiePokemonsContextProvider } from './context/FavoritePokemonsContext';
import Home from './pages/home';
import DetailPokemonsPage from './pages/DetailPokemons';
import FavoritePokemonsPage from './pages/FavoritePokemons';
function App() {
  return (
    <>
      <PokemonsContextProvider>
        <FavortiePokemonsContextProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/detailpokemons/:id" element={<DetailPokemonsPage />} />
              <Route path="/favoritepokemons/" element={<FavoritePokemonsPage />} />
              <Route />
            </Routes>
          </BrowserRouter>
        </FavortiePokemonsContextProvider>
      </PokemonsContextProvider>
    </>
  );
}

export default App;
