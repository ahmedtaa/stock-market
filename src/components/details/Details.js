import { useSelector, useDispatch } from 'react-redux';
// import Button from 'react-bootstrap/Button';
// import Badge from 'react-bootstrap/Badge';
// import { loadStocks } from '../../redux/stokes/stokes';

export default function Details() {
  const details = useSelector((state) => state.stocksReducer);
  const dispatch = useDispatch();

  return <>Details</>;
}
