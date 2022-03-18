import React from 'react';
import { Provider } from 'react-redux';
import { render, cleanup } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import fetchMock from 'jest-fetch-mock';
import StocksList from '../components/stocks/StocksList';

import MockData from '../__mocks__/MockStocks';
import store from '../redux/configureStore';
import { fetchData } from '../redux/stokes/stokes';

fetchMock.enableMocks();

let StocksListProvider;
beforeEach(() => {
  fetch.resetMocks();
  fetch.mockResponseOnce(JSON.stringify(MockData));
  store.dispatch(fetchData());
  StocksListProvider = render(
    <Provider store={store}>
      <Router>
        <StocksList />
      </Router>
    </Provider>,
  );
});

afterEach(() => {
  cleanup();
});

describe('StocksList component', () => {
  it('test if apple inc. is there', async () => {
    const apple = await StocksListProvider.findByText('Apple Inc.');
    expect(apple).toBeTruthy();
  });
});
