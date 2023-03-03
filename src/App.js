import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PopularMovies from './containers/popularMovies';
import MovieDetails from './containers/movieDetails';
import Layout from './components/Layout';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getGenres } from './redux/genres';

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getGenres())
  }, [dispatch])

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<PopularMovies />}></Route>
          <Route path="/movie/:id" element={<MovieDetails />}></Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
