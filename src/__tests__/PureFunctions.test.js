import stocksDataReducer from '../redux/stokes/stokes';
import MockDetails from '../__mocks__/MockDetails';
import MockStocks from '../__mocks__/MockStocks';

describe('Test all synchronous actions', () => {
  const Data = MockStocks.map(
    ({
      symbol, name, change, price, changesPercentage,
    }) => ({
      id: symbol,
      change,
      name,
      price,
      changesPercentage,
    }),
  );

  const stocksData = {
    stocksList: [],
    header: 'All Stocks',
    stockDetails: {},
    filteredArr: [],
  };

  const dataPush = stocksDataReducer(stocksData, {
    type: 'stokeStore/stokes/LOAD_STOCKS',
    payload: Data,
  });

  it('load all the active stock companies', () => {
    expect(dataPush.stocksList).toEqual(Data);
  });

  it('loads all company details', () => {
    const { stockDetails } = stocksDataReducer(dataPush, {
      type: 'stokeStore/stokes/STOCK_DETAILS',
      payload: MockDetails.details,
    });
    expect(stockDetails.length).toBe(1);
    expect(stockDetails[0].companyName).toEqual('Apple Inc.');
  });
});
