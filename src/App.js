import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import './App.css';
import Header from './components/Header';
import { fetchData } from './redux/stokes/stokes';
import StocksList from './components/stocks/StocksList';
import Details from './components/details/Details';
import ErrorBoundary from './helpers/ErrorBoundary';

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, []);
  return (
    <>
      <Router>
        <Header />
        <ErrorBoundary>
          <Routes>
            <Route path="/" exact element={<StocksList />} />

            <Route path="/:id" element={<Details />} />
          </Routes>
        </ErrorBoundary>
      </Router>
    </>
  );
}
