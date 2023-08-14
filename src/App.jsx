import { useState } from 'react';
import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { PokemonsContextProvider } from './context/pokemonsContext';
// import { FavoritePokemonsContextProvider } from './context/favoritePokemonsContext';
import { FavoritePokemonsContextProvider } from './context/favoritePokemonsContext';
// import   FavortiePokemonsContextProvider  from './context/favoritePokemonsContext';
import { HomePage } from './pages/Home';
import DetailPokemonsPage from './pages/DetailPokemons';
import FavoritePokemonsPage from './pages/FavoritePokemons';
function App() {
  return (
    <>
      <PokemonsContextProvider>
        <FavoritePokemonsContextProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/detailpokemons/:id" element={<DetailPokemonsPage />} />
              <Route path="/favoritepokemons/" element={<FavoritePokemonsPage />} />
              <Route />
            </Routes>
          </BrowserRouter>
        </FavoritePokemonsContextProvider>
      </PokemonsContextProvider>
    </>
  );
}

export default App;
