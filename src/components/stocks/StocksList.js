import { useSelector, useDispatch } from 'react-redux';
import {
  Row, Col, Card, ListGroup,
} from 'react-bootstrap';
// import Button from 'react-bootstrap/Button';
// import Badge from 'react-bootstrap/Badge';
// import { loadStocks } from '../../redux/stokes/stokes';

export default function MissionsList() {
  const stocksList = useSelector((state) => state.stocksReducer);
  const dispatch = useDispatch();

  return (
    <Row xs={2} md={4} className="g-4">
      {stocksList.map((stock) => (
        <Col key={stock.symbol}>
          <Card>
            {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
            <Card.Body>
              <Card.Title>{stock.name}</Card.Title>
              <ListGroup variant="flush">
                <ListGroup.Item>{stock.change}</ListGroup.Item>
                <ListGroup.Item>{stock.price}</ListGroup.Item>
                <ListGroup.Item>{stock.changesPercentage}</ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}
