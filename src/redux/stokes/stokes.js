// Actions types

const LOAD_STOCKS = 'stokeStore/stokes/LOAD_STOCKS';

// actions

export const loadStocks = (payload) => ({
  type: LOAD_STOCKS,
  payload,
});

export const fetchData = () => (dispatch) => fetch(
  'https://financialmodelingprep.com/api/v3/stock_market/actives?apikey=6a1f14fc6eb501022eeed9081ebd4339',
)
  .then((response) => response.json())
  .then((data) => {
    data.forEach((stock) => {
      dispatch({
        type: LOAD_STOCKS,
        payload: {
          symbol: stock.symbol,
          name: stock.name,
          change: stock.change,
          price: stock.price,
          changesPercentage: stock.changesPercentage,
        },
      });
    });
  })
  .catch((error) => console.log(error));

// reducer

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_STOCKS:
      return [...state, action.payload];

    default:
      return state;
  }
};

export default reducer;
