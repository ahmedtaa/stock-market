/* eslint-disable max-len */
// Actions types

const LOAD_STOCKS = 'stokeStore/stokes/LOAD_STOCKS';
const STOCK_DETAILS = 'stokeStore/stokes/STOCK_DETAILS';
const FILTER = 'stokeStore/stokes/FILTER';
// actions

export const filter = (payload) => ({
  type: FILTER,
  payload,
});

export const fetchDetail = (symbol) => (dispatch) => {
  const url = `https://financialmodelingprep.com/api/v3/profile/${symbol}?apikey=9aad0298f707880a17c2fab9f596ab36`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      dispatch({
        type: STOCK_DETAILS,
        payload: data,
      });
    });
};

export const fetchData = () => async (dispatch) =>
  fetch(
    'https://financialmodelingprep.com/api/v3/stock_market/actives?apikey=9aad0298f707880a17c2fab9f596ab36'
  )
    .then((response) => response.json())
    .then((data) => {
      dispatch({
        type: LOAD_STOCKS,
        payload: data,
      });
    });

// reducer

const initialState = {
  stocksList: [],
  header: 'All Stocks',
  stockDetails: {},
  filteredArr: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_STOCKS:
      return { ...state, stocksList: action.payload };

    case STOCK_DETAILS:
      return { ...state, stockDetails: action.payload };

    case FILTER:
      if (action.payload === '') {
        return { ...state, filteredArr: [...state.stocksList] };
      }
      return {
        ...state,
        filteredArr: [
          ...state.stocksList.filter(({ name }) =>
            name.toLowerCase().includes(action.payload.toLowerCase())
          ),
        ],
      };

    default:
      return state;
  }
};

export default reducer;
