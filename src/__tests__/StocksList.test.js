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

  //   it('Renders the reports component', async () => {
  //     const reports = await StocksListProvider.findByText(
  //       'Daily Metrics Summary'
  //     );
  //     expect(reports).toBeTruthy();

  //     const topCompanies = await StocksListProvider.findAllByRole('feed');
  //     expect(topCompanies).toHaveLength(3);
  //   });

  //   it('Renders the cards for company listings', async () => {
  //     const cards = await StocksListProvider.findAllByRole('img');
  //     expect(cards).toHaveLength(30);
  //   });

  //   it('Renders the search bar', async () => {
  //     const input = await StocksListProvider.findByRole('search');
  //     expect(input).toBeInTheDocument();
  //   });

  //   it('Filters the list of cards on value change', async () => {
  //     const input = await StocksListProvider.findByRole('search');
  //     fireEvent.change(input, { target: { value: 'apple' } });
  //     let cards = await StocksListProvider.findAllByRole('img');
  //     expect(cards).toHaveLength(1);

  //     fireEvent.change(input, { target: { value: 'f' } });
  //     cards = await StocksListProvider.findAllByRole('img');
  //     expect(cards).toHaveLength(8);
  //   });
});
